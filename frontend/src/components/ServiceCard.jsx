import { BadgeCheck } from "lucide-react";

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
  return (
    <article className="card service-card">
      <div className="service-head">
        <span className="eyebrow">{service.category}</span>
        <span className="subtle">Published {new Date(service.createdAt).toLocaleDateString()}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-footer">
        <div>
          <strong>${service.price}</strong>
          <span className="vendor-inline-name">
            by {service.vendorName}
            {service.vendorVerified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
          </span>
        </div>
      </div>
      {service.vendorVerified && <p className="verified-chip"><BadgeCheck size={14} /> Verified vendor</p>}
      <p className="quote-note">Upfront quote, no hidden costs.</p>
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
