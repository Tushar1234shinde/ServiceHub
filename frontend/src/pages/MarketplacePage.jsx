import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import CallToAction from "../components/home/CallToAction";
import CategoryGrid from "../components/home/CategoryGrid";
import Hero from "../components/home/Hero";
import RecentWorks from "../components/home/RecentWorks";
import Testimonials from "../components/home/Testimonials";
import VendorCarousel from "../components/home/VendorCarousel";
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
    detail: "Access to screened professionals, including plumbers, electricians, and cleaners."
  },
  {
    title: "Booking Convenience",
    detail: "Easy booking, tracking, and scheduling of appointments."
  },
  {
    title: "Transparent Pricing",
    detail: "Upfront quotes, no hidden costs."
  },
  {
    title: "Service Types",
    detail: "Repairs, deep cleaning, pest control, and home maintenance."
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

export default function MarketplacePage() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [savedServiceIds, setSavedServiceIds] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [preferredDate, setPreferredDate] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookingServiceId, setBookingServiceId] = useState(null);
  const [savingServiceId, setSavingServiceId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput.trim()), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

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

  const topVendors = useMemo(() => {
    const map = new Map();
    services.forEach((service) => {
      const key = service.vendorId;
      const current = map.get(key) || {
        id: key,
        name: service.vendorName,
        count: 0,
        categories: {},
        verified: Boolean(service.vendorVerified)
      };
      current.count += 1;
      current.categories[service.category] = (current.categories[service.category] || 0) + 1;
      current.verified = current.verified || Boolean(service.vendorVerified);
      map.set(key, current);
    });

    return Array.from(map.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
      .map((vendor, index) => {
        const topCategory = Object.entries(vendor.categories).sort((a, b) => b[1] - a[1])[0]?.[0] || "Home Services";
        return {
          id: vendor.id,
          name: vendor.name,
          serviceType: topCategory,
          rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
          reviews: vendor.count * 14 + 35,
          verified: vendor.verified,
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(vendor.name)}&background=0891b2&color=fff&size=140`
        };
      });
  }, [services]);

  async function handleBook(service) {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role !== "CLIENT") {
      setError("Only client accounts can place orders.");
      return;
    }

    if (preferredDate) {
      const selectedDate = new Date(preferredDate);
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
      setBookingServiceId(service.id);
      const order = await api.createOrder({ serviceId: service.id, preferredDate: preferredDate || null }, token);
      await api.createPayment({ orderId: order.id, idempotencyKey: `escrow-${order.id}-${Date.now()}` }, token);
      const scheduleText = order.preferredDate ? ` Scheduled for ${new Date(order.preferredDate).toLocaleDateString()}.` : "";
      setNotice(`Order #${order.id} created and escrow funded.${scheduleText}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setBookingServiceId(null);
    }
  }

  async function handleSaveToggle(service) {
    if (!user) {
      navigate("/login");
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
        vendorsCount={topVendors.length}
        savedCount={savedServiceIds.length}
        onFindVendors={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        onBecomeVendor={() => navigate(user ? "/dashboard" : "/register")}
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

      <VendorCarousel vendors={topVendors} />
      <CategoryGrid />
      <RecentWorks />
      <Testimonials />

      <section className="page section-block" id="services">
        <div className="section-headline">
          <h2>Live Marketplace Listings</h2>
          <p>Search, filter, save, and book with escrow protection.</p>
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
          <input type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} />
        </section>

        {notice && <p className="notice">{notice}</p>}
        {error && <p className="error">{error}</p>}
        {loading && <p className="subtle">Loading services...</p>}
        {!loading && visibleServices.length === 0 && <p className="subtle">No services found for your current filters.</p>}

        <section className="grid">
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onPrimaryAction={handleBook}
              actionLabel={user?.role === "CLIENT" ? "Book with escrow" : "Login as client to book"}
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
        onJoin={() => navigate(user ? "/dashboard" : "/register")}
      />
    </main>
  );
}
