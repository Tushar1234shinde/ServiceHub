import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

export default function VendorProfileSettingsPage() {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ bio: "", logoImage: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const response = await api.getVendorMe(token);
        if (active) {
          setProfile(response);
          setForm({ bio: response.bio || "", logoImage: response.logoImage || "" });
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setSaving(true);
      const updated = await api.updateVendorMe(form, token);
      setProfile(updated);
      setNotice("Profile updated successfully.");
      setError("");
    } catch (err) {
      setError(err.message);
      setNotice("");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading profile...</p></section>;
  }

  return (
    <div className="vendor-two-column">
      <section className="card vendor-panel">
        <div className="section-headline compact-headline">
          <h2>My profile</h2>
          <p>Account details and vendor profile information visible to your workspace.</p>
        </div>
        {error && <p className="error">{error}</p>}
        {notice && <p className="notice">{notice}</p>}
        <div className="vendor-detail-grid">
          <div><span>Name</span><strong>{profile.name}</strong></div>
          <div><span>Email</span><strong>{profile.email}</strong></div>
          <div><span>Role</span><strong>{profile.role}</strong></div>
          <div><span>Status</span><strong>{profile.status}</strong></div>
          <div><span>Verification</span><strong>{profile.verified ? "Verified" : "Pending"}</strong></div>
          <div><span>Rating</span><strong>{profile.rating}</strong></div>
          <div><span>Total earnings</span><strong>{formatCurrency(profile.totalEarnings)}</strong></div>
        </div>
      </section>

      <section className="card vendor-panel">
        <div className="section-headline compact-headline">
          <h2>Edit vendor profile</h2>
          <p>Bio and logo are editable here. Rating and verification stay read-only.</p>
        </div>
        <form className="vendor-form-grid" onSubmit={handleSubmit}>
          <label>
            Bio
            <textarea value={form.bio} onChange={(event) => setForm((current) => ({ ...current, bio: event.target.value }))} />
          </label>
          <label>
            Logo image URL or base64 data
            <textarea value={form.logoImage} onChange={(event) => setForm((current) => ({ ...current, logoImage: event.target.value }))} />
          </label>
          {form.logoImage && (
            <div className="vendor-image-preview">
              <img src={form.logoImage} alt="Vendor logo preview" />
            </div>
          )}
          <button className="primary-button" type="submit" disabled={saving}>{saving ? "Saving..." : "Save changes"}</button>
        </form>
      </section>
    </div>
  );
}
