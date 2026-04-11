import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, GalleryHorizontal, Home, Info, LayoutDashboard, Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { getDefaultPathForUser } from "../roleRoutes";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const dashboardPath = getDefaultPathForUser(user);

  return (
    <header className="topbar">
      <Link to={user ? dashboardPath : "/"} className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">S</span>
        <span>ServiceHub</span>
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          <Home size={15} /> Home
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          <GalleryHorizontal size={15} /> Gallery
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          <Briefcase size={15} /> Services
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          <Info size={15} /> About Us
        </NavLink>
        {user && (
          <NavLink to={dashboardPath} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            <LayoutDashboard size={15} /> Dashboard
          </NavLink>
        )}
      </nav>

      <div className="topbar-meta">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
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
