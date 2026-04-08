import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/home/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import MarketplacePage from "./pages/MarketplacePage";
import RegisterPage from "./pages/RegisterPage";
import VendorProfilePage from "./pages/VendorProfilePage";
import VendorLayout from "./pages/vendor/VendorLayout";
import VendorOverviewPage from "./pages/vendor/VendorOverviewPage";
import VendorProfileSettingsPage from "./pages/vendor/VendorProfileSettingsPage";
import VendorServicesPage from "./pages/vendor/VendorServicesPage";
import VendorOrdersPage from "./pages/vendor/VendorOrdersPage";
import VendorEarningsPage from "./pages/vendor/VendorEarningsPage";

export default function App() {
  const { user } = useAuth();
  const location = useLocation();
  const landingPath = user?.role === "VENDOR" ? "/vendor" : user?.role === "CLIENT" ? "/" : "/dashboard";
  const isVendorWorkspace = location.pathname.startsWith("/vendor");

  return (
    <div className="app-shell">
      {!isVendorWorkspace && <Navbar />}
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/vendors/:vendorId" element={<VendorProfilePage />} />
        <Route path="/login" element={user ? <Navigate to={landingPath} replace /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to={landingPath} replace /> : <RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {user?.role === "VENDOR" ? <Navigate to="/vendor" replace /> : <DashboardPage />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor"
          element={
            <ProtectedRoute roles={["VENDOR"]}>
              <VendorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<VendorOverviewPage />} />
          <Route path="profile" element={<VendorProfileSettingsPage />} />
          <Route path="services" element={<VendorServicesPage />} />
          <Route path="orders" element={<VendorOrdersPage />} />
          <Route path="earnings" element={<VendorEarningsPage />} />
        </Route>
      </Routes>
      {!isVendorWorkspace && <Footer />}
    </div>
  );
}
