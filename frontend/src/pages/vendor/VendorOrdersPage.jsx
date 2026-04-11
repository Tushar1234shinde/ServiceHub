import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const statusFilters = ["", "PAID", "IN_PROGRESS", "SUBMITTED", "COMPLETED", "CANCELLED", "DISPUTE"];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

function nextVendorStatuses(currentStatus) {
  if (currentStatus === "PAID") {
    return ["IN_PROGRESS", "CANCELLED"];
  }
  if (currentStatus === "IN_PROGRESS") {
    return ["SUBMITTED"];
  }
  return [];
}

export default function VendorOrdersPage() {
  const { token } = useAuth();
  const [statusFilter, setStatusFilter] = useState("");
  const [orders, setOrders] = useState([]);
  const [reports, setReports] = useState([]);
  const [noteDrafts, setNoteDrafts] = useState({});
  const [workDrafts, setWorkDrafts] = useState({});
  const [statusDrafts, setStatusDrafts] = useState({});
  const [reportDrafts, setReportDrafts] = useState({});
  const [reportOpen, setReportOpen] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadOrders(filter = statusFilter) {
    const response = await api.getVendorOrders(filter ? { status: filter } : {}, token);
    setOrders(response);
  }

  async function loadReports() {
    const response = await api.getVendorReports(token);
    setReports(response);
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const [ordersResponse, reportsResponse] = await Promise.all([
          api.getVendorOrders(statusFilter ? { status: statusFilter } : {}, token),
          api.getVendorReports(token)
        ]);
        if (active) {
          setOrders(ordersResponse);
          setReports(reportsResponse);
          setError("");
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [statusFilter, token]);

  const orderCountText = useMemo(() => `${orders.length} order${orders.length === 1 ? "" : "s"}`, [orders.length]);

  async function handleStatusUpdate(orderId) {
    try {
      const status = statusDrafts[orderId];
      if (!status) {
        setError("Choose a valid next status first.");
        return;
      }
      await api.updateVendorOrderStatus(orderId, { status, statusNote: noteDrafts[orderId] || null }, token);
      setNotice(`Order #${orderId} updated to ${status}.`);
      setError("");
      await loadOrders();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleNoteUpdate(orderId) {
    try {
      await api.updateVendorOrderNote(orderId, { statusNote: noteDrafts[orderId] || "" }, token);
      setNotice(`Note saved for order #${orderId}.`);
      setError("");
      await loadOrders();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleSubmitWork(orderId) {
    try {
      await api.submitVendorWork(orderId, { workSubmission: workDrafts[orderId] || "" }, token);
      setNotice(`Work submitted for order #${orderId}.`);
      setError("");
      await loadOrders();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleCreateReport(order) {
    const draft = reportDrafts[order.id] || { reasonCategory: "", description: "" };

    if (!draft.reasonCategory?.trim() || !draft.description?.trim()) {
      setError("Report reason and details are required.");
      setNotice("");
      return;
    }

    try {
      await api.createVendorReport(
        {
          clientId: order.clientId,
          orderId: order.id,
          reasonCategory: draft.reasonCategory,
          description: draft.description
        },
        token
      );
      setNotice(`Client report submitted for order #${order.id}.`);
      setError("");
      setReportDrafts((current) => ({ ...current, [order.id]: { reasonCategory: "", description: "" } }));
      setReportOpen((current) => ({ ...current, [order.id]: false }));
      await loadReports();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading orders...</p></section>;
  }

  return (
    <section className="card vendor-panel">
      <div className="section-headline compact-headline">
        <h2>Orders</h2>
        <p>Review assigned jobs, update status, add notes, submit completed work, and flag client issues for admin.</p>
      </div>
      <div className="vendor-toolbar">
        <label>
          Filter by status
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            {statusFilters.map((status) => <option key={status || "all"} value={status}>{status || "All statuses"}</option>)}
          </select>
        </label>
        <span className="subtle">{orderCountText}</span>
      </div>
      {error && <p className="error">{error}</p>}
      {notice && <p className="notice">{notice}</p>}
      {orders.length === 0 ? (
        <p className="subtle">No orders match the current filter.</p>
      ) : (
        <div className="vendor-list">
          {orders.map((order) => {
            const availableStatuses = nextVendorStatuses(order.status);
            const reportForOrder = reports.find((report) => report.orderId === order.id);
            return (
              <article className="vendor-order-card" key={order.id}>
                <div className="vendor-order-head">
                  <div>
                    <strong>#{order.id} - {order.serviceTitle}</strong>
                    <p className="subtle">Client: {order.clientName}</p>
                  </div>
                  <div className="vendor-row-meta vertical-end">
                    <span className={`status-chip ${order.status.toLowerCase()}`}>{order.status}</span>
                    <strong>{formatCurrency(order.price)}</strong>
                  </div>
                </div>

                <div className="vendor-detail-grid order-grid">
                  <div><span>Preferred date</span><strong>{order.preferredDate || "Not provided"}</strong></div>
                  <div><span>Pricing option</span><strong>{order.selectedPricingOptionLabel || "Standard quote"}</strong></div>
                  <div><span>Material included</span><strong>{order.materialIncluded ? "Yes" : "No"}</strong></div>
                  <div><span>Created</span><strong>{new Date(order.createdAt).toLocaleString()}</strong></div>
                </div>

                {order.clientNote && <div className="vendor-note-box"><strong>Client note</strong><p>{order.clientNote}</p></div>}
                {order.attachments?.length > 0 && (
                  <div>
                    <strong>Request attachments</strong>
                    <div className="order-attachments">
                      {order.attachments.map((attachment) => <img key={attachment.id} className="order-attachment-thumb" src={attachment.imageData} alt={attachment.caption || `Attachment ${attachment.id}`} />)}
                    </div>
                  </div>
                )}

                <label>
                  Status note
                  <textarea value={noteDrafts[order.id] ?? order.statusNote ?? ""} onChange={(event) => setNoteDrafts((current) => ({ ...current, [order.id]: event.target.value }))} />
                </label>
                <div className="vendor-inline-actions">
                  <button className="ghost-button" type="button" onClick={() => handleNoteUpdate(order.id)}>Save note</button>
                  {availableStatuses.length > 0 && (
                    <>
                      <select value={statusDrafts[order.id] || ""} onChange={(event) => setStatusDrafts((current) => ({ ...current, [order.id]: event.target.value }))}>
                        <option value="">Choose next status</option>
                        {availableStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
                      </select>
                      <button className="primary-button" type="button" onClick={() => handleStatusUpdate(order.id)}>Update status</button>
                    </>
                  )}
                  <button
                    className="ghost-button"
                    type="button"
                    onClick={() => setReportOpen((current) => ({ ...current, [order.id]: !current[order.id] }))}
                  >
                    {reportOpen[order.id] ? "Close report" : reportForOrder ? "View report" : "Report client"}
                  </button>
                </div>

                {(order.status === "IN_PROGRESS" || order.status === "SUBMITTED") && (
                  <>
                    <label>
                      Work submission
                      <textarea value={workDrafts[order.id] ?? order.workSubmission ?? ""} onChange={(event) => setWorkDrafts((current) => ({ ...current, [order.id]: event.target.value }))} />
                    </label>
                    {order.status === "IN_PROGRESS" && <button className="primary-button" type="button" onClick={() => handleSubmitWork(order.id)}>Submit work</button>}
                  </>
                )}

                {reportForOrder && (
                  <div className="vendor-note-box">
                    <strong>Submitted report</strong>
                    <p><strong>{reportForOrder.reasonCategory}</strong></p>
                    <p>{reportForOrder.description}</p>
                    <p className="subtle">
                      Status: {reportForOrder.status}
                      {reportForOrder.adminNote ? ` | Admin note: ${reportForOrder.adminNote}` : ""}
                    </p>
                  </div>
                )}

                {reportOpen[order.id] && !reportForOrder && (
                  <div className="review-box card">
                    <label>
                      Reason or category
                      <input
                        value={reportDrafts[order.id]?.reasonCategory || ""}
                        onChange={(event) =>
                          setReportDrafts((current) => ({
                            ...current,
                            [order.id]: {
                              ...(current[order.id] || {}),
                              reasonCategory: event.target.value
                            }
                          }))
                        }
                        placeholder="Harassment, abusive language, no-show, payment issue"
                      />
                    </label>
                    <label>
                      Report details
                      <textarea
                        value={reportDrafts[order.id]?.description || ""}
                        onChange={(event) =>
                          setReportDrafts((current) => ({
                            ...current,
                            [order.id]: {
                              ...(current[order.id] || {}),
                              description: event.target.value
                            }
                          }))
                        }
                        placeholder="Explain what happened so admin can review it."
                      />
                    </label>
                    <div className="vendor-inline-actions">
                      <button className="primary-button" type="button" onClick={() => handleCreateReport(order)}>
                        Submit report
                      </button>
                      <button className="ghost-button" type="button" onClick={() => setReportOpen((current) => ({ ...current, [order.id]: false }))}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {reports.length > 0 && (
        <section className="vendor-panel">
          <div className="section-headline compact-headline">
            <h2>Submitted reports</h2>
            <p>Reports you have already sent to admin for review.</p>
          </div>
          <div className="vendor-list">
            {reports.map((report) => (
              <article className="vendor-list-row stacked" key={report.id}>
                <div className="vendor-list-row-top">
                  <div>
                    <strong>Order #{report.orderId} - {report.serviceTitle}</strong>
                    <p className="subtle">Client: {report.clientName}</p>
                  </div>
                  <span className={`status-chip ${report.status.toLowerCase()}`}>{report.status}</span>
                </div>
                <p><strong>{report.reasonCategory}</strong></p>
                <p>{report.description}</p>
                {report.adminNote && <p className="subtle">Admin note: {report.adminNote}</p>}
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
