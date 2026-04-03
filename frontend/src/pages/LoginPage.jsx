import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthScene from "../components/AuthScene";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page auth-page auth-page-rich">
      <section className="auth-layout auth-layout-signin">
        <div className="auth-showcase">
          <div className="auth-showcase-copy">
            <span className="eyebrow auth-kicker">Service Access</span>
            <h1>Step back into your live home service network.</h1>
            <p>
              Jump into quotes, active jobs, vendor conversations, and admin actions from one secure control point.
            </p>
          </div>
          <div className="auth-visual-shell">
            <div className="auth-visual-noise" />
            <div className="auth-visual-grid" />
            <AuthScene mode="signin" />
            <div className="auth-floating-chip auth-floating-chip-top">Verified access</div>
            <div className="auth-floating-chip auth-floating-chip-bottom">Live requests synced</div>
            <div className="auth-visual-panel auth-visual-panel-main">
              <span>Session flow</span>
              <strong>Clients, vendors, and admins reconnect in one shared workspace.</strong>
            </div>
            <div className="auth-visual-panel auth-visual-panel-side">
              <span>Network</span>
              <strong>Secure sign-in</strong>
              <p>Track jobs, bookings, and service updates without missing momentum.</p>
            </div>
          </div>
        </div>

        <form className="card form-card auth-card auth-form-card" onSubmit={handleSubmit}>
          <span className="eyebrow">Sign In</span>
          <h2>Welcome back</h2>
          <p className="subtle">Sign in to continue as a client, vendor, or admin.</p>
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="error">{error}</p>}
          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <div className="auth-divider" aria-hidden="true" />
          <div className="auth-switch">
            <span>New here?</span>
            <Link className="ghost-button auth-link-button" to="/register">Create account</Link>
          </div>
        </form>
      </section>
    </main>
  );
}
