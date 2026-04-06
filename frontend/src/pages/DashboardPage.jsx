import { useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import OrderCard from "../components/OrderCard";
import { 
  Check, X, Star, Settings, Package, 
  PieChart, Users, DollarSign, Plus, 
  Clock, AlertTriangle, CheckCircle 
} from "lucide-react";

export default function DashboardPage() {
  const { user, token, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  
  // VENDOR states
  const [myServices, setMyServices] = useState([]);
  const [vendorOrders, setVendorOrders] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  
  // CLIENT states
  const [clientOrders, setClientOrders] = useState([]);
  const [savedServices, setSavedServices] = useState([]);
  
  // ADMIN states
  const [allUsers, setAllUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // UI state
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!user || !token) return;

    async function loadData() {
      try {
        setLoading(true);
        if (user.role === "VENDOR") {
          const [services, orders, stats] = await Promise.all([
            api.getMyServices(token),
            api.getOrders(token),
            api.getVendorAnalytics(token)
          ]);
          setMyServices(services);
          setVendorOrders(orders);
          setAnalytics(stats);
        } else if (user.role === "CLIENT") {
          const [orders, saved] = await Promise.all([
            api.getOrders(token),
            api.getSavedServices(token)
          ]);
          setClientOrders(orders);
          setSavedServices(saved);
        } else if (user.role === "ADMIN") {
          const [users, txs] = await Promise.all([
             api.getUsers(token),
             api.getTransactions(token)
          ]);
          setAllUsers(users);
          setTransactions(txs);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user, token]);

  if (loading) return <div className="page section-block subtle">Loading your dashboard...</div>;
  if (!user) return <div className="page section-block error">Not logged in.</div>;

  return (
    <main className="dashboard-root">
      <header className="dashboard-header section-block">
        <div className="dashboard-header-info">
          <div className="profile-badge large">
             {user.profileImage && <img src={user.profileImage} alt={user.name} />}
             {!user.profileImage && user.name.charAt(0)}
          </div>
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {user.name} ({user.role})</p>
          </div>
        </div>
        <button className="ghost-button" onClick={logout}>Sign out</button>
      </header>

      <section className="section-block">
        {user.role === "VENDOR" && (
          <VendorView 
            services={myServices} 
            orders={vendorOrders} 
            analytics={analytics}
            token={token}
            setError={setError}
            setNotice={setNotice}
          />
        )}
        {user.role === "CLIENT" && (
          <ClientView 
            orders={clientOrders} 
            saved={savedServices}
            token={token}
            setError={setError}
            setNotice={setNotice}
          />
        )}
        {user.role === "ADMIN" && (
          <AdminView 
             users={allUsers} 
             transactions={transactions}
             token={token}
             setError={setError}
             setNotice={setNotice}
          />
        )}
      </section>

      {error && <div className="error float-error"><AlertTriangle size={16} /> {error}</div>}
      {notice && <div className="notice float-notice"><CheckCircle size={16} /> {notice}</div>}
    </main>
  );
}

// --- SUB-COMPONENTS ---

function VendorView({ services, orders, analytics, token, setError, setNotice }) {
  return (
    <div className="dashboard-grid">
      <aside className="dashboard-sidebar card">
         <nav>
           <button className="sidebar-link active"><PieChart size={18} /> Overview</button>
           <button className="sidebar-link"><Package size={18} /> Services</button>
           <button className="sidebar-link"><Clock size={18} /> Active Jobs</button>
         </nav>
      </aside>
      
      <div className="dashboard-content">
        <div className="stats-row">
            <div className="card stat-card">
               <DollarSign color="var(--accent)" />
               <div>
                  <h3>Total Earnings</h3>
                  <p className="stat-value">${analytics?.totalEarnings || "0.00"}</p>
               </div>
            </div>
            <div className="card stat-card">
               <Star color="var(--warning)" />
               <div>
                  <h3>Rating</h3>
                  <p className="stat-value">{analytics?.rating || "N/A"}</p>
               </div>
            </div>
        </div>

        <section className="section-block">
           <div className="section-headline">
              <h2>Recent Orders</h2>
           </div>
           <div className="grid-stack">
              {orders.length === 0 && <p className="subtle">No orders yet.</p>}
              {orders.map(order => (
                <OrderCard key={order.id} order={order}>
                    <VendorOrderActions order={order} token={token} setNotice={setNotice} setError={setError} />
                </OrderCard>
              ))}
           </div>
        </section>

        <section className="section-block">
           <div className="section-headline">
              <h2>My Services</h2>
              <button className="primary-button small"><Plus size={16} /> New Service</button>
           </div>
           <div className="grid">
              {services.map(service => (
                <div key={service.id} className="card service-mini-card">
                   {service.thumbnailImage && <img src={service.thumbnailImage} />}
                   <div>
                      <h4>{service.title}</h4>
                      <p className="subtle">${service.price}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}

function VendorOrderActions({ order, token, setNotice, setError }) {
   const updateStatus = async (newStatus) => {
      try {
         await api.updateOrderStatus(order.id, { status: newStatus }, token);
         setNotice(`Order #${order.id} updated to ${newStatus}`);
         setTimeout(() => window.location.reload(), 1500); 
      } catch (err) {
         setError(err.message);
      }
   };

   if (order.status === "PENDING") {
      return <button className="primary-button small" onClick={() => updateStatus("ACCEPTED")}>Accept Order</button>;
   }
   if (order.status === "ACCEPTED") {
      return <button className="primary-button small" onClick={() => updateStatus("STARTED")}>Start Escrow</button>;
   }
   if (order.status === "STARTED") {
      return <button className="primary-button small" onClick={() => updateStatus("SUBMITTED")}>Submit Work</button>;
   }
   return null;
}

function ClientView({ orders, saved, token, setError, setNotice }) {
  return (
    <div className="dashboard-grid">
       <aside className="dashboard-sidebar card">
          <nav>
            <button className="sidebar-link active"><Package size={18} /> My Bookings</button>
            <button className="sidebar-link"><Star size={18} /> Saved Services</button>
          </nav>
       </aside>

       <div className="dashboard-content">
          <section className="section-block">
             <div className="section-headline">
                <h2>My Bookings</h2>
             </div>
             <div className="grid-stack">
                {orders.length === 0 && <p className="subtle">You haven't booked any services yet.</p>}
                {orders.map(order => (
                  <OrderCard key={order.id} order={order}>
                      <ClientOrderActions order={order} token={token} setNotice={setNotice} setError={setError} />
                  </OrderCard>
                ))}
             </div>
          </section>

          <section className="section-block">
             <div className="section-headline">
                <h2>Saved for Later</h2>
             </div>
             <div className="grid">
                {saved.map(service => (
                   <div key={service.id} className="card service-mini-card">
                      {service.thumbnailImage && <img src={service.thumbnailImage} />}
                      <h4>{service.title}</h4>
                   </div>
                ))}
             </div>
          </section>
       </div>
    </div>
  );
}

function ClientOrderActions({ order, token, setNotice, setError }) {
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const approve = async () => {
     try {
        await api.updateOrderStatus(order.id, { status: "APPROVED" }, token);
        setNotice("Order approved!");
        setTimeout(() => window.location.reload(), 1500); 
     } catch (err) {
        setError(err.message);
     }
  };

  const submitReview = async () => {
    try {
       await api.createReview({ orderId: order.id, rating, comment }, token);
       setNotice("Review submitted!");
       setTimeout(() => window.location.reload(), 1500); 
    } catch (err) {
       setError(err.message);
    }
  };

  if (order.status === "SUBMITTED") {
     return <button className="primary-button small" onClick={approve}>Approve & Close</button>;
  }

  if (order.status === "APPROVED" || order.status === "COMPLETED") {
     if (showReview) {
        return (
           <div className="review-box card">
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                 <option value="5">5 Stars</option>
                 <option value="4">4 Stars</option>
                 <option value="3">3 Stars</option>
                 <option value="2">2 Stars</option>
                 <option value="1">1 Star</option>
              </select>
              <textarea placeholder="Your feedback..." value={comment} onChange={(e) => setComment(e.target.value)} />
              <button className="primary-button small" onClick={submitReview}>Submit</button>
           </div>
        );
     }
     return <button className="ghost-button small" onClick={() => setShowReview(true)}>Leave review</button>;
  }

  return null;
}

function AdminView({ users, transactions, token, setError, setNotice }) {
  return (
    <div className="dashboard-content full-width">
       <section className="section-block">
          <div className="section-headline">
             <h2>Vendor Approval</h2>
          </div>
          <div className="card overflow-x">
             <table className="admin-table">
                <thead>
                   <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                   {users.map(u => (
                      <tr key={u.id}>
                         <td>{u.name}</td>
                         <td>{u.email}</td>
                         <td>{u.role}</td>
                         <td>
                            <span className={`status-chip ${u.status.toLowerCase()}`}>{u.status}</span>
                         </td>
                         <td>
                            {u.role === "VENDOR" && !u.verified && (
                               <button 
                                 className="primary-button small" 
                                 onClick={async () => {
                                    try {
                                       await api.approveVendor(u.id, token);
                                       setNotice(`Vendor ${u.name} approved.`);
                                       setTimeout(() => window.location.reload(), 1500); 
                                    } catch (err) {
                                       setError(err.message);
                                    }
                                 }}
                               >
                                  Approve
                               </button>
                            )}
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </section>

       <section className="section-block">
          <div className="section-headline">
             <h2>Global Transactions</h2>
          </div>
          <div className="card overflow-x">
             <table className="admin-table">
                <thead>
                   <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Reference</th>
                      <th>Created</th>
                   </tr>
                </thead>
                <tbody>
                   {transactions.map(tx => (
                      <tr key={tx.id}>
                         <td>#{tx.id}</td>
                         <td>{tx.type}</td>
                         <td>${tx.amount}</td>
                         <td>{tx.referenceId}</td>
                         <td>{new Date(tx.createdAt).toLocaleString()}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </section>
    </div>
  );
}
