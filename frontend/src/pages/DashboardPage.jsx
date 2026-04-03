import { useEffect, useMemo, useState } from "react";
import { BadgeCheck } from "lucide-react";
import OrderCard from "../components/OrderCard";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

const vendorServiceTemplate = { title: "", description: "", price: "", category: "" };
const reviewTemplate = { orderId: "", rating: 5, comment: "" };
const serviceCategoryOptions = [
  "Painting",
  "Window Making",
  "Plastering",
  "POP / False Ceiling",
  "PVC / Modular Work",
  "Renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

export default function DashboardPage() {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [vendorServices, setVendorServices] = useState([]);
  const [vendorAnalytics, setVendorAnalytics] = useState(null);
  const [savedServices, setSavedServices] = useState([]);
  const [serviceForm, setServiceForm] = useState(vendorServiceTemplate);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [reviewForm, setReviewForm] = useState(reviewTemplate);
  const [orderFilter, setOrderFilter] = useState("ALL");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      setError("");
      setLoading(true);
      const orderData = await api.getOrders(token);
      setOrders(orderData);

      if (user.role === "VENDOR") {
        const [ownServices, analytics] = await Promise.all([api.getMyServices(token), api.getVendorAnalytics(token)]);
        setVendorServices(ownServices);
        setVendorAnalytics(analytics);
      }

      if (user.role === "CLIENT") {
        const saved = await api.getSavedServices(token);
        setSavedServices(saved);
      }

      if (user.role === "ADMIN") {
        const [userData, transactionData] = await Promise.all([api.getUsers(token), api.getTransactions(token)]);
        setUsers(userData);
        setTransactions(transactionData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  const filteredOrders = useMemo(() => {
    if (orderFilter === "ALL") {
      return orders;
    }
    return orders.filter((order) => order.status === orderFilter);
  }, [orders, orderFilter]);

  const reviewableOrders = useMemo(
    () => orders.filter((order) => order.status === "COMPLETED" || order.status === "APPROVED"),
    [orders]
  );

  const pendingVendorApprovals = useMemo(
    () => users.filter((account) => account.role === "VENDOR" && !account.verified).length,
    [users]
  );

  async function updateOrder(orderId, status, submissionNote = "") {
    try {
      setMessage("");
      setError("");
      await api.updateOrderStatus(orderId, { status, submissionNote }, token);
      setMessage(status === "APPROVED" ? "Work approved. Admin can release escrow now." : `Order #${orderId} updated to ${status}.`);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function saveService(event) {
    event.preventDefault();
    const payload = {
      ...serviceForm,
      price: Number(serviceForm.price)
    };

    if (!payload.title || !payload.description || !payload.category || Number.isNaN(payload.price) || payload.price <= 0) {
      setError("Please provide valid service details with a positive price.");
      return;
    }

    try {
      setMessage("");
      setError("");
      if (editingServiceId) {
        await api.updateService(editingServiceId, payload, token);
        setMessage("Service updated.");
      } else {
        await api.createService(payload, token);
        setMessage("Service created.");
      }
      setServiceForm(vendorServiceTemplate);
      setEditingServiceId(null);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  function beginEditService(service) {
    setEditingServiceId(service.id);
    setServiceForm({
      title: service.title,
      description: service.description,
      price: service.price,
      category: service.category
    });
  }

  async function submitReview(event) {
    event.preventDefault();
    if (!reviewForm.orderId) {
      setError("Select an order to review.");
      return;
    }

    try {
      setMessage("");
      setError("");
      await api.createReview({ ...reviewForm, orderId: Number(reviewForm.orderId), rating: Number(reviewForm.rating) }, token);
      setReviewForm(reviewTemplate);
      setMessage("Review submitted.");
    } catch (err) {
      setError(err.message);
    }
  }

  async function approveVendor(userId) {
    try {
      setMessage("");
      setError("");
      await api.approveVendor(userId, token);
      setMessage("Vendor verified with blue check.");
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function releasePayment(orderId) {
    try {
      setMessage("");
      setError("");
      await api.releasePayment({ orderId }, token);
      setMessage(`Escrow released for order #${orderId}.`);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">{user.role}</span>
          <h1 className="vendor-name-row">
            <span>{user.name}</span>
            {user.role === "VENDOR" && user.verified && <BadgeCheck size={18} className="verified-badge-inline" aria-label="Verified vendor" />}
          </h1>
          <p>Status: {user.status}</p>
          {user.role === "VENDOR" && (
            <p className="subtle">{user.verified ? "Your profile shows the blue verified badge to all users." : "You can publish services now. Admin verification only adds the blue badge."}</p>
          )}
        </div>
        <div className="stats-grid mini">
          <article className="card stat-card"><strong>{orders.length}</strong><span>Total orders</span></article>
          {user.role === "VENDOR" && <article className="card stat-card"><strong>{vendorServices.length}</strong><span>Your services</span></article>}
          {user.role === "ADMIN" && <article className="card stat-card"><strong>{pendingVendorApprovals}</strong><span>Unverified vendors</span></article>}
          {user.role === "CLIENT" && <article className="card stat-card"><strong>{savedServices.length}</strong><span>Saved services</span></article>}
        </div>
      </section>

      {message && <p className="notice">{message}</p>}
      {error && <p className="error">{error}</p>}

      <section className="card filters-row compact">
        <label>
          Order status
          <select value={orderFilter} onChange={(e) => setOrderFilter(e.target.value)}>
            <option value="ALL">All statuses</option>
            {["PAID", "IN_PROGRESS", "SUBMITTED", "APPROVED", "COMPLETED", "CANCELLED", "DISPUTE"].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
      </section>

      {user.role === "VENDOR" && vendorAnalytics && (
        <section className="card analytics-panel">
          <h2>Vendor analytics</h2>
          <div className="stats-grid">
            <article className="card stat-card"><strong>{vendorAnalytics.totalOrders}</strong><span>Total orders</span></article>
            <article className="card stat-card"><strong>{vendorAnalytics.activeOrders}</strong><span>Active orders</span></article>
            <article className="card stat-card"><strong>{vendorAnalytics.completedOrders}</strong><span>Completed orders</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.averageOrderValue}</strong><span>Avg order value</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.grossOrderValue}</strong><span>Gross pipeline</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.completedOrderValue}</strong><span>Realized revenue</span></article>
          </div>
        </section>
      )}

      {user.role === "VENDOR" && (
        <section className="card form-card">
          <h2>{editingServiceId ? "Edit service" : "Create service"}</h2>
          <form onSubmit={saveService}>
            <input placeholder="Title" value={serviceForm.title} onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })} />
            <textarea placeholder="Description" value={serviceForm.description} onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })} />
            <input placeholder="Price" value={serviceForm.price} onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })} />
            <select value={serviceForm.category} onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}>
              <option value="">Select category</option>
              {serviceCategoryOptions.map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
            <div className="action-row">
              <button className="primary-button" type="submit">{editingServiceId ? "Save changes" : "Publish service"}</button>
              {editingServiceId && (
                <button className="ghost-button" type="button" onClick={() => { setEditingServiceId(null); setServiceForm(vendorServiceTemplate); }}>
                  Cancel edit
                </button>
              )}
            </div>
          </form>
          {vendorServices.length > 0 && (
            <div className="stack-list">
              {vendorServices.map((service) => (
                <div key={service.id} className="list-item">
                  <span>
                    {service.title} (${service.price})
                    {service.vendorVerified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </span>
                  <button className="ghost-button" type="button" onClick={() => beginEditService(service)}>Edit</button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {loading && <p className="subtle">Loading dashboard...</p>}
      {!loading && filteredOrders.length === 0 && <p className="subtle">No orders found for this filter.</p>}

      <section className="grid">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order}>
            {user.role === "VENDOR" && order.status === "PAID" && <button className="primary-button" onClick={() => updateOrder(order.id, "IN_PROGRESS")}>Accept order</button>}
            {user.role === "VENDOR" && order.status === "IN_PROGRESS" && <button className="primary-button" onClick={() => updateOrder(order.id, "SUBMITTED", "Work delivered through dashboard")}>Submit work</button>}
            {user.role === "CLIENT" && order.status === "SUBMITTED" && <button className="primary-button" onClick={() => updateOrder(order.id, "APPROVED")}>Approve work</button>}
            {user.role === "ADMIN" && order.status === "APPROVED" && <button className="primary-button" onClick={() => releasePayment(order.id)}>Release escrow</button>}
          </OrderCard>
        ))}
      </section>

      {user.role === "CLIENT" && (
        <>
          <section className="card form-card">
            <h2>Leave review</h2>
            <form onSubmit={submitReview}>
              <select value={reviewForm.orderId} onChange={(e) => setReviewForm({ ...reviewForm, orderId: e.target.value })}>
                <option value="">Select order</option>
                {reviewableOrders.map((order) => (
                  <option key={order.id} value={order.id}>#{order.id} - {order.serviceTitle}</option>
                ))}
              </select>
              <select value={reviewForm.rating} onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}>
                {[5, 4, 3, 2, 1].map((value) => <option key={value} value={value}>{value} stars</option>)}
              </select>
              <textarea placeholder="Feedback" value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} />
              <button className="primary-button" type="submit">Submit review</button>
            </form>
          </section>

          <section className="card admin-card">
            <h2>Saved services</h2>
            <div className="stack-list">
              {savedServices.length === 0 && <p className="subtle">No saved services yet. Save from Marketplace to shortlist options.</p>}
              {savedServices.map((item) => (
                <div key={item.id} className="list-item vertical">
                  <span>{item.title} (${item.price})</span>
                  <small className="vendor-inline-name">
                    {item.category} by {item.vendorName}
                    {item.vendorVerified && <BadgeCheck size={14} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </small>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {user.role === "ADMIN" && (
        <>
          <section className="card admin-card">
            <h2>User supervision</h2>
            <div className="stack-list">
              {users.map((account) => (
                <div key={account.id} className="list-item">
                  <span className="vendor-inline-name">
                    {account.name} ({account.role}) - {account.status}
                    {account.role === "VENDOR" && account.verified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </span>
                  {account.role === "VENDOR" && !account.verified && <button className="primary-button" onClick={() => approveVendor(account.id)}>Give blue check</button>}
                </div>
              ))}
            </div>
          </section>

          <section className="card admin-card">
            <h2>Transaction ledger</h2>
            <div className="stack-list">
              {transactions.map((item) => (
                <div key={item.id} className="list-item vertical">
                  <span>{item.type} ${item.amount} [{item.referenceId}]</span>
                  <small>{item.description}</small>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
