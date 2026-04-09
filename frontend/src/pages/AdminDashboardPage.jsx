import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRightLeft,
  CheckCircle2,
  CreditCard,
  Landmark,
  ShieldCheck,
  ShieldX,
  Users
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "approvals", label: "Vendor approvals" },
  { id: "orders", label: "Order desk" },
  { id: "people", label: "User moderation" },
  { id: "ledger", label: "Ledger" }
];

export default function AdminDashboardPage() {
  const { user, token, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [busyKey, setBusyKey] = useState("");

  useEffect(() => {
    if (!user || !token) {
      return;
    }

    let isActive = true;

    async function loadAdminData() {
      try {
        setLoading(true);
        setError("");

        const [usersResponse, ordersResponse, transactionsResponse] = await Promise.all([
          api.getUsers(token),
          api.getOrders(token),
          api.getTransactions(token)
        ]);

        if (!isActive) {
          return;
        }

        setUsers(usersResponse);
        setOrders(ordersResponse);
        setTransactions(transactionsResponse);
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

  const metrics = useMemo(() => {
    const totalEscrow = transactions.reduce((sum, entry) => sum + Number(entry.amount || 0), 0);

    return [
      { label: "Pending vendor approvals", value: vendorApprovalQueue.length, icon: ShieldCheck },
      { label: "Orders needing attention", value: actionableOrders.length, icon: ArrowRightLeft },
      { label: "Suspended users", value: users.filter((entry) => entry.status === "SUSPENDED").length, icon: ShieldX },
      { label: "Ledger entries", value: transactions.length, icon: Landmark },
      { label: "Tracked value", value: `$${totalEscrow.toFixed(2)}`, icon: CreditCard }
    ];
  }, [actionableOrders.length, transactions, users, vendorApprovalQueue.length]);

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
              This workspace is built around the backend capabilities that exist today: user oversight, vendor approval, order intervention, transaction visibility, and payout release after client approval.
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
                <h2>Vendor approvals</h2>
              </div>
              <button className="workspace-link" onClick={() => setActiveTab("approvals")}>Open queue</button>
            </div>
            <div className="admin-mini-list">
              {vendorApprovalQueue.slice(0, 4).map((entry) => (
                <div key={entry.id} className="admin-mini-row">
                  <div>
                    <strong>{entry.name}</strong>
                    <p>{entry.email}</p>
                  </div>
                  <span className="status-chip pending">Needs review</span>
                </div>
              ))}
              {vendorApprovalQueue.length === 0 && <p className="subtle">No vendors are waiting for approval.</p>}
            </div>
          </article>

          <article className="admin-panel">
            <div className="workspace-panel-head">
              <div>
                <span className="workspace-kicker">Known limits</span>
                <h2>What admin can and cannot do</h2>
              </div>
            </div>
            <ul className="admin-capability-list">
              <li>Can approve vendors, suspend non-admin users, and inspect all platform users.</li>
              <li>Can view every order and mark active orders as dispute or cancelled when intervention is needed.</li>
              <li>Can release escrow only after a client-approved order reaches the approved state.</li>
              <li>Cannot publish services, impersonate vendors, or fund bookings on behalf of a client.</li>
              <li>Dispute completion is intentionally not exposed here because the current backend separates order completion from payout release.</li>
            </ul>
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
                  Disputed orders are visible here, but final dispute resolution flow is incomplete in the current backend.
                </div>
              )}
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
              <strong>{actionableOrders.length}</strong>
              <span>Active interventions</span>
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
        {activeTab === "people" && renderPeople()}
        {activeTab === "ledger" && renderLedger()}
      </section>
    </main>
  );
}


