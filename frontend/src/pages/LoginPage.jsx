import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <main className="page narrow auth-page">
      <form className="card form-card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Sign In</span>
        <h1>Welcome back</h1>
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
    </main>
  );
}
