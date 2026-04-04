export default function OrderCard({ order, children }) {
  return (
    <article className="card order-card">
      <div className="order-header">
        <div>
          <span className={`status-chip ${order.status.toLowerCase()}`}>{order.status.replace("_", " ")}</span>
          <h3>{order.serviceTitle}</h3>
        </div>
        <strong>${order.price}</strong>
      </div>
      <p>Client: {order.clientName}</p>
      <p>Vendor: {order.vendorName}</p>
      {order.preferredDate && <p>Preferred Date: {new Date(order.preferredDate).toLocaleDateString()}</p>}
      {order.selectedPricingOptionLabel && <p>Pricing: {order.selectedPricingOptionLabel}{order.materialIncluded ? " (material included)" : ""}</p>}
      {order.clientNote && <p className="submission-note">Client note: {order.clientNote}</p>}
      {order.workSubmission && <p className="submission-note">Submission: {order.workSubmission}</p>}
      {order.statusNote && <p className="submission-note">Status note: {order.statusNote}</p>}
      {order.selectedMaterialOptions?.length > 0 && (
        <div className="order-detail-list">
          {order.selectedMaterialOptions.map((option) => (
            <span key={option.id}>{option.name} (${option.priceAdjustment})</span>
          ))}
        </div>
      )}
      {order.attachments?.length > 0 && (
        <div className="order-attachments">
          {order.attachments.map((attachment) => (
            <img key={attachment.id} src={attachment.imageData} alt={attachment.caption || order.serviceTitle} className="order-attachment-thumb" />
          ))}
        </div>
      )}
      <div className="action-row">{children}</div>
    </article>
  );
}
