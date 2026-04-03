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
      {order.workSubmission && <p className="submission-note">Submission: {order.workSubmission}</p>}
      <div className="action-row">{children}</div>
    </article>
  );
}
