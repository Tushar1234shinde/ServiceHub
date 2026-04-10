import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, BriefcaseBusiness, CircleUserRound, DollarSign, GalleryHorizontal, LayoutDashboard, LogOut, MessageCircle, PackageCheck } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const links = [
  { to: "/vendor", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/vendor/profile", label: "My Profile", icon: CircleUserRound },
  { to: "/vendor/services", label: "My Services", icon: BriefcaseBusiness },
  { to: "/vendor/gallery", label: "Gallery Posts", icon: GalleryHorizontal },
  { to: "/vendor/chat", label: "Chat Inbox", icon: MessageCircle },
  { to: "/vendor/orders", label: "Orders", icon: PackageCheck },
  { to: "/vendor/earnings", label: "Earnings", icon: DollarSign }
];

export default function VendorLayout() {
  const { user, logout } = useAuth();

  return (
    <main className="vendor-shell">
      <aside className="vendor-sidebar">
        <div className="vendor-brand">
          <span className="brand-mark">S</span>
          <div>
            <strong>ServiceHub Vendor</strong>
            <span>Manage your business</span>
          </div>
        </div>

        <nav className="vendor-nav">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `vendor-nav-link ${isActive ? "active" : ""}`}>
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="vendor-sidebar-foot">
          <div className="vendor-user-card">
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
          </div>
          <button className="ghost-button vendor-logout" onClick={logout}>
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </aside>

      <section className="vendor-main">
        <header className="vendor-topbar">
          <div>
            <p className="eyebrow">Vendor workspace</p>
            <h1>Dashboard</h1>
          </div>
          <div className="vendor-topbar-meta">
            <span className="user-chip"><BarChart3 size={14} /> Focused on your services, orders, and earnings</span>
          </div>
        </header>
        <Outlet />
      </section>
    </main>
  );
}
