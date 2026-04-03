import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, GalleryHorizontal, Home, Info, LayoutDashboard, Settings } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isPublicHome = !user && location.pathname === "/";

  return (
    <header className="topbar">
      <Link to={user ? "/dashboard" : "/"} className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">S</span>
        <span>ServiceHub</span>
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {isPublicHome ? (
          <>
            <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}><Home size={15} /> Home</a>
            <a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}><GalleryHorizontal size={15} /> Gallery</a>
            <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}><Briefcase size={15} /> Services</a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}><Info size={15} /> About Us</a>
            <a href="#settings" className="nav-link" onClick={() => setMenuOpen(false)}><Settings size={15} /> Settings</a>
          </>
        ) : (
          <>
            {!user && (
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                <Home size={15} /> Home
              </NavLink>
            )}
            {user && (
              <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                <LayoutDashboard size={15} /> Dashboard
              </NavLink>
            )}
          </>
        )}
      </nav>

      <div className="topbar-meta">
        {user ? (
          <>
            <span className="user-chip">{user.role} | {user.name}</span>
            <button className="ghost-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="login-button" onClick={() => { setMenuOpen(false); navigate("/login"); }}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}
