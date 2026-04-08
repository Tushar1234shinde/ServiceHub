const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function authHeaders(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function toQueryString(params = {}) {
  const entries = Object.entries(params).filter(([, value]) => value !== undefined && value !== null && `${value}`.trim() !== "");
  if (entries.length === 0) {
    return "";
  }
  return `?${new URLSearchParams(entries).toString()}`;
}

async function request(path, { method = "GET", body, token } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(token)
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Request failed");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  register: (payload) => request("/auth/register", { method: "POST", body: payload }),
  login: (payload) => request("/auth/login", { method: "POST", body: payload }),
  refresh: (payload) => request("/auth/refresh", { method: "POST", body: payload }),
  getHomepageData: () => request("/marketplace/homepage"),
  getServices: (params) => request(`/services${toQueryString(params)}`),
  getMyServices: (token) => request("/services/mine", { token }),
  createService: (payload, token) => request("/services", { method: "POST", body: payload, token }),
  updateService: (id, payload, token) => request(`/services/${id}`, { method: "PUT", body: payload, token }),
  getVendorProfile: (vendorId) => request(`/vendors/public/${vendorId}`),
  getMyVendorWorks: (token) => request("/vendors/me/works", { token }),
  createVendorWork: (payload, token) => request("/vendors/me/works", { method: "POST", body: payload, token }),
  updateVendorWork: (workId, payload, token) => request(`/vendors/me/works/${workId}`, { method: "PUT", body: payload, token }),
  deleteVendorWork: (workId, token) => request(`/vendors/me/works/${workId}`, { method: "DELETE", token }),
  getMyVendorReviews: (token) => request("/vendors/me/reviews", { token }),
  createOrder: (payload, token) => request("/orders", { method: "POST", body: payload, token }),
  getOrders: (token) => request("/orders", { token }),
  updateOrderStatus: (id, payload, token) => request(`/orders/${id}/status`, { method: "PUT", body: payload, token }),
  createPayment: (payload, token) => request("/payments/create", { method: "POST", body: payload, token }),
  releasePayment: (payload, token) => request("/payments/release", { method: "POST", body: payload, token }),
  createReview: (payload, token) => request("/reviews", { method: "POST", body: payload, token }),
  replyToReview: (reviewId, payload, token) => request(`/reviews/${reviewId}/reply`, { method: "POST", body: payload, token }),
  getUsers: (token) => request("/admin/users", { token }),
  approveVendor: (userId, token) => request(`/admin/vendors/${userId}/approve`, { method: "PATCH", token }),
  getTransactions: (token) => request("/admin/transactions", { token }),
  getVendorAnalytics: (token) => request("/vendors/me/analytics", { token }),
  getSavedServices: (token) => request("/clients/me/saved-services", { token }),
  getSavedServiceIds: (token) => request("/clients/me/saved-service-ids", { token }),
  saveService: (serviceId, token) => request(`/clients/me/saved-services/${serviceId}`, { method: "POST", token }),
  unsaveService: (serviceId, token) => request(`/clients/me/saved-services/${serviceId}`, { method: "DELETE", token }),
  getVendorDashboard: (token) => request("/api/vendor/dashboard", { token }),
  getVendorMe: (token) => request("/api/vendor/me", { token }),
  updateVendorMe: (payload, token) => request("/api/vendor/me", { method: "PUT", body: payload, token }),
  getVendorServices: (token) => request("/api/vendor/services", { token }),
  getVendorService: (serviceId, token) => request(`/api/vendor/services/${serviceId}`, { token }),
  createVendorService: (payload, token) => request("/api/vendor/services", { method: "POST", body: payload, token }),
  updateVendorService: (serviceId, payload, token) => request(`/api/vendor/services/${serviceId}`, { method: "PUT", body: payload, token }),
  deleteVendorService: (serviceId, token) => request(`/api/vendor/services/${serviceId}`, { method: "DELETE", token }),
  getVendorPricingOptions: (serviceId, token) => request(`/api/vendor/services/${serviceId}/pricing-options`, { token }),
  createVendorPricingOption: (serviceId, payload, token) => request(`/api/vendor/services/${serviceId}/pricing-options`, { method: "POST", body: payload, token }),
  updateVendorPricingOption: (optionId, payload, token) => request(`/api/vendor/pricing-options/${optionId}`, { method: "PUT", body: payload, token }),
  deleteVendorPricingOption: (optionId, token) => request(`/api/vendor/pricing-options/${optionId}`, { method: "DELETE", token }),
  reorderVendorPricingOptions: (payload, token) => request("/api/vendor/pricing-options/reorder", { method: "PATCH", body: payload, token }),
  getVendorMaterialOptions: (serviceId, token) => request(`/api/vendor/services/${serviceId}/material-options`, { token }),
  createVendorMaterialOption: (serviceId, payload, token) => request(`/api/vendor/services/${serviceId}/material-options`, { method: "POST", body: payload, token }),
  updateVendorMaterialOption: (optionId, payload, token) => request(`/api/vendor/material-options/${optionId}`, { method: "PUT", body: payload, token }),
  updateVendorMaterialOptionStatus: (optionId, payload, token) => request(`/api/vendor/material-options/${optionId}/status`, { method: "PATCH", body: payload, token }),
  reorderVendorMaterialOptions: (payload, token) => request("/api/vendor/material-options/reorder", { method: "PATCH", body: payload, token }),
  getVendorOrders: (params, token) => request(`/api/vendor/orders${toQueryString(params)}`, { token }),
  getVendorOrder: (orderId, token) => request(`/api/vendor/orders/${orderId}`, { token }),
  updateVendorOrderStatus: (orderId, payload, token) => request(`/api/vendor/orders/${orderId}/status`, { method: "PATCH", body: payload, token }),
  updateVendorOrderNote: (orderId, payload, token) => request(`/api/vendor/orders/${orderId}/note`, { method: "PATCH", body: payload, token }),
  submitVendorWork: (orderId, payload, token) => request(`/api/vendor/orders/${orderId}/work-submission`, { method: "PATCH", body: payload, token }),
  getVendorEarnings: (token) => request("/api/vendor/earnings", { token })
};
