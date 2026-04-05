import { useEffect, useMemo, useState } from "react";
import { BadgeCheck } from "lucide-react";
import OrderCard from "../components/OrderCard";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

function createVendorServiceTemplate() {
  return {
    title: "",
    description: "",
    category: "",
    thumbnailImage: "",
    pricingOptions: [
      { label: "Without material", price: "", materialIncluded: false, defaultOption: true },
      { label: "With material", price: "", materialIncluded: true, defaultOption: false }
    ],
    materialOptions: []
  };
}

function createWorkTemplate() {
  return {
    title: "",
    description: "",
    category: "",
    image: "",
    featured: false
  };
}

function createReviewTemplate() {
  return { orderId: "", rating: 5, comment: "" };
}

const serviceCategoryOptions = [
  "Painting",
  "Window Making",
  "Plastering",
  "POP / False Ceiling",
  "PVC / Modular Work",
  "Renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(new Error("Could not read the selected image"));
    reader.readAsDataURL(file);
  });
}

export default function DashboardPage() {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [vendorServices, setVendorServices] = useState([]);
  const [vendorWorks, setVendorWorks] = useState([]);
  const [vendorReviews, setVendorReviews] = useState([]);
  const [vendorAnalytics, setVendorAnalytics] = useState(null);
  const [savedServices, setSavedServices] = useState([]);
  const [serviceForm, setServiceForm] = useState(createVendorServiceTemplate);
  const [workForm, setWorkForm] = useState(createWorkTemplate);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editingWorkId, setEditingWorkId] = useState(null);
  const [reviewForm, setReviewForm] = useState(createReviewTemplate);
  const [replyDrafts, setReplyDrafts] = useState({});
  const [orderFilter, setOrderFilter] = useState("ALL");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      setError("");
      setLoading(true);
      const orderData = await api.getOrders(token);
      setOrders(orderData);

      if (user.role === "VENDOR") {
        const [ownServices, analytics, works, reviews] = await Promise.all([
          api.getMyServices(token),
          api.getVendorAnalytics(token),
          api.getMyVendorWorks(token),
          api.getMyVendorReviews(token)
        ]);
        setVendorServices(ownServices);
        setVendorAnalytics(analytics);
        setVendorWorks(works);
        setVendorReviews(reviews);
        setReplyDrafts(Object.fromEntries(reviews.map((review) => [review.id, review.reply?.comment || ""])));
      }

      if (user.role === "CLIENT") {
        const saved = await api.getSavedServices(token);
        setSavedServices(saved);
      }

      if (user.role === "ADMIN") {
        const [userData, transactionData] = await Promise.all([api.getUsers(token), api.getTransactions(token)]);
        setUsers(userData);
        setTransactions(transactionData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  const filteredOrders = useMemo(() => {
    if (orderFilter === "ALL") {
      return orders;
    }
    return orders.filter((order) => order.status === orderFilter);
  }, [orders, orderFilter]);

  const reviewableOrders = useMemo(
    () => orders.filter((order) => order.status === "COMPLETED"),
    [orders]
  );

  const pendingVendorApprovals = useMemo(
    () => users.filter((account) => account.role === "VENDOR" && !account.verified).length,
    [users]
  );

  async function updateOrder(orderId, status, submissionNote = "", statusNote = "") {
    try {
      setMessage("");
      setError("");
      await api.updateOrderStatus(orderId, { status, submissionNote, statusNote }, token);
      setMessage(`Order #${orderId} updated to ${status}.`);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  function addPricingOption() {
    setServiceForm((current) => ({
      ...current,
      pricingOptions: [...current.pricingOptions, { label: "", price: "", materialIncluded: false, defaultOption: false }]
    }));
  }

  function updatePricingOption(index, field, value) {
    setServiceForm((current) => ({
      ...current,
      pricingOptions: current.pricingOptions.map((option, optionIndex) => (
        optionIndex === index ? { ...option, [field]: value } : option
      ))
    }));
  }

  function removePricingOption(index) {
    setServiceForm((current) => ({
      ...current,
      pricingOptions: current.pricingOptions.filter((_, optionIndex) => optionIndex !== index)
    }));
  }

  function setDefaultPricingOption(index) {
    setServiceForm((current) => ({
      ...current,
      pricingOptions: current.pricingOptions.map((option, optionIndex) => ({
        ...option,
        defaultOption: optionIndex === index
      }))
    }));
  }

  function addMaterialOption() {
    setServiceForm((current) => ({
      ...current,
      materialOptions: [...current.materialOptions, { name: "", description: "", priceAdjustment: "", defaultSelected: false }]
    }));
  }

  function updateMaterialOption(index, field, value) {
    setServiceForm((current) => ({
      ...current,
      materialOptions: current.materialOptions.map((option, optionIndex) => (
        optionIndex === index ? { ...option, [field]: value } : option
      ))
    }));
  }

  function removeMaterialOption(index) {
    setServiceForm((current) => ({
      ...current,
      materialOptions: current.materialOptions.filter((_, optionIndex) => optionIndex !== index)
    }));
  }

  async function handleServiceImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const image = await readFileAsDataUrl(file);
      setServiceForm((current) => ({ ...current, thumbnailImage: image }));
    } catch (err) {
      setError(err.message);
    }
  }

  async function saveService(event) {
    event.preventDefault();

    const filledPricingRows = serviceForm.pricingOptions.filter(
      (option) => option.label.trim() || `${option.price}`.trim() !== ""
    );
    const invalidPricingRows = filledPricingRows.filter(
      (option) => !option.label.trim() || !Number.isFinite(Number(option.price)) || Number(option.price) <= 0
    );

    if (!serviceForm.title.trim() || !serviceForm.description.trim() || !serviceForm.category) {
      setError("Please provide the service title, description, and category.");
      return;
    }

    if (filledPricingRows.length === 0) {
      setError("Add at least one pricing option before publishing the service.");
      return;
    }

    if (invalidPricingRows.length > 0) {
      setError("Each pricing option needs a label and a positive numeric price. Use plain numbers like 1200.");
      return;
    }

    const pricingOptions = filledPricingRows.map((option, index) => ({
      label: option.label.trim(),
      price: Number(option.price),
      materialIncluded: option.materialIncluded,
      defaultOption: option.defaultOption,
      sortOrder: index
    }));

    const filledMaterialRows = serviceForm.materialOptions.filter(
      (option) => option.name.trim() || `${option.priceAdjustment}`.trim() !== "" || option.description.trim()
    );
    const invalidMaterialRows = filledMaterialRows.filter(
      (option) => !option.name.trim() || !Number.isFinite(Number(option.priceAdjustment)) || Number(option.priceAdjustment) < 0
    );

    if (invalidMaterialRows.length > 0) {
      setError("Each material add-on needs a name and a valid extra price. Use 0 or a positive number.");
      return;
    }

    const materialOptions = filledMaterialRows.map((option, index) => ({
      name: option.name.trim(),
      description: option.description.trim(),
      priceAdjustment: Number(option.priceAdjustment),
      defaultSelected: option.defaultSelected,
      sortOrder: index
    }));

    const hasDefault = pricingOptions.some((option) => option.defaultOption);
    const normalizedPricingOptions = pricingOptions.map((option, index) => ({
      ...option,
      defaultOption: hasDefault ? option.defaultOption : index === 0
    }));

    const payload = {
      title: serviceForm.title.trim(),
      description: serviceForm.description.trim(),
      category: serviceForm.category,
      thumbnailImage: serviceForm.thumbnailImage || null,
      price: Math.min(...normalizedPricingOptions.map((option) => option.price)),
      pricingOptions: normalizedPricingOptions,
      materialOptions
    };

    try {
      setMessage("");
      setError("");
      if (editingServiceId) {
        await api.updateService(editingServiceId, payload, token);
        setMessage("Service updated.");
      } else {
        await api.createService(payload, token);
        setMessage("Service created.");
      }
      setServiceForm(createVendorServiceTemplate());
      setEditingServiceId(null);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  function beginEditService(service) {
    setEditingServiceId(service.id);
    setServiceForm({
      title: service.title,
      description: service.description,
      category: service.category,
      thumbnailImage: service.thumbnailImage || "",
      pricingOptions: (service.pricingOptions?.length ? service.pricingOptions : [{ label: "Standard quote", price: service.price, materialIncluded: false, defaultOption: true }]).map((option) => ({
        label: option.label,
        price: option.price,
        materialIncluded: option.materialIncluded,
        defaultOption: option.defaultOption
      })),
      materialOptions: (service.materialOptions || []).map((option) => ({
        name: option.name,
        description: option.description || "",
        priceAdjustment: option.priceAdjustment,
        defaultSelected: option.defaultSelected
      }))
    });
  }

  async function handleWorkImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const image = await readFileAsDataUrl(file);
      setWorkForm((current) => ({ ...current, image }));
    } catch (err) {
      setError(err.message);
    }
  }

  async function saveWork(event) {
    event.preventDefault();

    if (!workForm.title.trim() || !workForm.description.trim() || !workForm.category.trim() || !workForm.image) {
      setError("Please complete the work title, description, category, and image.");
      return;
    }

    try {
      setMessage("");
      setError("");
      const payload = {
        title: workForm.title.trim(),
        description: workForm.description.trim(),
        category: workForm.category.trim(),
        image: workForm.image,
        featured: workForm.featured
      };

      if (editingWorkId) {
        await api.updateVendorWork(editingWorkId, payload, token);
        setMessage("Portfolio work updated.");
      } else {
        await api.createVendorWork(payload, token);
        setMessage("Portfolio work published.");
      }
      setWorkForm(createWorkTemplate());
      setEditingWorkId(null);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  function beginEditWork(work) {
    setEditingWorkId(work.id);
    setWorkForm({
      title: work.title,
      description: work.description,
      category: work.category,
      image: work.image,
      featured: work.featured
    });
  }

  async function removeWork(workId) {
    if (!window.confirm("Delete this portfolio work?")) {
      return;
    }

    try {
      setMessage("");
      setError("");
      await api.deleteVendorWork(workId, token);
      setMessage("Portfolio work removed.");
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function submitReview(event) {
    event.preventDefault();
    if (!reviewForm.orderId) {
      setError("Select an order to review.");
      return;
    }

    try {
      setMessage("");
      setError("");
      await api.createReview({ ...reviewForm, orderId: Number(reviewForm.orderId), rating: Number(reviewForm.rating) }, token);
      setReviewForm(createReviewTemplate());
      setMessage("Review submitted.");
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function submitReply(reviewId) {
    const comment = replyDrafts[reviewId]?.trim();
    if (!comment) {
      setError("Reply text is required.");
      return;
    }

    try {
      setMessage("");
      setError("");
      await api.replyToReview(reviewId, { comment }, token);
      setMessage("Review reply saved.");
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function approveVendor(userId) {
    try {
      setMessage("");
      setError("");
      await api.approveVendor(userId, token);
      setMessage("Vendor verified with blue check.");
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  async function releasePayment(orderId) {
    try {
      setMessage("");
      setError("");
      await api.releasePayment({ orderId }, token);
      setMessage(`Escrow released for order #${orderId}.`);
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  }

  function submitWork(orderId) {
    const note = window.prompt("Add a submission note for the client", "Work delivered through dashboard") || "";
    if (!note.trim()) {
      return;
    }
    updateOrder(orderId, "SUBMITTED", note, note);
  }

  function declineOrder(orderId) {
    const reason = window.prompt("Why are you declining this request?") || "";
    if (!reason.trim()) {
      return;
    }
    updateOrder(orderId, "CANCELLED", "", reason);
  }

  return (
    <main className="page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">{user.role}</span>
          <h1 className="vendor-name-row">
            <span>{user.name}</span>
            {user.role === "VENDOR" && user.verified && <BadgeCheck size={18} className="verified-badge-inline" aria-label="Verified vendor" />}
          </h1>
          <p>Status: {user.status}</p>
          {user.role === "VENDOR" && (
            <p className="subtle">{user.verified ? "Your profile shows the blue verified badge to all users." : "You can publish services now. Admin verification only adds the blue badge."}</p>
          )}
        </div>
        <div className="stats-grid mini">
          <article className="card stat-card"><strong>{orders.length}</strong><span>Total orders</span></article>
          {user.role === "VENDOR" && <article className="card stat-card"><strong>{vendorServices.length}</strong><span>Your services</span></article>}
          {user.role === "VENDOR" && <article className="card stat-card"><strong>{vendorWorks.length}</strong><span>Portfolio works</span></article>}
          {user.role === "ADMIN" && <article className="card stat-card"><strong>{pendingVendorApprovals}</strong><span>Unverified vendors</span></article>}
          {user.role === "CLIENT" && <article className="card stat-card"><strong>{savedServices.length}</strong><span>Saved services</span></article>}
        </div>
      </section>

      {message && <p className="notice">{message}</p>}
      {error && <p className="error">{error}</p>}

      <section className="card filters-row compact">
        <label>
          Order status
          <select value={orderFilter} onChange={(e) => setOrderFilter(e.target.value)}>
            <option value="ALL">All statuses</option>
            {["PAID", "IN_PROGRESS", "SUBMITTED", "APPROVED", "COMPLETED", "CANCELLED", "DISPUTE"].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
      </section>

      {user.role === "VENDOR" && vendorAnalytics && (
        <section className="card analytics-panel">
          <h2>Vendor analytics</h2>
          <div className="stats-grid">
            <article className="card stat-card"><strong>{vendorAnalytics.totalOrders}</strong><span>Total orders</span></article>
            <article className="card stat-card"><strong>{vendorAnalytics.activeOrders}</strong><span>Active orders</span></article>
            <article className="card stat-card"><strong>{vendorAnalytics.completedOrders}</strong><span>Completed orders</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.averageOrderValue}</strong><span>Avg order value</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.grossOrderValue}</strong><span>Gross pipeline</span></article>
            <article className="card stat-card"><strong>${vendorAnalytics.completedOrderValue}</strong><span>Realized revenue</span></article>
          </div>
        </section>
      )}

      {user.role === "VENDOR" && (
        <section className="card form-card">
          <h2>{editingServiceId ? "Edit service" : "Create service"}</h2>
          <form onSubmit={saveService}>
            <input placeholder="Title" value={serviceForm.title} onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })} />
            <textarea placeholder="Description" value={serviceForm.description} onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })} />
            <select value={serviceForm.category} onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}>
              <option value="">Select category</option>
              {serviceCategoryOptions.map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
            <label className="upload-field">
              <span className="upload-label">Service cover image</span>
              <span className="upload-help">Optional image that helps clients understand the service at a glance.</span>
              <input type="file" accept="image/*" onChange={handleServiceImageChange} />
            </label>
            {serviceForm.thumbnailImage && (
              <div className="dashboard-image-preview">
                <img src={serviceForm.thumbnailImage} alt="Service cover preview" className="upload-preview-image" />
              </div>
            )}

            <div className="builder-list">
              <div className="builder-head">
                <h3>Pricing options</h3>
                <button className="ghost-button" type="button" onClick={addPricingOption}>Add pricing option</button>
              </div>
              <p className="subtle">Use plain numeric prices like 1200 or 1200.50. Commas and currency symbols are rejected.</p>
              {serviceForm.pricingOptions.map((option, index) => (
                <div key={`${option.label}-${index}`} className="builder-card">
                  <input placeholder="Option label" value={option.label} onChange={(e) => updatePricingOption(index, "label", e.target.value)} />
                  <input type="number" min="0" step="0.01" inputMode="decimal" placeholder="Price" value={option.price} onChange={(e) => updatePricingOption(index, "price", e.target.value)} />
                  <label className="builder-inline-check">
                    <input type="checkbox" checked={option.materialIncluded} onChange={(e) => updatePricingOption(index, "materialIncluded", e.target.checked)} />
                    Includes material
                  </label>
                  <label className="builder-inline-check">
                    <input type="radio" checked={option.defaultOption} onChange={() => setDefaultPricingOption(index)} />
                    Default option
                  </label>
                  {serviceForm.pricingOptions.length > 1 && (
                    <button className="ghost-button" type="button" onClick={() => removePricingOption(index)}>Remove</button>
                  )}
                </div>
              ))}
            </div>

            <div className="builder-list">
              <div className="builder-head">
                <h3>Material add-ons</h3>
                <button className="ghost-button" type="button" onClick={addMaterialOption}>Add material option</button>
              </div>
              {serviceForm.materialOptions.length === 0 && <p className="subtle">Add optional materials clients can toggle while booking.</p>}
              {serviceForm.materialOptions.map((option, index) => (
                <div key={`${option.name}-${index}`} className="builder-card">
                  <input placeholder="Material name" value={option.name} onChange={(e) => updateMaterialOption(index, "name", e.target.value)} />
                  <input type="number" min="0" step="0.01" inputMode="decimal" placeholder="Extra price" value={option.priceAdjustment} onChange={(e) => updateMaterialOption(index, "priceAdjustment", e.target.value)} />
                  <input placeholder="Description" value={option.description} onChange={(e) => updateMaterialOption(index, "description", e.target.value)} />
                  <label className="builder-inline-check">
                    <input type="checkbox" checked={option.defaultSelected} onChange={(e) => updateMaterialOption(index, "defaultSelected", e.target.checked)} />
                    Preselect for clients
                  </label>
                  <button className="ghost-button" type="button" onClick={() => removeMaterialOption(index)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="action-row">
              <button className="primary-button" type="submit">{editingServiceId ? "Save changes" : "Publish service"}</button>
              {editingServiceId && (
                <button className="ghost-button" type="button" onClick={() => { setEditingServiceId(null); setServiceForm(createVendorServiceTemplate()); }}>
                  Cancel edit
                </button>
              )}
            </div>
          </form>
          {vendorServices.length > 0 && (
            <div className="stack-list">
              {vendorServices.map((service) => (
                <div key={service.id} className="list-item vertical">
                  <span>
                    {service.title} (${service.price})
                    {service.vendorVerified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </span>
                  <small>{service.pricingOptions?.length || 0} pricing options • {service.materialOptions?.length || 0} material add-ons</small>
                  <button className="ghost-button" type="button" onClick={() => beginEditService(service)}>Edit</button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {user.role === "VENDOR" && (
        <section className="card form-card">
          <h2>{editingWorkId ? "Edit portfolio work" : "Add portfolio work"}</h2>
          <form onSubmit={saveWork}>
            <input placeholder="Work title" value={workForm.title} onChange={(e) => setWorkForm({ ...workForm, title: e.target.value })} />
            <textarea placeholder="Describe the finished work" value={workForm.description} onChange={(e) => setWorkForm({ ...workForm, description: e.target.value })} />
            <input placeholder="Category" value={workForm.category} onChange={(e) => setWorkForm({ ...workForm, category: e.target.value })} />
            <label className="upload-field">
              <span className="upload-label">Portfolio image</span>
              <span className="upload-help">Upload a clear image of the completed work.</span>
              <input type="file" accept="image/*" onChange={handleWorkImageChange} />
            </label>
            {workForm.image && (
              <div className="dashboard-image-preview">
                <img src={workForm.image} alt="Portfolio work preview" className="upload-preview-image" />
              </div>
            )}
            <label className="builder-inline-check">
              <input type="checkbox" checked={workForm.featured} onChange={(e) => setWorkForm({ ...workForm, featured: e.target.checked })} />
              Mark as featured work
            </label>
            <div className="action-row">
              <button className="primary-button" type="submit">{editingWorkId ? "Save work" : "Publish work"}</button>
              {editingWorkId && (
                <button className="ghost-button" type="button" onClick={() => { setEditingWorkId(null); setWorkForm(createWorkTemplate()); }}>
                  Cancel edit
                </button>
              )}
            </div>
          </form>
          {vendorWorks.length > 0 && (
            <div className="stack-list">
              {vendorWorks.map((work) => (
                <div key={work.id} className="list-item vertical">
                  <span>{work.title}</span>
                  <small>{work.category}</small>
                  <div className="action-row">
                    <button className="ghost-button" type="button" onClick={() => beginEditWork(work)}>Edit</button>
                    <button className="ghost-button" type="button" onClick={() => removeWork(work.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {user.role === "VENDOR" && (
        <section className="card admin-card">
          <h2>Client reviews</h2>
          <div className="stack-list">
            {vendorReviews.length === 0 && <p className="subtle">Reviews will appear here after completed client orders are rated.</p>}
            {vendorReviews.map((review) => (
              <div key={review.id} className="list-item vertical">
                <strong>{review.clientName} • {"?".repeat(review.rating)}</strong>
                <p>{review.comment}</p>
                <textarea
                  placeholder="Reply to this review"
                  value={replyDrafts[review.id] || ""}
                  onChange={(e) => setReplyDrafts((current) => ({ ...current, [review.id]: e.target.value }))}
                />
                <button className="primary-button" type="button" onClick={() => submitReply(review.id)}>
                  {review.reply ? "Update reply" : "Reply"}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {loading && <p className="subtle">Loading dashboard...</p>}
      {!loading && filteredOrders.length === 0 && <p className="subtle">No orders found for this filter.</p>}

      <section className="grid">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order}>
            {user.role === "VENDOR" && order.status === "PAID" && <button className="primary-button" onClick={() => updateOrder(order.id, "IN_PROGRESS")}>Accept order</button>}
            {user.role === "VENDOR" && order.status === "PAID" && <button className="ghost-button" onClick={() => declineOrder(order.id)}>Decline order</button>}
            {user.role === "VENDOR" && order.status === "IN_PROGRESS" && <button className="primary-button" onClick={() => submitWork(order.id)}>Submit work</button>}
            {user.role === "CLIENT" && order.status === "SUBMITTED" && <button className="primary-button" onClick={() => updateOrder(order.id, "APPROVED")}>Approve work</button>}
            {user.role === "ADMIN" && order.status === "APPROVED" && <button className="primary-button" onClick={() => releasePayment(order.id)}>Release escrow</button>}
          </OrderCard>
        ))}
      </section>

      {user.role === "CLIENT" && (
        <>
          <section className="card form-card">
            <h2>Leave review</h2>
            <form onSubmit={submitReview}>
              <select value={reviewForm.orderId} onChange={(e) => setReviewForm({ ...reviewForm, orderId: e.target.value })}>
                <option value="">Select completed order</option>
                {reviewableOrders.map((order) => (
                  <option key={order.id} value={order.id}>#{order.id} - {order.serviceTitle}</option>
                ))}
              </select>
              <select value={reviewForm.rating} onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}>
                {[5, 4, 3, 2, 1].map((value) => <option key={value} value={value}>{value} stars</option>)}
              </select>
              <textarea placeholder="Feedback" value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} />
              <button className="primary-button" type="submit">Submit review</button>
            </form>
          </section>

          <section className="card admin-card">
            <h2>Saved services</h2>
            <div className="stack-list">
              {savedServices.length === 0 && <p className="subtle">No saved services yet. Save from Marketplace to shortlist options.</p>}
              {savedServices.map((item) => (
                <div key={item.id} className="list-item vertical">
                  <span>{item.title} (${item.price})</span>
                  <small className="vendor-inline-name">
                    {item.category} by {item.vendorName}
                    {item.vendorVerified && <BadgeCheck size={14} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </small>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {user.role === "ADMIN" && (
        <>
          <section className="card admin-card">
            <h2>User supervision</h2>
            <div className="stack-list">
              {users.map((account) => (
                <div key={account.id} className="list-item">
                  <span className="vendor-inline-name">
                    {account.name} ({account.role}) - {account.status}
                    {account.role === "VENDOR" && account.verified && <BadgeCheck size={15} className="verified-badge-inline" aria-label="Verified vendor" />}
                  </span>
                  {account.role === "VENDOR" && !account.verified && <button className="primary-button" onClick={() => approveVendor(account.id)}>Give blue check</button>}
                </div>
              ))}
            </div>
          </section>

          <section className="card admin-card">
            <h2>Transaction ledger</h2>
            <div className="stack-list">
              {transactions.map((item) => (
                <div key={item.id} className="list-item vertical">
                  <span>{item.type} ${item.amount} [{item.referenceId}]</span>
                  <small>{item.description}</small>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

