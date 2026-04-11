import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRightLeft,
  CheckCircle2,
  CreditCard,
  Landmark,
  ShieldCheck,
  ShieldX,
  Star,
  Users
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "approvals", label: "Vendor approvals" },
  { id: "orders", label: "Order desk" },
  { id: "reports", label: "Client reports" },
  { id: "reviews", label: "Reviews" },
  { id: "people", label: "User moderation" },
  { id: "ledger", label: "Ledger" }
];

const reportStatuses = ["", "PENDING", "REVIEWED", "RESOLVED", "REJECTED"];

export default function AdminDashboardPage() {
  const { user, token, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reports, setReports] = useState([]);
  const [reportFilter, setReportFilter] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [busyKey, setBusyKey] = useState("");
  const [reportStatusDrafts, setReportStatusDrafts] = useState({});
  const [reportNoteDrafts, setReportNoteDrafts] = useState({});

  useEffect(() => {
    if (!user || !token) {
      return;
    }

    let isActive = true;

    async function loadAdminData() {
      try {
        setLoading(true);
        setError("");

        const [usersResponse, ordersResponse, transactionsResponse, reviewsResponse, reportsResponse] = await Promise.all([
          api.getUsers(token),
          api.getOrders(token),
          api.getTransactions(token),
          api.getAdminReviews(token),
          api.getAdminReports({}, token)
        ]);

        if (!isActive) {
          return;
        }

        setUsers(usersResponse);
        setOrders(ordersResponse);
        setTransactions(transactionsResponse);
        setReviews(reviewsResponse);
        setReports(reportsResponse);
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadAdminData();

    return () => {
      isActive = false;
    };
  }, [refreshKey, token, user]);

  const vendorApprovalQueue = useMemo(
    () => users.filter((entry) => entry.role === "VENDOR" && !entry.verified),
    [users]
  );

  const moderatedUsers = useMemo(
    () => users.filter((entry) => entry.role !== "ADMIN"),
    [users]
  );

  const actionableOrders = useMemo(
    () => orders.filter((order) => ["PAID", "IN_PROGRESS", "SUBMITTED", "APPROVED", "DISPUTE"].includes(order.status)),
    [orders]
  );

  const visibleReports = useMemo(
    () => reports.filter((entry) => !reportFilter || entry.status === reportFilter),
    [reportFilter, reports]
  );

  const metrics = useMemo(() => {
    const totalEscrow = transactions.reduce((sum, entry) => sum + Number(entry.amount || 0), 0);

    return [
      { label: "Pending vendor approvals", value: vendorApprovalQueue.length, icon: ShieldCheck },
      { label: "Orders needing attention", value: actionableOrders.length, icon: ArrowRightLeft },
      { label: "Pending client reports", value: reports.filter((entry) => entry.status === "PENDING").length, icon: AlertTriangle },
      { label: "Published reviews", value: reviews.length, icon: Star },
      { label: "Suspended users", value: users.filter((entry) => entry.status === "SUSPENDED").length, icon: ShieldX },
      { label: "Tracked value", value: `$${totalEscrow.toFixed(2)}`, icon: CreditCard }
    ];
  }, [actionableOrders.length, reports, reviews.length, transactions, users, vendorApprovalQueue.length]);

  async function runAction(actionKey, action, successMessage) {
    try {
      setBusyKey(actionKey);
      setError("");
      await action();
      setNotice(successMessage);
      setRefreshKey((current) => current + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyKey("");
    }
  }

  function renderOverview() {
    return (
      <div className="admin-section-stack">
        <section className="admin-panel admin-panel-hero">
          <div>
            <span className="workspace-kicker">Admin operations</span>
            <h1>Run approvals, protect the marketplace, and settle platform risk from one control room.</h1>
            <p>
              This workspace now includes vendor-to-client reports alongside review visibility, vendor approval, order intervention, and transaction oversight.
            </p>
          </div>
          <div className="admin-hero-card">
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
            <p>Role: {user?.role}</p>
            <button className="ghost-button" onClick={logout}>Sign out</button>
          </div>
        </section>

        <section className="workspace-stats-grid admin-stats-grid">
          {metrics.map(({ label, value, icon: Icon }) => (
            <article key={label} className="workspace-stat-card admin-stat-card">
              <span className="workspace-stat-icon"><Icon size={18} /></span>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="admin-dual-grid">
          <article className="admin-panel">
            <div className="workspace-panel-head">
              <div>
                <span className="workspace-kicker">Immediate queue</span>
                <h2>Fresh client reports</h2>
              </div>
              <button className="workspace-link" onClick={() => setActiveTab("reports")}>Open reports</button>
            </div>
            <div className="admin-mini-list">
              {visibleReports.slice(0, 4).map((entry) => (
                <div key={entry.id} className="admin-mini-row">
                  <div>
                    <strong>{entry.vendorName} reported {entry.clientName}</strong>
                    <p>{entry.reasonCategory}</p>
                  </div>
                  <span className={`status-chip ${entry.status.toLowerCase()}`}>{entry.status}</span>
                </div>
              ))}
              {visibleReports.length === 0 && <p className="subtle">No client reports match the current filter.</p>}
            </div>
          </article>

          <article className="admin-panel">
            <div className="workspace-panel-head">
              <div>
                <span className="workspace-kicker">Marketplace sentiment</span>
                <h2>Recent reviews</h2>
              </div>
              <button className="workspace-link" onClick={() => setActiveTab("reviews")}>Open reviews</button>
            </div>
            <div className="admin-mini-list">
              {reviews.slice(0, 4).map((entry) => (
                <div key={entry.id} className="admin-mini-row">
                  <div>
                    <strong>{entry.clientName} rated {entry.vendorName}</strong>
                    <p>{entry.comment || "No written feedback provided."}</p>
                  </div>
                  <span className="status-chip completed">{entry.rating}/5</span>
                </div>
              ))}
              {reviews.length === 0 && <p className="subtle">No reviews have been submitted yet.</p>}
            </div>
          </article>
        </section>
      </div>
    );
  }

  function renderApprovals() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Queue</span>
            <h2>Vendor approvals</h2>
          </div>
          <p className="subtle">Approve only real vendor accounts. Suspended users stay visible for audit context.</p>
        </div>

        {vendorApprovalQueue.length === 0 && <p className="subtle">No vendors are waiting for approval.</p>}
        {vendorApprovalQueue.map((entry) => (
          <article key={entry.id} className="admin-action-card">
            <div>
              <strong>{entry.name}</strong>
              <p>{entry.email}</p>
              <div className="admin-inline-meta">
                <span className="status-chip">{entry.role}</span>
                <span className={`status-chip ${entry.status.toLowerCase()}`}>{entry.status}</span>
              </div>
            </div>
            <button
              className="primary-button"
              disabled={busyKey === `approve-${entry.id}`}
              onClick={() => runAction(`approve-${entry.id}`, () => api.approveVendor(entry.id, token), `Approved vendor ${entry.name}.`)}
            >
              {busyKey === `approve-${entry.id}` ? "Approving..." : "Approve vendor"}
            </button>
          </article>
        ))}
      </section>
    );
  }

  function renderOrders() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Operations</span>
            <h2>Order desk</h2>
          </div>
          <p className="subtle">Only actions supported safely by the current backend are exposed here.</p>
        </div>

        {actionableOrders.length === 0 && <p className="subtle">No orders currently need admin intervention.</p>}
        {actionableOrders.map((order) => (
          <article key={order.id} className="admin-order-card">
            <div className="admin-order-top">
              <div>
                <strong>Order #{order.id} - {order.serviceTitle}</strong>
                <p>{order.clientName} to {order.vendorName}</p>
              </div>
              <div className="admin-inline-meta vertical-end">
                <span className={`status-chip ${order.status.toLowerCase()}`}>{order.status}</span>
                <span className="status-chip">${order.price}</span>
                {order.reviewSubmitted && <span className="status-chip completed">Reviewed</span>}
              </div>
            </div>

            <div className="admin-order-details">
              <span>Preferred date: {order.preferredDate || "Not specified"}</span>
              <span>Pricing: {order.selectedPricingOptionLabel || "Standard quote"}</span>
              {order.statusNote && <span>Latest note: {order.statusNote}</span>}
              {order.workSubmission && <span>Submission: {order.workSubmission}</span>}
            </div>

            <div className="admin-order-actions">
              {["PAID", "IN_PROGRESS", "SUBMITTED"].includes(order.status) && (
                <>
                  <button
                    className="ghost-button"
                    disabled={busyKey === `dispute-${order.id}`}
                    onClick={() => runAction(
                      `dispute-${order.id}`,
                      () => api.updateOrderStatus(order.id, { status: "DISPUTE", statusNote: "Flagged by admin for manual review." }, token),
                      `Order #${order.id} moved to dispute.`
                    )}
                  >
                    {busyKey === `dispute-${order.id}` ? "Updating..." : "Open dispute"}
                  </button>
                  <button
                    className="ghost-button"
                    disabled={busyKey === `cancel-${order.id}`}
                    onClick={() => runAction(
                      `cancel-${order.id}`,
                      () => api.updateOrderStatus(order.id, { status: "CANCELLED", statusNote: "Cancelled by admin after manual review." }, token),
                      `Order #${order.id} cancelled.`
                    )}
                  >
                    {busyKey === `cancel-${order.id}` ? "Updating..." : "Cancel order"}
                  </button>
                </>
              )}

              {order.status === "APPROVED" && (
                <button
                  className="primary-button"
                  disabled={busyKey === `release-${order.id}`}
                  onClick={() => runAction(
                    `release-${order.id}`,
                    () => api.releasePayment({ orderId: order.id }, token),
                    `Escrow released for order #${order.id}.`
                  )}
                >
                  {busyKey === `release-${order.id}` ? "Releasing..." : "Release escrow"}
                </button>
              )}

              {order.status === "DISPUTE" && (
                <div className="admin-info-chip">
                  Disputed orders are visible here, but final dispute resolution flow is still manual.
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    );
  }

  function renderReports() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Trust and safety</span>
            <h2>Vendor reports about clients</h2>
          </div>
          <p className="subtle">Each report is tied to an order so admin can review context before acting.</p>
        </div>

        <div className="vendor-toolbar">
          <label>
            Filter by status
            <select value={reportFilter} onChange={(event) => setReportFilter(event.target.value)}>
              {reportStatuses.map((status) => <option key={status || "all"} value={status}>{status || "All statuses"}</option>)}
            </select>
          </label>
        </div>

        {visibleReports.length === 0 && <p className="subtle">No client reports match the current filter.</p>}
        {visibleReports.map((report) => (
          <article key={report.id} className="admin-order-card">
            <div className="admin-order-top">
              <div>
                <strong>Report #{report.id} - {report.reasonCategory}</strong>
                <p>{report.vendorName} reported {report.clientName}</p>
              </div>
              <div className="admin-inline-meta vertical-end">
                <span className={`status-chip ${report.status.toLowerCase()}`}>{report.status}</span>
                <span className="status-chip">Order #{report.orderId}</span>
              </div>
            </div>

            <div className="admin-order-details">
              <span>Service: {report.serviceTitle}</span>
              <span>Created: {new Date(report.createdAt).toLocaleString()}</span>
              {report.adminNote && <span>Admin note: {report.adminNote}</span>}
            </div>

            <p>{report.description}</p>

            <label>
              Admin note
              <textarea
                value={reportNoteDrafts[report.id] ?? report.adminNote ?? ""}
                onChange={(event) => setReportNoteDrafts((current) => ({ ...current, [report.id]: event.target.value }))}
              />
            </label>

            <div className="admin-order-actions">
              <select
                value={reportStatusDrafts[report.id] || report.status}
                onChange={(event) => setReportStatusDrafts((current) => ({ ...current, [report.id]: event.target.value }))}
              >
                {reportStatuses.slice(1).map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              <button
                className="primary-button"
                disabled={busyKey === `report-${report.id}`}
                onClick={() => runAction(
                  `report-${report.id}`,
                  () =>
                    api.updateAdminReportStatus(
                      report.id,
                      {
                        status: reportStatusDrafts[report.id] || report.status,
                        adminNote: reportNoteDrafts[report.id] ?? report.adminNote ?? ""
                      },
                      token
                    ),
                  `Updated report #${report.id}.`
                )}
              >
                {busyKey === `report-${report.id}` ? "Saving..." : "Update report"}
              </button>
              {report.status !== "RESOLVED" && report.status !== "REJECTED" && (
                <button
                  className="ghost-button"
                  disabled={busyKey === `suspend-client-${report.clientId}`}
                  onClick={() => runAction(
                    `suspend-client-${report.clientId}`,
                    () => api.suspendUser(report.clientId, token),
                    `Suspended ${report.clientName}.`
                  )}
                >
                  {busyKey === `suspend-client-${report.clientId}` ? "Suspending..." : "Suspend client"}
                </button>
              )}
            </div>
          </article>
        ))}
      </section>
    );
  }

  function renderReviews() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Marketplace feedback</span>
            <h2>All client reviews</h2>
          </div>
          <p className="subtle">Admins can inspect published ratings and written feedback across vendors.</p>
        </div>

        {reviews.length === 0 && <p className="subtle">No reviews have been submitted yet.</p>}
        {reviews.map((review) => (
          <article key={review.id} className="admin-action-card">
            <div>
              <strong>{review.clientName} rated {review.vendorName}</strong>
              <p>{review.comment || "No written feedback provided."}</p>
              <div className="admin-inline-meta">
                <span className="status-chip completed">{review.rating}/5</span>
                <span className="status-chip">Order #{review.orderId}</span>
                <span className="status-chip">{new Date(review.createdAt).toLocaleDateString()}</span>
              </div>
              {review.reply && <p className="subtle">Vendor reply: {review.reply.comment}</p>}
            </div>
          </article>
        ))}
      </section>
    );
  }

  function renderPeople() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Trust and safety</span>
            <h2>User moderation</h2>
          </div>
          <p className="subtle">Admin accounts are intentionally excluded from suspension controls in this UI.</p>
        </div>

        {moderatedUsers.map((entry) => (
          <article key={entry.id} className="admin-action-card">
            <div>
              <strong>{entry.name}</strong>
              <p>{entry.email}</p>
              <div className="admin-inline-meta">
                <span className="status-chip">{entry.role}</span>
                <span className={`status-chip ${entry.status.toLowerCase()}`}>{entry.status}</span>
                {entry.verified && <span className="status-chip completed">Verified vendor</span>}
              </div>
            </div>
            <div className="admin-order-actions">
              {entry.status !== "SUSPENDED" && (
                <button
                  className="ghost-button"
                  disabled={busyKey === `suspend-${entry.id}`}
                  onClick={() => runAction(`suspend-${entry.id}`, () => api.suspendUser(entry.id, token), `Suspended ${entry.name}.`)}
                >
                  {busyKey === `suspend-${entry.id}` ? "Suspending..." : "Suspend user"}
                </button>
              )}
              {entry.status === "SUSPENDED" && <div className="admin-info-chip">Already suspended</div>}
            </div>
          </article>
        ))}
      </section>
    );
  }

  function renderLedger() {
    return (
      <section className="admin-panel admin-section-stack">
        <div className="workspace-panel-head">
          <div>
            <span className="workspace-kicker">Finance trace</span>
            <h2>Transaction ledger</h2>
          </div>
          <p className="subtle">Platform-wide credits and debits recorded by the backend.</p>
        </div>

        <div className="admin-ledger-table-wrap">
          <table className="admin-ledger-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Reference</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((entry) => (
                <tr key={entry.id}>
                  <td>#{entry.id}</td>
                  <td>{entry.userName || "SYSTEM"}</td>
                  <td>{entry.type}</td>
                  <td>${entry.amount}</td>
                  <td>{entry.referenceId}</td>
                  <td>{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (loading) {
    return <div className="page section-block subtle">Loading admin operations...</div>;
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <span className="brand-mark">S</span>
          <div>
            <strong>ServiceHub Admin</strong>
            <span>Marketplace control room</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`admin-nav-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-summary">
          <div className="admin-side-card">
            <Users size={16} />
            <div>
              <strong>{users.length}</strong>
              <span>Total users</span>
            </div>
          </div>
          <div className="admin-side-card">
            <AlertTriangle size={16} />
            <div>
              <strong>{reports.filter((entry) => entry.status === "PENDING").length}</strong>
              <span>Pending reports</span>
            </div>
          </div>
          <div className="admin-side-card">
            <CheckCircle2 size={16} />
            <div>
              <strong>{reviews.length}</strong>
              <span>Total reviews</span>
            </div>
          </div>
          <div className="admin-side-card">
            <Landmark size={16} />
            <div>
              <strong>{transactions.length}</strong>
              <span>Ledger entries</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="admin-main">
        {(error || notice) && (
          <section className="workspace-message-row">
            {error && <div className="workspace-message error">{error}</div>}
            {notice && <div className="workspace-message notice">{notice}</div>}
          </section>
        )}

        {activeTab === "overview" && renderOverview()}
        {activeTab === "approvals" && renderApprovals()}
        {activeTab === "orders" && renderOrders()}
        {activeTab === "reports" && renderReports()}
        {activeTab === "reviews" && renderReviews()}
        {activeTab === "people" && renderPeople()}
        {activeTab === "ledger" && renderLedger()}
      </section>
    </main>
  );
}
