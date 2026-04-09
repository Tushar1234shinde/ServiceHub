import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import CallToAction from "../components/home/CallToAction";
import CategoryGrid from "../components/home/CategoryGrid";
import Hero from "../components/home/Hero";
import RecentWorks from "../components/home/RecentWorks";
import Testimonials from "../components/home/Testimonials";
import VendorCarousel from "../components/home/VendorCarousel";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import { getDefaultPathForUser } from "../roleRoutes";

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

const serviceTypeFilters = [
  "Repairs",
  "Deep cleaning",
  "Pest control",
  "Home maintenance"
];

const serviceTypeKeywords = {
  Repairs: ["repair", "fix", "plaster", "window", "renovation"],
  "Deep cleaning": ["deep cleaning", "cleaning", "sanitize"],
  "Pest control": ["pest", "termite", "rodent", "insect"],
  "Home maintenance": ["maintenance", "upkeep", "inspection", "installation"]
};

const platformFeatures = [
  {
    title: "Verified Technicians",
    detail: "Access screened professionals with live profiles, reviews, and proof of previous work."
  },
  {
    title: "Booking Convenience",
    detail: "Browse publicly, then sign in only when you are ready to customize and purchase a service."
  },
  {
    title: "Transparent Pricing",
    detail: "Choose vendor pricing modes and optional material add-ons before funding escrow."
  },
  {
    title: "Proof of Work",
    detail: "Review real vendor portfolios and completed client feedback before booking."
  }
];

function matchesServiceType(service, selectedType) {
  if (!selectedType) {
    return true;
  }

  const haystack = `${service.title} ${service.description} ${service.category}`.toLowerCase();
  const keywords = serviceTypeKeywords[selectedType] || [];
  return keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(new Error("Could not read the selected image"));
    reader.readAsDataURL(file);
  });
}

function getDefaultPricingOption(service) {
  return service?.pricingOptions?.find((option) => option.defaultOption) || service?.pricingOptions?.[0] || null;
}

function getDefaultMaterialOptionIds(service) {
  return (service?.materialOptions || [])
    .filter((option) => option.defaultSelected)
    .map((option) => String(option.id));
}

export default function MarketplacePage() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [homepageData, setHomepageData] = useState({ topVendors: [], recentWorks: [], testimonials: [] });
  const [savedServiceIds, setSavedServiceIds] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookingServiceId, setBookingServiceId] = useState(null);
  const [savingServiceId, setSavingServiceId] = useState(null);
  const [submittingBooking, setSubmittingBooking] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    pricingOptionId: "",
    materialOptionIds: [],
    preferredDate: "",
    clientNote: "",
    attachments: []
  });

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput.trim()), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    let isActive = true;

    async function loadHomepage() {
      try {
        const data = await api.getHomepageData();
        if (isActive) {
          setHomepageData(data);
        }
      } catch {
        if (isActive) {
          setHomepageData({ topVendors: [], recentWorks: [], testimonials: [] });
        }
      }
    }

    loadHomepage();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadServices() {
      try {
        setLoading(true);
        setError("");
        const data = await api.getServices({ search, category });
        if (isActive) {
          setServices(data);
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

    loadServices();
    return () => {
      isActive = false;
    };
  }, [search, category]);

  useEffect(() => {
    let isActive = true;

    async function loadSaved() {
      if (!user || user.role !== "CLIENT") {
        setSavedServiceIds([]);
        return;
      }

      try {
        const ids = await api.getSavedServiceIds(token);
        if (isActive) {
          setSavedServiceIds(ids);
        }
      } catch {
        if (isActive) {
          setSavedServiceIds([]);
        }
      }
    }

    loadSaved();
    return () => {
      isActive = false;
    };
  }, [user, token]);

  const selectedServiceId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const rawServiceId = Number(params.get("service"));
    if (params.get("booking") !== "1" || Number.isNaN(rawServiceId) || rawServiceId <= 0) {
      return null;
    }
    return rawServiceId;
  }, [location.search]);

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) || null,
    [services, selectedServiceId]
  );

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const defaultPricingOption = getDefaultPricingOption(selectedService);
    setBookingForm({
      pricingOptionId: defaultPricingOption?.id ? String(defaultPricingOption.id) : "",
      materialOptionIds: getDefaultMaterialOptionIds(selectedService),
      preferredDate: "",
      clientNote: "",
      attachments: []
    });
  }, [selectedService]);

  const visibleServices = useMemo(() => {
    let list = [...services];

    if (serviceType) {
      list = list.filter((service) => matchesServiceType(service, serviceType));
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return list;
  }, [services, serviceType, sortBy]);

  const vendorCount = useMemo(() => new Set(services.map((service) => service.vendorId)).size, [services]);

  const selectedPricingOption = useMemo(() => {
    if (!selectedService) {
      return null;
    }
    return selectedService.pricingOptions?.find((option) => String(option.id) === bookingForm.pricingOptionId)
      || getDefaultPricingOption(selectedService);
  }, [bookingForm.pricingOptionId, selectedService]);

  const selectedMaterialOptions = useMemo(() => {
    if (!selectedService) {
      return [];
    }
    return (selectedService.materialOptions || []).filter((option) => bookingForm.materialOptionIds.includes(String(option.id)));
  }, [bookingForm.materialOptionIds, selectedService]);

  const bookingTotal = useMemo(() => {
    if (!selectedService) {
      return "0.00";
    }
    const base = Number(selectedPricingOption?.price ?? selectedService.price ?? 0);
    const materials = selectedMaterialOptions.reduce((sum, option) => sum + Number(option.priceAdjustment ?? 0), 0);
    return (base + materials).toFixed(2);
  }, [selectedMaterialOptions, selectedPricingOption, selectedService]);

  const workspacePath = getDefaultPathForUser(user);

  function navigateToLogin(returnPath) {
    navigate("/login", { state: { from: returnPath } });
  }

  function setBookingRoute(serviceId) {
    if (!serviceId) {
      navigate({ pathname: "/", search: "" }, { replace: true });
      return;
    }
    navigate({ pathname: "/", search: `?service=${serviceId}&booking=1` }, { replace: false });
  }

  function openBooking(service) {
    if (!user) {
      navigateToLogin(`/?service=${service.id}&booking=1`);
      return;
    }

    if (user.role !== "CLIENT") {
      setError("Only client accounts can place orders.");
      return;
    }

    setError("");
    setNotice("");
    setBookingRoute(service.id);
    window.requestAnimationFrame(() => {
      document.getElementById("booking-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function closeBooking() {
    setBookingRoute(null);
  }

  async function handleAttachmentChange(event) {
    const files = Array.from(event.target.files || []).slice(0, 5);
    if (files.length === 0) {
      return;
    }

    try {
      const attachments = await Promise.all(
        files.map(async (file, index) => ({
          imageData: await readFileAsDataUrl(file),
          caption: `Reference image ${index + 1}`
        }))
      );
      setBookingForm((current) => ({ ...current, attachments }));
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

  async function handleBookSubmit(event) {
    event.preventDefault();
    if (!selectedService) {
      return;
    }

    if (!user) {
      navigateToLogin(`/?service=${selectedService.id}&booking=1`);
      return;
    }

    if (user.role !== "CLIENT") {
      setError("Only client accounts can place orders.");
      return;
    }

    if (bookingForm.preferredDate) {
      const selectedDate = new Date(bookingForm.preferredDate);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        setError("Preferred booking date cannot be in the past.");
        return;
      }
    }

    try {
      setError("");
      setNotice("");
      setSubmittingBooking(true);
      const order = await api.createOrder({
        serviceId: selectedService.id,
        pricingOptionId: bookingForm.pricingOptionId ? Number(bookingForm.pricingOptionId) : null,
        materialOptionIds: bookingForm.materialOptionIds.map(Number),
        preferredDate: bookingForm.preferredDate || null,
        clientNote: bookingForm.clientNote.trim(),
        attachments: bookingForm.attachments.map((attachment) => ({
          imageData: attachment.imageData,
          caption: attachment.caption
        }))
      }, token);

      await api.createPayment({ orderId: order.id, idempotencyKey: `escrow-${order.id}-${Date.now()}` }, token);
      const scheduleText = order.preferredDate ? ` Scheduled for ${new Date(order.preferredDate).toLocaleDateString()}.` : "";
      setNotice(`Order #${order.id} created and escrow funded.${scheduleText}`);
      closeBooking();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmittingBooking(false);
    }
  }

  async function handleSaveToggle(service) {
    if (!user) {
      navigateToLogin(`${location.pathname}${location.search}`);
      return;
    }

    if (user.role !== "CLIENT") {
      setError("Only client accounts can save services.");
      return;
    }

    const isSaved = savedServiceIds.includes(service.id);

    try {
      setSavingServiceId(service.id);
      setError("");
      setNotice("");
      if (isSaved) {
        await api.unsaveService(service.id, token);
        setSavedServiceIds((prev) => prev.filter((id) => id !== service.id));
        setNotice(`Removed ${service.title} from saved services.`);
      } else {
        await api.saveService(service.id, token);
        setSavedServiceIds((prev) => [...prev, service.id]);
        setNotice(`Saved ${service.title} for later.`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingServiceId(null);
    }
  }

  return (
    <main className="market-home">
      <Hero
        servicesCount={services.length}
        vendorsCount={vendorCount}
        savedCount={savedServiceIds.length}
        onFindVendors={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        onBecomeVendor={() => navigate(user ? workspacePath : "/register")}
      />

      <section className="page section-block feature-block">
        <div className="section-headline">
          <h2>Key Features of Home Service Platforms</h2>
        </div>
        <div className="feature-grid">
          {platformFeatures.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <VendorCarousel vendors={homepageData.topVendors} />
      <CategoryGrid />
      <RecentWorks works={homepageData.recentWorks} />
      <Testimonials testimonials={homepageData.testimonials} />

      <section className="page section-block" id="services">
        <div className="section-headline">
          <h2>Live Marketplace Listings</h2>
          <p>Browse publicly, then customize pricing, material choices, and booking references before you fund escrow.</p>
        </div>

        <div className="service-type-chips">
          {serviceTypeFilters.map((type) => (
            <button
              key={type}
              type="button"
              className={`chip-button ${serviceType === type ? "active" : ""}`}
              onClick={() => setServiceType((prev) => (prev === type ? "" : type))}
            >
              {type}
            </button>
          ))}
        </div>

        <section className="card filters-row">
          <input placeholder="Search services" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions.map((value) => (
              <option key={value} value={value}>{value || "All categories"}</option>
            ))}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recent">Newest first</option>
            <option value="price-asc">Price low to high</option>
            <option value="price-desc">Price high to low</option>
          </select>
        </section>

        {notice && <p className="notice">{notice}</p>}
        {error && <p className="error">{error}</p>}
        {selectedService && (
          <section className="card booking-panel" id="booking-panel">
            <div className="booking-panel-head">
              <div>
                <span className="eyebrow">Customize booking</span>
                <h3>{selectedService.title}</h3>
                <p className="subtle">Choose the vendor pricing mode, add material preferences, attach reference photos, and place the order.</p>
              </div>
              <button type="button" className="ghost-button booking-close" onClick={closeBooking}>
                <X size={16} /> Close
              </button>
            </div>

            <form className="booking-panel-grid" onSubmit={handleBookSubmit}>
              <div className="booking-summary-card">
                {selectedService.thumbnailImage && <img src={selectedService.thumbnailImage} alt={selectedService.title} className="service-image" />}
                <p>{selectedService.description}</p>
                <p className="subtle">Vendor: {selectedService.vendorName}</p>
              </div>

              <div className="booking-config-card">
                <div className="booking-option-list">
                  <strong>Pricing options</strong>
                  {(selectedService.pricingOptions || []).map((option) => (
                    <label key={option.id} className={`booking-option-card ${String(option.id) === bookingForm.pricingOptionId ? "active" : ""}`}>
                      <input
                        type="radio"
                        name="pricingOption"
                        value={option.id}
                        checked={String(option.id) === bookingForm.pricingOptionId}
                        onChange={(event) => setBookingForm((current) => ({ ...current, pricingOptionId: event.target.value }))}
                      />
                      <div>
                        <strong>{option.label}</strong>
                        <span>{option.description || (option.materialIncluded ? "Includes material cost" : "Client-managed material")}</span>
                      </div>
                      <span>${option.price}</span>
                    </label>
                  ))}
                </div>

                {(selectedService.materialOptions || []).length > 0 && (
                  <div className="booking-option-list">
                    <strong>Material add-ons</strong>
                    {(selectedService.materialOptions || []).map((option) => (
                      <label key={option.id} className="booking-checkbox-row">
                        <input
                          type="checkbox"
                          checked={bookingForm.materialOptionIds.includes(String(option.id))}
                          onChange={() => toggleMaterialOption(String(option.id))}
                        />
                        <span>{option.name}</span>
                        <small>{option.description || "Optional upgrade"}</small>
                        <strong>+${option.priceAdjustment}</strong>
                      </label>
                    ))}
                  </div>
                )}

                <label>
                  Preferred date
                  <input
                    type="date"
                    value={bookingForm.preferredDate}
                    onChange={(event) => setBookingForm((current) => ({ ...current, preferredDate: event.target.value }))}
                  />
                </label>

                <label>
                  Notes for vendor
                  <textarea
                    placeholder="Share room details, measurements, preferred timing, or anything the vendor should know"
                    value={bookingForm.clientNote}
                    onChange={(event) => setBookingForm((current) => ({ ...current, clientNote: event.target.value }))}
                  />
                </label>

                <label className="upload-field">
                  <span className="upload-label">Upload reference photos</span>
                  <span className="upload-help">You can attach up to 5 images that help the vendor understand the request.</span>
                  <input type="file" accept="image/*" multiple onChange={handleAttachmentChange} />
                </label>

                {bookingForm.attachments.length > 0 && (
                  <div className="booking-preview-list">
                    {bookingForm.attachments.map((attachment, index) => (
                      <img key={`${attachment.caption}-${index}`} src={attachment.imageData} alt={attachment.caption} className="order-attachment-thumb" />
                    ))}
                  </div>
                )}

                <div className="booking-total-row">
                  <span>Total estimate</span>
                  <strong>${bookingTotal}</strong>
                </div>

                <div className="service-actions">
                  <button className="primary-button" type="submit" disabled={submittingBooking}>
                    {submittingBooking ? "Creating booking..." : "Fund escrow and book"}
                  </button>
                  <button className="ghost-button" type="button" onClick={closeBooking}>Cancel</button>
                </div>
              </div>
            </form>
          </section>
        )}

        {loading && <p className="subtle">Loading services...</p>}
        {!loading && visibleServices.length === 0 && <p className="subtle">No services found for your current filters.</p>}

        <section className="grid">
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onPrimaryAction={openBooking}
              actionLabel={user?.role === "CLIENT" || !user ? "Customize & book" : "Client account required"}
              actionDisabled={Boolean(user && user.role !== "CLIENT")}
              bookingInProgress={bookingServiceId === service.id}
              onSaveAction={handleSaveToggle}
              isSaved={savedServiceIds.includes(service.id)}
              saveInProgress={savingServiceId === service.id}
            />
          ))}
        </section>
      </section>

      <CallToAction
        onExplore={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        onJoin={() => navigate(user ? workspacePath : "/register")}
      />
    </main>
  );
}

