import { useEffect, useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const categoryOptions = [
  "Painting",
  "Window Making",
  "Plastering",
  "POP / False Ceiling",
  "PVC / Modular Work",
  "Renovation",
  "Maintenance, repairs, cleaning, and installation services"
];

const emptyService = {
  id: null,
  title: "",
  description: "",
  price: "",
  category: categoryOptions[0],
  thumbnailImage: "",
  pricingOptions: [],
  materialOptions: []
};

const emptyPricing = {
  id: null,
  label: "",
  description: "",
  price: "",
  materialIncluded: false,
  defaultOption: false,
  sortOrder: 0
};

const emptyMaterial = {
  id: null,
  name: "",
  description: "",
  priceAdjustment: "0",
  defaultSelected: false,
  active: true,
  sortOrder: 0
};

function servicePayload(service) {
  return {
    title: service.title,
    description: service.description,
    price: Number(service.price),
    category: service.category,
    thumbnailImage: service.thumbnailImage || null,
    pricingOptions: (service.pricingOptions || []).map((option) => ({
      label: option.label,
      description: option.description || null,
      price: Number(option.price),
      materialIncluded: Boolean(option.materialIncluded),
      defaultOption: Boolean(option.defaultOption),
      sortOrder: Number(option.sortOrder || 0)
    })),
    materialOptions: (service.materialOptions || []).map((option) => ({
      name: option.name,
      description: option.description || null,
      priceAdjustment: Number(option.priceAdjustment || 0),
      defaultSelected: Boolean(option.defaultSelected),
      sortOrder: Number(option.sortOrder || 0)
    }))
  };
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

export default function VendorServicesPage() {
  const { token } = useAuth();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(emptyService);
  const [pricingForm, setPricingForm] = useState(emptyPricing);
  const [materialForm, setMaterialForm] = useState(emptyMaterial);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadServices(selectedId = null) {
    const list = await api.getVendorServices(token);
    setServices(list);
    if (selectedId) {
      await loadServiceDetail(selectedId);
      return;
    }
    if (!selectedService.id && list.length > 0) {
      await loadServiceDetail(list[0].id);
    }
    if (list.length === 0) {
      setSelectedService(emptyService);
    }
  }

  async function loadServiceDetail(serviceId) {
    const detail = await api.getVendorService(serviceId, token);
    setSelectedService({
      ...detail,
      price: detail.price,
      pricingOptions: detail.pricingOptions || [],
      materialOptions: detail.materialOptions || []
    });
    setPricingForm(emptyPricing);
    setMaterialForm(emptyMaterial);
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const list = await api.getVendorServices(token);
        if (!active) return;
        setServices(list);
        if (list.length > 0) {
          const detail = await api.getVendorService(list[0].id, token);
          if (active) {
            setSelectedService({ ...detail, pricingOptions: detail.pricingOptions || [], materialOptions: detail.materialOptions || [] });
          }
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

  const isDraft = !selectedService.id;
  const selectedSummary = useMemo(() => services.find((item) => item.id === selectedService.id) || null, [services, selectedService.id]);

  async function handleSaveService(event) {
    event.preventDefault();
    try {
      setSaving(true);
      setError("");
      const payload = servicePayload(selectedService);
      const response = isDraft
        ? await api.createVendorService(payload, token)
        : await api.updateVendorService(selectedService.id, payload, token);
      setNotice(isDraft ? "Service created." : "Service updated.");
      await loadServices(response.id);
    } catch (err) {
      setError(err.message);
      setNotice("");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteService() {
    if (!selectedService.id) {
      setSelectedService(emptyService);
      return;
    }
    if (!window.confirm(`Delete ${selectedService.title}?`)) return;
    try {
      await api.deleteVendorService(selectedService.id, token);
      setNotice("Service deleted.");
      setError("");
      setSelectedService(emptyService);
      await loadServices();
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handlePricingSubmit(event) {
    event.preventDefault();
    if (!selectedService.id) {
      setError("Create the service first, then manage pricing options.");
      return;
    }
    try {
      const payload = {
        label: pricingForm.label,
        description: pricingForm.description || null,
        price: Number(pricingForm.price),
        materialIncluded: Boolean(pricingForm.materialIncluded),
        defaultOption: Boolean(pricingForm.defaultOption),
        sortOrder: Number(pricingForm.sortOrder || 0)
      };
      if (pricingForm.id) {
        await api.updateVendorPricingOption(pricingForm.id, payload, token);
        setNotice("Pricing option updated.");
      } else {
        await api.createVendorPricingOption(selectedService.id, payload, token);
        setNotice("Pricing option added.");
      }
      await loadServiceDetail(selectedService.id);
      await loadServices(selectedService.id);
      setPricingForm(emptyPricing);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleDeletePricing(optionId) {
    try {
      await api.deleteVendorPricingOption(optionId, token);
      setNotice("Pricing option deleted.");
      await loadServiceDetail(selectedService.id);
      await loadServices(selectedService.id);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handlePricingReorder() {
    try {
      await api.reorderVendorPricingOptions({
        items: selectedService.pricingOptions.map((option) => ({ id: option.id, sortOrder: Number(option.sortOrder || 0) }))
      }, token);
      setNotice("Pricing option order saved.");
      await loadServiceDetail(selectedService.id);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleMaterialSubmit(event) {
    event.preventDefault();
    if (!selectedService.id) {
      setError("Create the service first, then manage material options.");
      return;
    }
    try {
      const payload = {
        name: materialForm.name,
        description: materialForm.description || null,
        priceAdjustment: Number(materialForm.priceAdjustment || 0),
        defaultSelected: Boolean(materialForm.defaultSelected),
        sortOrder: Number(materialForm.sortOrder || 0)
      };
      if (materialForm.id) {
        await api.updateVendorMaterialOption(materialForm.id, payload, token);
        if (materialForm.active !== undefined) {
          await api.updateVendorMaterialOptionStatus(materialForm.id, { active: materialForm.active }, token);
        }
        setNotice("Material option updated.");
      } else {
        await api.createVendorMaterialOption(selectedService.id, payload, token);
        setNotice("Material option added.");
      }
      await loadServiceDetail(selectedService.id);
      await loadServices(selectedService.id);
      setMaterialForm(emptyMaterial);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleMaterialStatus(optionId, active) {
    try {
      await api.updateVendorMaterialOptionStatus(optionId, { active }, token);
      setNotice("Material option status updated.");
      await loadServiceDetail(selectedService.id);
      await loadServices(selectedService.id);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  async function handleMaterialReorder() {
    try {
      await api.reorderVendorMaterialOptions({
        items: selectedService.materialOptions.map((option) => ({ id: option.id, sortOrder: Number(option.sortOrder || 0) }))
      }, token);
      setNotice("Material option order saved.");
      await loadServiceDetail(selectedService.id);
    } catch (err) {
      setError(err.message);
      setNotice("");
    }
  }

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading services...</p></section>;
  }

  return (
    <div className="vendor-services-grid">
      <section className="card vendor-panel vendor-service-list-panel">
        <div className="section-headline compact-headline">
          <h2>My services</h2>
          <p>Create, edit, and manage only the listings you own.</p>
        </div>
        <button className="primary-button vendor-add-button" type="button" onClick={() => { setSelectedService(emptyService); setPricingForm(emptyPricing); setMaterialForm(emptyMaterial); }}>
          <Plus size={16} /> New service
        </button>
        <div className="vendor-list">
          {services.length === 0 && <p className="subtle">No services yet. Start with your first listing.</p>}
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={`vendor-service-list-item ${selectedService.id === service.id ? "active" : ""}`}
              onClick={() => loadServiceDetail(service.id)}
            >
              <div>
                <strong>{service.title}</strong>
                <span>{service.category}</span>
              </div>
              <strong>{formatCurrency(service.price)}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="vendor-services-main">
        <section className="card vendor-panel">
          <div className="section-headline compact-headline">
            <h2>{isDraft ? "Create service" : `Edit service${selectedSummary ? `: ${selectedSummary.title}` : ""}`}</h2>
            <p>Base service details stay here. Pricing and material rules are managed below.</p>
          </div>
          {error && <p className="error">{error}</p>}
          {notice && <p className="notice">{notice}</p>}
          <form className="vendor-form-grid" onSubmit={handleSaveService}>
            <label>Title<input value={selectedService.title} onChange={(event) => setSelectedService((current) => ({ ...current, title: event.target.value }))} /></label>
            <label>Category<select value={selectedService.category} onChange={(event) => setSelectedService((current) => ({ ...current, category: event.target.value }))}>{categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label>Description<textarea value={selectedService.description} onChange={(event) => setSelectedService((current) => ({ ...current, description: event.target.value }))} /></label>
            <label>Base price<input type="number" min="0" step="0.01" value={selectedService.price} onChange={(event) => setSelectedService((current) => ({ ...current, price: event.target.value }))} /></label>
            <label>Thumbnail image URL or base64<textarea value={selectedService.thumbnailImage || ""} onChange={(event) => setSelectedService((current) => ({ ...current, thumbnailImage: event.target.value }))} /></label>
            <div className="vendor-form-actions">
              <button className="primary-button" type="submit" disabled={saving}>{saving ? "Saving..." : isDraft ? "Create service" : "Save service"}</button>
              <button className="ghost-button" type="button" onClick={handleDeleteService}><Trash2 size={16} /> {isDraft ? "Clear draft" : "Delete service"}</button>
            </div>
          </form>
        </section>

        <section className="vendor-two-column">
          <section className="card vendor-panel">
            <div className="section-headline compact-headline">
              <h2>Pricing options</h2>
              <p>Add, edit, delete, and reorder service pricing modes.</p>
            </div>
            <form className="vendor-form-grid compact-form" onSubmit={handlePricingSubmit}>
              <label>Label<input value={pricingForm.label} onChange={(event) => setPricingForm((current) => ({ ...current, label: event.target.value }))} /></label>
              <label>Price<input type="number" min="0.01" step="0.01" value={pricingForm.price} onChange={(event) => setPricingForm((current) => ({ ...current, price: event.target.value }))} /></label>
              <label>Description<textarea value={pricingForm.description} onChange={(event) => setPricingForm((current) => ({ ...current, description: event.target.value }))} /></label>
              <label>Sort order<input type="number" value={pricingForm.sortOrder} onChange={(event) => setPricingForm((current) => ({ ...current, sortOrder: event.target.value }))} /></label>
              <label className="builder-inline-check"><input type="checkbox" checked={pricingForm.materialIncluded} onChange={(event) => setPricingForm((current) => ({ ...current, materialIncluded: event.target.checked }))} />Material included</label>
              <label className="builder-inline-check"><input type="checkbox" checked={pricingForm.defaultOption} onChange={(event) => setPricingForm((current) => ({ ...current, defaultOption: event.target.checked }))} />Default option</label>
              <button className="primary-button" type="submit">{pricingForm.id ? "Update option" : "Add option"}</button>
            </form>
            <div className="vendor-list">
              {(selectedService.pricingOptions || []).map((option) => (
                <article className="vendor-list-row stacked" key={option.id}>
                  <div className="vendor-list-row-top">
                    <div>
                      <strong>{option.label}</strong>
                      <p className="subtle">{formatCurrency(option.price)} {option.defaultOption ? "• Default" : ""}</p>
                    </div>
                    <div className="vendor-row-actions">
                      <button className="ghost-button small" type="button" onClick={() => setPricingForm({ ...option })}>Edit</button>
                      <button className="ghost-button small" type="button" onClick={() => handleDeletePricing(option.id)}>Delete</button>
                    </div>
                  </div>
                  <label>Sort order<input type="number" value={option.sortOrder} onChange={(event) => setSelectedService((current) => ({ ...current, pricingOptions: current.pricingOptions.map((item) => item.id === option.id ? { ...item, sortOrder: event.target.value } : item) }))} /></label>
                </article>
              ))}
            </div>
            {selectedService.pricingOptions?.length > 0 && <button className="ghost-button" type="button" onClick={handlePricingReorder}>Save pricing order</button>}
          </section>

          <section className="card vendor-panel">
            <div className="section-headline compact-headline">
              <h2>Material options</h2>
              <p>Manage add-ons, default selections, active state, and sort order.</p>
            </div>
            <form className="vendor-form-grid compact-form" onSubmit={handleMaterialSubmit}>
              <label>Name<input value={materialForm.name} onChange={(event) => setMaterialForm((current) => ({ ...current, name: event.target.value }))} /></label>
              <label>Price adjustment<input type="number" min="0" step="0.01" value={materialForm.priceAdjustment} onChange={(event) => setMaterialForm((current) => ({ ...current, priceAdjustment: event.target.value }))} /></label>
              <label>Description<textarea value={materialForm.description} onChange={(event) => setMaterialForm((current) => ({ ...current, description: event.target.value }))} /></label>
              <label>Sort order<input type="number" value={materialForm.sortOrder} onChange={(event) => setMaterialForm((current) => ({ ...current, sortOrder: event.target.value }))} /></label>
              <label className="builder-inline-check"><input type="checkbox" checked={materialForm.defaultSelected} onChange={(event) => setMaterialForm((current) => ({ ...current, defaultSelected: event.target.checked }))} />Default selected</label>
              <label className="builder-inline-check"><input type="checkbox" checked={materialForm.active} onChange={(event) => setMaterialForm((current) => ({ ...current, active: event.target.checked }))} />Active</label>
              <button className="primary-button" type="submit">{materialForm.id ? "Update option" : "Add option"}</button>
            </form>
            <div className="vendor-list">
              {(selectedService.materialOptions || []).map((option) => (
                <article className="vendor-list-row stacked" key={option.id}>
                  <div className="vendor-list-row-top">
                    <div>
                      <strong>{option.name}</strong>
                      <p className="subtle">+{formatCurrency(option.priceAdjustment)} {option.active ? "• Active" : "• Inactive"}</p>
                    </div>
                    <div className="vendor-row-actions">
                      <button className="ghost-button small" type="button" onClick={() => setMaterialForm({ ...option })}>Edit</button>
                      <button className="ghost-button small" type="button" onClick={() => handleMaterialStatus(option.id, !option.active)}>{option.active ? "Deactivate" : "Activate"}</button>
                    </div>
                  </div>
                  <label>Sort order<input type="number" value={option.sortOrder} onChange={(event) => setSelectedService((current) => ({ ...current, materialOptions: current.materialOptions.map((item) => item.id === option.id ? { ...item, sortOrder: event.target.value } : item) }))} /></label>
                </article>
              ))}
            </div>
            {selectedService.materialOptions?.length > 0 && <button className="ghost-button" type="button" onClick={handleMaterialReorder}>Save material order</button>}
          </section>
        </section>
      </section>
    </div>
  );
}
