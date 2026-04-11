import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, CheckCircle2, Heart, MessageCircle, Package, Search, Sparkles, Star } from "lucide-react";
import OrderCard from "../components/OrderCard";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function ClientDashboardPage() {
  const { user, token, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [orders, setOrders] = useState([]);
  const [savedServices, setSavedServices] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!user || !token) {
      return;
    }

    let isActive = true;

    async function loadWorkspace() {
      try {
        setLoading(true);
        setError("");

        const [ordersResponse, savedResponse] = await Promise.all([
          api.getOrders(token),
          api.getSavedServices(token)
        ]);

        if (!isActive) {
          return;
        }

        setOrders(ordersResponse);
        setSavedServices(savedResponse);
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

    loadWorkspace();

    return () => {
      isActive = false;
    };
  }, [refreshKey, token, user]);

  const stats = useMemo(() => {
    const active = orders.filter((order) => ["PAID", "IN_PROGRESS", "SUBMITTED"].includes(order.status)).length;
    const completed = orders.filter((order) => ["APPROVED", "COMPLETED"].includes(order.status)).length;

    return [
      { label: "Bookings placed", value: orders.length, icon: Package },
      { label: "Active jobs", value: active, icon: CalendarClock },
      { label: "Saved services", value: savedServices.length, icon: Heart },
      { label: "Completed jobs", value: completed, icon: CheckCircle2 }
    ];
  }, [orders, savedServices.length]);

  if (loading) {
    return <div className="page section-block subtle">Loading your client workspace...</div>;
  }

  return (
    <main className="client-workspace page">
      <section className="client-hero">
        <div className="client-hero-copy">
          <span className="workspace-kicker">Client workspace</span>
          <h1>Everything you booked, saved, and still want to get done.</h1>
          <p>
            Track live service orders, revisit saved vendors, and jump back into the marketplace without the old shared dashboard clutter.
          </p>
          <div className="client-hero-actions">
            <Link className="primary-button" to="/services">
              <Search size={16} /> Explore services
            </Link>
            <Link className="ghost-button" to="/client/chat">
              <MessageCircle size={16} /> Chat inbox
            </Link>
            <button className="ghost-button" onClick={logout}>Sign out</button>
          </div>
        </div>

        <div className="client-hero-panel">
          <div className="client-profile-row">
            <div className="client-avatar-panel">
              {user?.profileImage ? <img src={user.profileImage} alt={user.name} /> : <span>{user?.name?.charAt(0)}</span>}
            </div>
            <div>
              <strong>{user?.name}</strong>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="client-highlight-list">
            <article>
              <Sparkles size={16} />
              <div>
                <strong>Fast rebooking</strong>
                <span>Open the marketplace and continue where you left off.</span>
              </div>
            </article>
            <article>
              <Star size={16} />
              <div>
                <strong>Review-ready workflow</strong>
                <span>Approve finished work and leave ratings after delivery.</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="workspace-stats-grid">
        {stats.map(({ label, value, icon: Icon }) => (
          <article key={label} className="workspace-stat-card">
            <span className="workspace-stat-icon"><Icon size={18} /></span>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      {(error || notice) && (
        <section className="workspace-message-row">
          {error && <div className="workspace-message error">{error}</div>}
          {notice && <div className="workspace-message notice">{notice}</div>}
        </section>
      )}

      <section className="client-content-grid">
        <div className="client-main-column">
          <section className="workspace-panel">
            <div className="workspace-panel-head">
              <div>
                <span className="workspace-kicker">Orders</span>
                <h2>My bookings</h2>
              </div>
              <Link className="workspace-link" to="/services">Book another service</Link>
            </div>

            <div className="workspace-stack">
              {orders.length === 0 && <p className="subtle">You haven't booked any services yet.</p>}
              {orders.map((order) => (
                <OrderCard key={order.id} order={order}>
                  <ClientOrderActions
                    order={order}
                    token={token}
                    setError={setError}
                    setNotice={setNotice}
                    onRefresh={() => setRefreshKey((current) => current + 1)}
                  />
                </OrderCard>
              ))}
            </div>
          </section>
        </div>

        <aside className="client-side-column">
          <section className="workspace-panel compact-panel">
            <div className="workspace-panel-head">
              <div>
                <span className="workspace-kicker">Saved</span>
                <h2>Saved services</h2>
              </div>
            </div>

            <div className="saved-service-list">
              {savedServices.length === 0 && <p className="subtle">Saved services will appear here after you bookmark them from the marketplace.</p>}
              {savedServices.map((service) => (
                <article key={service.id} className="saved-service-card">
                  {service.thumbnailImage && <img src={service.thumbnailImage} alt={service.title} className="saved-service-image" />}
                  <div>
                    <strong>{service.title}</strong>
                    <p>{service.vendorName || "Marketplace vendor"}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="workspace-panel compact-panel emphasis-panel">
            <span className="workspace-kicker">Next step</span>
            <h2>Need a new service?</h2>
            <p>Browse live listings, customize pricing and materials, then fund escrow when you are ready.</p>
            <Link className="primary-button" to="/services">
              <Search size={16} /> Open marketplace
            </Link>
          </section>
        </aside>
      </section>
    </main>
  );
}

function ClientOrderActions({ order, token, setError, setNotice, onRefresh }) {
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function approveOrder() {
    try {
      setSubmitting(true);
      await api.updateOrderStatus(order.id, { status: "APPROVED" }, token);
      setNotice("Order approved. The service is ready for admin payout release.");
      setError("");
      onRefresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function submitReview() {
    try {
      setSubmitting(true);
      await api.createReview({ orderId: order.id, rating, comment }, token);
      setNotice("Review submitted.");
      setError("");
      setShowReview(false);
      setComment("");
      onRefresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (order.status === "SUBMITTED") {
    return (
      <button className="primary-button small" onClick={approveOrder} disabled={submitting}>
        {submitting ? "Approving..." : "Approve work"}
      </button>
    );
  }

  if (order.status === "APPROVED" || order.status === "COMPLETED") {
    if (order.reviewSubmitted) {
      return <span className="status-chip completed">Review submitted</span>;
    }

    if (showReview) {
      return (
        <div className="review-box card">
          <select value={rating} onChange={(event) => setRating(Number(event.target.value))}>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <textarea placeholder="Optional written feedback..." value={comment} onChange={(event) => setComment(event.target.value)} />
          <div className="vendor-inline-actions">
            <button className="primary-button small" onClick={submitReview} disabled={submitting}>
              {submitting ? "Saving..." : "Submit review"}
            </button>
            <button className="ghost-button small" type="button" onClick={() => setShowReview(false)} disabled={submitting}>
              Cancel
            </button>
          </div>
          <p className="subtle">You can rate only completed or approved orders that belong to you.</p>
        </div>
      );
    }

    return <button className="ghost-button small" onClick={() => setShowReview(true)}>Leave review</button>;
  }

  return null;
}
