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
  getServices: (params) => request(`/services${toQueryString(params)}`),
  getMyServices: (token) => request("/services/mine", { token }),
  createService: (payload, token) => request("/services", { method: "POST", body: payload, token }),
  updateService: (id, payload, token) => request(`/services/${id}`, { method: "PUT", body: payload, token }),
  createOrder: (payload, token) => request("/orders", { method: "POST", body: payload, token }),
  getOrders: (token) => request("/orders", { token }),
  updateOrderStatus: (id, payload, token) => request(`/orders/${id}/status`, { method: "PUT", body: payload, token }),
  createPayment: (payload, token) => request("/payments/create", { method: "POST", body: payload, token }),
  releasePayment: (payload, token) => request("/payments/release", { method: "POST", body: payload, token }),
  createReview: (payload, token) => request("/reviews", { method: "POST", body: payload, token }),
  getUsers: (token) => request("/admin/users", { token }),
  approveVendor: (userId, token) => request(`/admin/vendors/${userId}/approve`, { method: "PATCH", token }),
  getTransactions: (token) => request("/admin/transactions", { token }),
  getVendorAnalytics: (token) => request("/vendors/me/analytics", { token }),
  getSavedServices: (token) => request("/clients/me/saved-services", { token }),
  getSavedServiceIds: (token) => request("/clients/me/saved-service-ids", { token }),
  saveService: (serviceId, token) => request(`/clients/me/saved-services/${serviceId}`, { method: "POST", token }),
  unsaveService: (serviceId, token) => request(`/clients/me/saved-services/${serviceId}`, { method: "DELETE", token })
};
