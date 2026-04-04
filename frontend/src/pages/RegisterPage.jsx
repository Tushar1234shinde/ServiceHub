import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthScene from "../components/AuthScene";
import { useAuth } from "../context/AuthContext";

const ROLE_DETAILS = {
  CLIENT: {
    title: "Client account",
    description: "Book services, track orders, and manage saved providers.",
    note: "You can start using the platform right after sign up.",
    uploadLabel: "Upload your profile photo",
    uploadHelp: "Add a clear photo so your account feels personal and easy to recognize."
  },
  VENDOR: {
    title: "Vendor account",
    description: "Publish services, manage jobs, and grow your business.",
    note: "Vendor accounts need admin approval before they can publish services.",
    uploadLabel: "Upload your business logo",
    uploadHelp: "Use your business logo or brand mark so clients can recognize your company."
  }
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(new Error("Could not read the selected image"));
    reader.readAsDataURL(file);
  });
}

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CLIENT",
    bio: "",
    profileImage: "",
    logoImage: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const roleInfo = ROLE_DETAILS[form.role];
  const previewImage = form.role === "VENDOR" ? form.logoImage : form.profileImage;

  async function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file only.");
      event.target.value = "";
      return;
    }

    try {
      setError("");
      setUploading(true);
      const imageData = await readFileAsDataUrl(file);
      setForm((current) => ({
        ...current,
        profileImage: current.role === "CLIENT" ? imageData : "",
        logoImage: current.role === "VENDOR" ? imageData : ""
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  function handleRoleChange(role) {
    setForm((current) => ({
      ...current,
      role,
      bio: role === "CLIENT" ? "" : current.bio,
      profileImage: role === "CLIENT" ? current.profileImage : "",
      logoImage: role === "VENDOR" ? current.logoImage : ""
    }));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await register({
        ...form,
        bio: form.role === "VENDOR" ? form.bio.trim() : "",
        profileImage: form.role === "CLIENT" ? form.profileImage : "",
        logoImage: form.role === "VENDOR" ? form.logoImage : ""
      });
      const redirectTarget = typeof location.state?.from === "string"
        ? location.state.from
        : form.role === "CLIENT"
          ? "/"
          : "/dashboard";
      navigate(redirectTarget, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page auth-page auth-page-rich">
      <section className="auth-layout auth-layout-signup">
        <div className="auth-showcase">
          <div className="auth-showcase-copy">
            <span className="eyebrow auth-kicker">New Service Identity</span>
            <h1>Launch your place in the home service ecosystem.</h1>
            <p>
              Create a client or vendor account, connect your profile, and join the request-to-delivery flow from day one.
            </p>
          </div>
          <div className="auth-visual-shell auth-visual-shell-signup">
            <div className="auth-visual-noise" />
            <div className="auth-visual-grid" />
            <AuthScene mode="signup" />
            <div className="auth-floating-chip auth-floating-chip-top">Vendor ready</div>
            <div className="auth-floating-chip auth-floating-chip-bottom">Client bookings online</div>
            <div className="auth-visual-panel auth-visual-panel-main">
              <span>Launch path</span>
              <strong>Build trust fast with profiles, logos, and a role-based onboarding flow.</strong>
            </div>
            <div className="auth-visual-panel auth-visual-panel-side">
              <span>Activation</span>
              <strong>Join the marketplace</strong>
              <p>Clients book faster, vendors publish faster, and the platform feels alive from the first click.</p>
            </div>
          </div>
        </div>

        <form className="card form-card auth-card auth-form-card" onSubmit={handleSubmit}>
          <span className="eyebrow">Sign Up</span>
          <h2>Create your account</h2>
          <p className="subtle">Choose whether you are joining as a client or a vendor.</p>

          <div className="role-grid" role="radiogroup" aria-label="Account type">
            {Object.entries(ROLE_DETAILS).map(([role, details]) => (
              <button
                key={role}
                type="button"
                className={`role-card ${form.role === role ? "active" : ""}`}
                onClick={() => handleRoleChange(role)}
              >
                <strong>{details.title}</strong>
                <span>{details.description}</span>
              </button>
            ))}
          </div>

          <div className="auth-note">
            <strong>{roleInfo.title}</strong>
            <span>{roleInfo.note}</span>
          </div>

          <input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
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
            minLength={8}
            required
          />

          <label className="upload-field">
            <span className="upload-label">{roleInfo.uploadLabel}</span>
            <span className="upload-help">{roleInfo.uploadHelp}</span>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>

          {previewImage && (
            <div className="upload-preview-card">
              <img src={previewImage} alt={form.role === "VENDOR" ? "Business logo preview" : "Profile preview"} className="upload-preview-image" />
              <button
                type="button"
                className="ghost-button upload-remove-button"
                onClick={() => setForm((current) => ({ ...current, profileImage: "", logoImage: "" }))}
              >
                Remove image
              </button>
            </div>
          )}

          {form.role === "VENDOR" && (
            <textarea
              placeholder="Tell clients about your services, experience, or special skills"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          )}

          {error && <p className="error">{error}</p>}
          <button className="primary-button" type="submit" disabled={loading || uploading}>
            {uploading ? "Preparing image..." : loading ? "Creating account..." : `Create ${form.role === "CLIENT" ? "client" : "vendor"} account`}
          </button>

          <div className="auth-divider" aria-hidden="true" />
          <div className="auth-switch">
            <span>Already have an account?</span>
            <Link className="ghost-button auth-link-button" to="/login" state={location.state}>Sign in</Link>
          </div>
        </form>
      </section>
    </main>
  );
}
