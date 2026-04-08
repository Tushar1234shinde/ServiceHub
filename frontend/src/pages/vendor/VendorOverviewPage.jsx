import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, BriefcaseBusiness, CalendarClock, DollarSign, PackageOpen, Star } from "lucide-react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

export default function VendorOverviewPage() {
  const { token } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const response = await api.getVendorDashboard(token);
        if (active) {
          setData(response);
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
  }, [token]);

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading vendor overview...</p></section>;
  }

  if (error) {
    return <section className="card vendor-panel"><p className="error">{error}</p></section>;
  }

  const { profile, stats, recentOrders } = data;

  return (
    <div className="vendor-page-grid">
      <section className="card vendor-hero-card">
        <div className="vendor-hero-copy">
          <div className="vendor-avatar-large">
            {profile.logoImage || profile.profileImage ? <img src={profile.logoImage || profile.profileImage} alt={profile.name} /> : <span>{profile.name?.charAt(0)}</span>}
          </div>
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.bio || "Add a short business bio so clients understand what makes your service stand out."}</p>
            <div className="vendor-hero-tags">
              <span className={`status-chip ${profile.verified ? "completed" : "pending"}`}>{profile.verified ? "Verified vendor" : "Verification pending"}</span>
              <span className="status-chip">{profile.status}</span>
            </div>
          </div>
        </div>
        <div className="vendor-quick-actions">
          <Link className="primary-button" to="/vendor/services">Manage services</Link>
          <Link className="ghost-button" to="/vendor/orders">View orders</Link>
          <Link className="ghost-button" to="/vendor/profile">Edit profile</Link>
        </div>
      </section>

      <section className="vendor-stats-grid">
        <article className="card vendor-stat-card"><DollarSign size={18} /><strong>{formatCurrency(stats.totalEarnings)}</strong><span>Total earnings</span></article>
        <article className="card vendor-stat-card"><Star size={18} /><strong>{stats.rating}</strong><span>Current rating</span></article>
        <article className="card vendor-stat-card"><BriefcaseBusiness size={18} /><strong>{stats.totalServices}</strong><span>Total services</span></article>
        <article className="card vendor-stat-card"><BadgeCheck size={18} /><strong>{stats.activeServices}</strong><span>Active services</span></article>
        <article className="card vendor-stat-card"><PackageOpen size={18} /><strong>{stats.openOrders}</strong><span>Open orders</span></article>
        <article className="card vendor-stat-card"><CalendarClock size={18} /><strong>{stats.completedOrders}</strong><span>Completed orders</span></article>
      </section>

      <section className="card vendor-panel">
        <div className="section-headline compact-headline">
          <h2>Recent orders</h2>
          <p>Keep an eye on the latest work assigned to you.</p>
        </div>
        {recentOrders.length === 0 ? (
          <p className="subtle">No recent orders yet.</p>
        ) : (
          <div className="vendor-list">
            {recentOrders.map((order) => (
              <article className="vendor-list-row" key={order.id}>
                <div>
                  <strong>#{order.id} • {order.serviceTitle}</strong>
                  <p className="subtle">Client: {order.clientName}</p>
                </div>
                <div className="vendor-row-meta">
                  <span className={`status-chip ${order.status.toLowerCase()}`}>{order.status}</span>
                  <strong>{formatCurrency(order.price)}</strong>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
