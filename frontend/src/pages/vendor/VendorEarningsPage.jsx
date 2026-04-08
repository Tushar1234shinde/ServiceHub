import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

export default function VendorEarningsPage() {
  const { token } = useAuth();
  const [data, setData] = useState({ totalEarnings: 0, completedOrders: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const response = await api.getVendorEarnings(token);
        if (active) {
          setData(response);
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

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading earnings...</p></section>;
  }

  return (
    <section className="card vendor-panel">
      <div className="section-headline compact-headline">
        <h2>Earnings summary</h2>
        <p>Track your completed work and payout contribution order by order.</p>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="vendor-earnings-total">
        <span>Total earnings</span>
        <strong>{formatCurrency(data.totalEarnings)}</strong>
      </div>
      {data.completedOrders.length === 0 ? (
        <p className="subtle">No completed orders yet.</p>
      ) : (
        <div className="vendor-list">
          {data.completedOrders.map((order) => (
            <article className="vendor-list-row" key={order.orderId}>
              <div>
                <strong>#{order.orderId} • {order.serviceTitle}</strong>
                <p className="subtle">Client: {order.clientName}</p>
              </div>
              <div className="vendor-row-meta vertical-end">
                <strong>{formatCurrency(order.amount)}</strong>
                <span className="subtle">{new Date(order.completedAt).toLocaleString()}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
