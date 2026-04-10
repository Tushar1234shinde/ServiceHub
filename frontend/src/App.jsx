import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/home/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import ClientDashboardPage from "./pages/ClientDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import LoginPage from "./pages/LoginPage";
import MarketplacePage from "./pages/MarketplacePage";
import RegisterPage from "./pages/RegisterPage";
import VendorProfilePage from "./pages/VendorProfilePage";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import VendorLayout from "./pages/vendor/VendorLayout";
import VendorOverviewPage from "./pages/vendor/VendorOverviewPage";
import VendorProfileSettingsPage from "./pages/vendor/VendorProfileSettingsPage";
import VendorServicesPage from "./pages/vendor/VendorServicesPage";
import VendorOrdersPage from "./pages/vendor/VendorOrdersPage";
import VendorEarningsPage from "./pages/vendor/VendorEarningsPage";
import VendorGalleryPage from "./pages/vendor/VendorGalleryPage";
import { getDefaultPathForUser } from "./roleRoutes";

export default function App() {
  const { user } = useAuth();
  const location = useLocation();
  const landingPath = getDefaultPathForUser(user);
  const isWorkspace = location.pathname.startsWith("/vendor") || location.pathname.startsWith("/admin");

  return (
    <div className="app-shell">
      {!isWorkspace && <Navbar />}
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vendors/:vendorId" element={<VendorProfilePage />} />
        <Route path="/login" element={user ? <Navigate to={landingPath} replace /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to={landingPath} replace /> : <RegisterPage />} />
        <Route
          path="/client"
          element={
            <ProtectedRoute roles={["CLIENT"]}>
              <ClientDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client/chat"
          element={
            <ProtectedRoute roles={["CLIENT"]}>
              <ChatPage workspace="client" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navigate to={landingPath} replace />
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
          <Route path="gallery" element={<VendorGalleryPage />} />
          <Route path="chat" element={<ChatPage workspace="vendor" />} />
          <Route path="orders" element={<VendorOrdersPage />} />
          <Route path="earnings" element={<VendorEarningsPage />} />
        </Route>
      </Routes>
      {!isWorkspace && <Footer />}
    </div>
  );
}
