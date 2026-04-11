import { useEffect, useState } from "react";
import { BadgeCheck, BriefcaseBusiness, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { api } from "../services/api";

function vendorImage(profile) {
  return profile.logoImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0891b2&color=fff&size=160`;
}

function clientAvatar(review) {
  return review.clientImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.clientName)}&background=0f766e&color=fff&size=100`;
}

export default function VendorProfilePage() {
  const { vendorId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadProfile() {
      try {
        setLoading(true);
        setError("");
        const data = await api.getVendorProfile(vendorId);
        if (isActive) {
          setProfile(data);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadProfile();
    return () => {
      isActive = false;
    };
  }, [vendorId]);

  return (
    <main className="page section-block vendor-profile-page">
      <Link to="/" className="ghost-button vendor-profile-back">Back to marketplace</Link>

      {loading && <p className="subtle">Loading vendor profile...</p>}
      {error && <p className="error">{error}</p>}

      {profile && (
        <>
          <section className="card vendor-profile-hero">
            <div className="vendor-profile-brand">
              <img src={vendorImage(profile)} alt={profile.name} className="vendor-profile-avatar" />
              <div>
                <span className="eyebrow">Vendor profile</span>
                <h1 className="vendor-name-row">
                  <span>{profile.name}</span>
                  {profile.verified && <BadgeCheck size={18} className="verified-badge-inline" aria-label="Verified vendor" />}
                </h1>
                <p className="subtle">{profile.bio || "This vendor is building their public profile."}</p>
              </div>
            </div>
            <div className="vendor-profile-stats">
              <article>
                <strong><Star size={16} /> {Number(profile.rating || 0).toFixed(1)}</strong>
                <span>Average rating</span>
              </article>
              <article>
                <strong>{profile.reviewCount}</strong>
                <span>Reviews</span>
              </article>
              <article>
                <strong>{profile.completedOrders}</strong>
                <span>Completed orders</span>
              </article>
              <article>
                <strong><BriefcaseBusiness size={16} /> {profile.activeServices}</strong>
                <span>Active services</span>
              </article>
            </div>
          </section>

          <section className="section-block">
            <div className="section-headline">
              <h2>Services</h2>
              <p>Live services this vendor currently offers on the marketplace.</p>
            </div>
            {profile.services.length === 0 ? (
              <p className="subtle">No live services yet.</p>
            ) : (
              <section className="grid">
                {profile.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </section>
            )}
          </section>

          <section className="section-block">
            <div className="section-headline">
              <h2>Portfolio</h2>
              <p>Recent work examples published by the vendor.</p>
            </div>
            {profile.works.length === 0 ? (
              <p className="subtle">No portfolio work published yet.</p>
            ) : (
              <section className="grid vendor-profile-works">
                {profile.works.map((work) => (
                  <article key={work.id} className="work-card">
                    <div className="work-image-wrap">
                      <img src={work.image} alt={work.title} className="work-image" />
                    </div>
                    <div className="work-body">
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                      <p className="subtle">{work.category}</p>
                    </div>
                  </article>
                ))}
              </section>
            )}
          </section>

          <section className="section-block">
            <div className="section-headline">
              <h2>Client Reviews</h2>
              <p>Verified feedback tied to completed marketplace orders.</p>
            </div>
            {profile.reviews.length === 0 ? (
              <p className="subtle">No reviews yet.</p>
            ) : (
              <div className="stack-list">
                {profile.reviews.map((review) => (
                  <article key={review.id} className="card vendor-review-card">
                    <div className="testimonial-client">
                      <img src={clientAvatar(review)} alt={review.clientName} className="testimonial-avatar" />
                      <div>
                        <h4>{review.clientName}</h4>
                        <span>Rating: {review.rating}/5</span>
                      </div>
                    </div>
                    <p>{review.comment || "No written feedback provided."}</p>
                    {review.reply && (
                      <div className="review-reply-card">
                        <strong>Vendor reply</strong>
                        <p>{review.reply.comment}</p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
