import { BadgeCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({
  service,
  onPrimaryAction,
  actionLabel,
  actionDisabled,
  bookingInProgress,
  onSaveAction,
  isSaved,
  saveInProgress
}) {
  const pricingCount = service.pricingOptions?.length || 0;
  const materialCount = service.materialOptions?.length || 0;

  return (
    <article className="card service-card">
      {service.thumbnailImage && (
        <div className="service-image-wrap">
          <img src={service.thumbnailImage} alt={service.title} className="service-image" />
        </div>
      )}
      <div className="service-head">
        <span className="eyebrow">{service.category}</span>
        <span className="subtle">Published {new Date(service.createdAt).toLocaleDateString()}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-footer">
        <div className="service-price-block">
          <small className="subtle">Starting at</small>
          <strong>${service.price}</strong>
          <Link className="vendor-inline-name service-vendor-link" to={`/vendors/${service.vendorId}`}>
            by {service.vendorName}
            {service.vendorVerified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
          </Link>
        </div>
        {typeof service.vendorRating === "number" && (
          <span className="service-rating-chip">
            <Star size={14} /> {service.vendorRating.toFixed(1)}
          </span>
        )}
      </div>
      {service.vendorVerified && <p className="verified-chip"><BadgeCheck size={14} /> Verified vendor</p>}
      {(pricingCount > 1 || materialCount > 0) && (
        <p className="quote-note">
          {pricingCount > 1 ? `${pricingCount} pricing options` : "Single pricing option"}
          {materialCount > 0 ? ` • ${materialCount} material add-ons` : ""}
        </p>
      )}
      <div className="service-actions">
        {onPrimaryAction && (
          <button className="primary-button" onClick={() => onPrimaryAction(service)} disabled={actionDisabled || bookingInProgress}>
            {bookingInProgress ? "Booking..." : actionLabel}
          </button>
        )}
        {onSaveAction && (
          <button className="ghost-button" onClick={() => onSaveAction(service)} disabled={saveInProgress}>
            {saveInProgress ? "Updating..." : isSaved ? "Saved" : "Save"}
          </button>
        )}
      </div>
    </article>
  );
}
