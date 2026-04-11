import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const categoryOptions = [
  "Painting",
  "Window Making",
  "Plastering",
  "POP / False Ceiling",
  "PVC / Modular Work",
  "Renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

const emptyPost = {
  title: "",
  description: "",
  category: categoryOptions[0],
  image: "",
  featured: false
};

export default function VendorGalleryPage() {
  const { token } = useAuth();
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState(emptyPost);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadWorks() {
    const data = await api.getMyVendorWorks(token);
    setWorks(data);
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const data = await api.getMyVendorWorks(token);
        if (active) {
          setWorks(data);
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setSaving(true);
      setError("");
      await api.createVendorWork(form, token);
      setNotice("Gallery post published.");
      setForm(emptyPost);
      await loadWorks();
    } catch (err) {
      setError(err.message);
      setNotice("");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(workId) {
    if (!window.confirm("Delete this gallery post?")) return;
    try {
      await api.deleteVendorWork(workId, token);
      setNotice("Gallery post deleted.");
      await loadWorks();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading gallery posts...</p></section>;
  }

  return (
    <div className="vendor-two-column">
      <section className="card vendor-panel">
        <div className="section-headline compact-headline">
          <h2>Create gallery post</h2>
          <p>Publish portfolio-style posts that clients and guests can browse from the public gallery.</p>
        </div>
        {error && <p className="error">{error}</p>}
        {notice && <p className="notice">{notice}</p>}
        <form className="vendor-form-grid" onSubmit={handleSubmit}>
          <label>Title<input value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} /></label>
          <label>Category<select value={form.category} onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}>{categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
          <label>Caption / description<textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} /></label>
          <label>Image URL or base64 data<textarea value={form.image} onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))} /></label>
          <label className="builder-inline-check"><input type="checkbox" checked={form.featured} onChange={(event) => setForm((current) => ({ ...current, featured: event.target.checked }))} />Feature this post</label>
          {form.image && <div className="vendor-image-preview"><img src={form.image} alt="Gallery post preview" /></div>}
          <button className="primary-button" type="submit" disabled={saving}>
            <Plus size={16} /> {saving ? "Publishing..." : "Upload gallery post"}
          </button>
        </form>
      </section>

      <section className="card vendor-panel">
        <div className="section-headline compact-headline">
          <h2>My gallery posts</h2>
          <p>Only vendor accounts can create or remove posts.</p>
        </div>
        <div className="vendor-list">
          {works.length === 0 && <p className="subtle">No gallery posts yet.</p>}
          {works.map((work) => (
            <article key={work.id} className="vendor-list-row stacked">
              <div className="vendor-list-row-top">
                <div>
                  <strong>{work.title}</strong>
                  <p className="subtle">{work.category} - {new Date(work.createdAt).toLocaleDateString()}</p>
                </div>
                <button className="ghost-button small" type="button" onClick={() => handleDelete(work.id)}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
              {work.image && <img src={work.image} alt={work.title} className="vendor-gallery-thumb" />}
              <p>{work.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
