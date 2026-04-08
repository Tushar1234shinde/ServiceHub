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
  const [noteDrafts, setNoteDrafts] = useState({});
  const [workDrafts, setWorkDrafts] = useState({});
  const [statusDrafts, setStatusDrafts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadOrders(filter = statusFilter) {
    const response = await api.getVendorOrders(filter ? { status: filter } : {}, token);
    setOrders(response);
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const response = await api.getVendorOrders(statusFilter ? { status: statusFilter } : {}, token);
        if (active) {
          setOrders(response);
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

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading orders...</p></section>;
  }

  return (
    <section className="card vendor-panel">
      <div className="section-headline compact-headline">
        <h2>Orders</h2>
        <p>Review assigned jobs, update status, add notes, and submit completed work.</p>
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
            return (
              <article className="vendor-order-card" key={order.id}>
                <div className="vendor-order-head">
                  <div>
                    <strong>#{order.id} • {order.serviceTitle}</strong>
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
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
