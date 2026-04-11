import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

const categoryOptions = [
  "",
  "Painting",
  "Window Making",
  "Plastering",
  "POP / False Ceiling",
  "PVC / Modular Work",
  "Renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

function getDefaultPricingOption(service) {
  return service?.pricingOptions?.find((option) => option.defaultOption) || service?.pricingOptions?.[0] || null;
}

function getDefaultMaterialOptionIds(service) {
  return (service?.materialOptions || []).filter((option) => option.defaultSelected).map((option) => String(option.id));
}

export default function ServicesPage() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [savedServiceIds, setSavedServiceIds] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [selectedService, setSelectedService] = useState(null);
  const [bookingForm, setBookingForm] = useState({ pricingOptionId: "", materialOptionIds: [], preferredDate: "", clientNote: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [activeChatServiceId, setActiveChatServiceId] = useState(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput.trim()), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    let active = true;
    async function loadServices() {
      try {
        setLoading(true);
        const data = await api.getServices({ search, category });
        if (active) {
          setServices(data);
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
    loadServices();
    return () => {
      active = false;
    };
  }, [search, category]);

  useEffect(() => {
    let active = true;
    async function loadSaved() {
      if (!user || user.role !== "CLIENT") {
        setSavedServiceIds([]);
        return;
      }
      try {
        const ids = await api.getSavedServiceIds(token);
        if (active) {
          setSavedServiceIds(ids);
        }
      } catch {
        if (active) {
          setSavedServiceIds([]);
        }
      }
    }
    loadSaved();
    return () => {
      active = false;
    };
  }, [token, user]);

  const visibleServices = useMemo(() => {
    const list = [...services];
    if (sortBy === "price-asc") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return list;
  }, [services, sortBy]);

  const selectedPricingOption = useMemo(() => {
    if (!selectedService) return null;
    return selectedService.pricingOptions?.find((option) => String(option.id) === bookingForm.pricingOptionId)
      || getDefaultPricingOption(selectedService);
  }, [bookingForm.pricingOptionId, selectedService]);

  const selectedMaterialOptions = useMemo(() => {
    if (!selectedService) return [];
    return (selectedService.materialOptions || []).filter((option) => bookingForm.materialOptionIds.includes(String(option.id)));
  }, [bookingForm.materialOptionIds, selectedService]);

  const bookingTotal = useMemo(() => {
    if (!selectedService) return "0.00";
    const base = Number(selectedPricingOption?.price ?? selectedService.price ?? 0);
    const materials = selectedMaterialOptions.reduce((sum, option) => sum + Number(option.priceAdjustment ?? 0), 0);
    return (base + materials).toFixed(2);
  }, [selectedMaterialOptions, selectedPricingOption, selectedService]);

  function openBooking(service) {
    if (!user) {
      navigate("/login", { state: { from: "/services" } });
      return;
    }
    if (user.role !== "CLIENT") {
      setError("Only client accounts can place orders.");
      return;
    }
    const defaultPricingOption = getDefaultPricingOption(service);
    setSelectedService(service);
    setBookingForm({
      pricingOptionId: defaultPricingOption?.id ? String(defaultPricingOption.id) : "",
      materialOptionIds: getDefaultMaterialOptionIds(service),
      preferredDate: "",
      clientNote: ""
    });
    setError("");
    setNotice("");
  }

  async function startChat(service) {
    if (!user) {
      navigate("/login", { state: { from: "/services" } });
      return;
    }
    if (user.role !== "CLIENT") {
      setError("Only client accounts can start chats with vendors.");
      return;
    }
    try {
      setActiveChatServiceId(service.id);
      const conversation = await api.startConversation({
        vendorId: service.vendorId,
        serviceId: service.id,
        subject: `Service enquiry: ${service.title}`,
        message: `Hi ${service.vendorName}, I want to discuss your service "${service.title}".`
      }, token);
      navigate(`/client/chat?conversation=${conversation.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setActiveChatServiceId(null);
    }
  }

  async function handleBookSubmit(event) {
    event.preventDefault();
    if (!selectedService) return;
    try {
      setSubmitting(true);
      setError("");
      const order = await api.createOrder({
        serviceId: selectedService.id,
        pricingOptionId: bookingForm.pricingOptionId ? Number(bookingForm.pricingOptionId) : null,
        materialOptionIds: bookingForm.materialOptionIds.map(Number),
        preferredDate: bookingForm.preferredDate || null,
        clientNote: bookingForm.clientNote.trim(),
        attachments: []
      }, token);
      await api.createPayment({ orderId: order.id, idempotencyKey: `escrow-${order.id}-${Date.now()}` }, token);
      setNotice(`Order #${order.id} created and escrow funded.`);
      setSelectedService(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSaveToggle(service) {
    if (!user) {
      navigate("/login", { state: { from: "/services" } });
      return;
    }
    if (user.role !== "CLIENT") {
      setError("Only client accounts can save services.");
      return;
    }
    try {
      const isSaved = savedServiceIds.includes(service.id);
      if (isSaved) {
        await api.unsaveService(service.id, token);
        setSavedServiceIds((current) => current.filter((id) => id !== service.id));
      } else {
        await api.saveService(service.id, token);
        setSavedServiceIds((current) => [...current, service.id]);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  function toggleMaterialOption(optionId) {
    setBookingForm((current) => ({
      ...current,
      materialOptionIds: current.materialOptionIds.includes(optionId)
        ? current.materialOptionIds.filter((id) => id !== optionId)
        : [...current.materialOptionIds, optionId]
    }));
  }

  return (
    <main className="page section-block services-page">
      <section className="services-hero">
        <span className="eyebrow">Services</span>
        <h1>Find the right vendor, then book or chat before the work starts.</h1>
        <p>Browse public listings, filter by service category, save favorites, ask questions, and create funded bookings.</p>
      </section>

      <section className="card filters-row">
        <input placeholder="Search services" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categoryOptions.map((value) => <option key={value} value={value}>{value || "All categories"}</option>)}
        </select>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="recent">Newest first</option>
          <option value="price-asc">Price low to high</option>
          <option value="price-desc">Price high to low</option>
        </select>
      </section>

      {notice && <p className="notice">{notice}</p>}
      {error && <p className="error">{error}</p>}
      {loading && <p className="subtle">Loading services...</p>}

      {selectedService && (
        <section className="card booking-panel">
          <div className="booking-panel-head">
            <div>
              <span className="eyebrow">Customize booking</span>
              <h2>{selectedService.title}</h2>
              <p className="subtle">Choose pricing, material add-ons, and a preferred date.</p>
            </div>
            <button type="button" className="ghost-button booking-close" onClick={() => setSelectedService(null)}>
              <X size={16} /> Close
            </button>
          </div>
          <form className="booking-config-card" onSubmit={handleBookSubmit}>
            <div className="booking-option-list">
              <strong>Pricing options</strong>
              {(selectedService.pricingOptions || []).map((option) => (
                <label key={option.id} className={`booking-option-card ${String(option.id) === bookingForm.pricingOptionId ? "active" : ""}`}>
                  <input type="radio" name="pricingOption" value={option.id} checked={String(option.id) === bookingForm.pricingOptionId} onChange={(event) => setBookingForm((current) => ({ ...current, pricingOptionId: event.target.value }))} />
                  <div><strong>{option.label}</strong><span>{option.description || "Vendor pricing option"}</span></div>
                  <span>${option.price}</span>
                </label>
              ))}
            </div>
            {(selectedService.materialOptions || []).length > 0 && (
              <div className="booking-option-list">
                <strong>Material add-ons</strong>
                {selectedService.materialOptions.map((option) => (
                  <label key={option.id} className="booking-checkbox-row">
                    <input type="checkbox" checked={bookingForm.materialOptionIds.includes(String(option.id))} onChange={() => toggleMaterialOption(String(option.id))} />
                    <span>{option.name}</span>
                    <small>{option.description || "Optional upgrade"}</small>
                    <strong>+${option.priceAdjustment}</strong>
                  </label>
                ))}
              </div>
            )}
            <label>Preferred date<input type="date" value={bookingForm.preferredDate} onChange={(event) => setBookingForm((current) => ({ ...current, preferredDate: event.target.value }))} /></label>
            <label>Notes for vendor<textarea value={bookingForm.clientNote} onChange={(event) => setBookingForm((current) => ({ ...current, clientNote: event.target.value }))} /></label>
            <div className="booking-total-row"><span>Total estimate</span><strong>${bookingTotal}</strong></div>
            <button className="primary-button" type="submit" disabled={submitting}>{submitting ? "Creating booking..." : "Fund escrow and book"}</button>
          </form>
        </section>
      )}

      {!loading && visibleServices.length === 0 && <p className="subtle">No services found for your current filters.</p>}
      <section className="grid">
        {visibleServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPrimaryAction={openBooking}
            actionLabel={user?.role === "CLIENT" || !user ? "Customize & book" : "Client account required"}
            actionDisabled={Boolean(user && user.role !== "CLIENT")}
            onSaveAction={handleSaveToggle}
            isSaved={savedServiceIds.includes(service.id)}
            onChatAction={startChat}
            chatLabel={activeChatServiceId === service.id ? "Opening chat..." : "Chat with Vendor"}
            chatDisabled={activeChatServiceId === service.id || Boolean(user && user.role !== "CLIENT")}
          />
        ))}
      </section>
    </main>
  );
}
