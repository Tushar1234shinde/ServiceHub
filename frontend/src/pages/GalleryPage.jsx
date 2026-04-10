import { useEffect, useState } from "react";
import { BadgeCheck, CalendarDays, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function GalleryPage() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [works, setWorks] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const data = await api.getGallery();
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
  }, []);

  async function messageVendor(work) {
    if (!user) {
      navigate("/login", { state: { from: "/gallery" } });
      return;
    }
    if (user.role !== "CLIENT") {
      setError("Only client accounts can start chats with vendors.");
      return;
    }

    try {
      setActiveId(work.id);
      setError("");
      setNotice("");
      const conversation = await api.startConversation({
        vendorId: work.vendorId,
        galleryWorkId: work.id,
        subject: `Gallery post: ${work.title}`,
        message: `Hi ${work.vendorName}, I saw your gallery post "${work.title}" and want to discuss a similar service.`
      }, token);
      navigate(`/client/chat?conversation=${conversation.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setActiveId(null);
    }
  }

  return (
    <main className="gallery-page">
      <section className="page gallery-hero">
        <div>
          <span className="eyebrow">Vendor gallery</span>
          <h1>Fresh work from vendors, browsed like a service reel.</h1>
          <p>Clients and guests can explore public posts. Vendor accounts can publish from their workspace.</p>
        </div>
        {user?.role === "VENDOR" && <Link className="primary-button" to="/vendor/gallery">Upload gallery post</Link>}
      </section>

      <section className="page">
        {notice && <p className="notice">{notice}</p>}
        {error && <p className="error">{error}</p>}
        {loading && <p className="subtle">Loading gallery posts...</p>}
        {!loading && works.length === 0 && <p className="subtle">No vendor posts yet.</p>}
      </section>

      <section className="gallery-feed">
        {works.map((work) => (
          <article key={work.id} className="gallery-reel-card">
            <img src={work.image} alt={work.title} className="gallery-reel-image" />
            <div className="gallery-reel-copy">
              <div className="gallery-reel-meta">
                <span><CalendarDays size={14} /> {new Date(work.createdAt).toLocaleDateString()}</span>
                {work.vendorVerified && <span><BadgeCheck size={14} /> Verified</span>}
              </div>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
              <div className="gallery-reel-footer">
                <Link to={`/vendors/${work.vendorId}`}>by {work.vendorName}</Link>
                <span>{work.category}</span>
              </div>
              <button
                className="primary-button"
                type="button"
                onClick={() => messageVendor(work)}
                disabled={activeId === work.id || user?.role === "VENDOR"}
              >
                <MessageCircle size={16} /> {activeId === work.id ? "Opening chat..." : "Message Vendor"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
