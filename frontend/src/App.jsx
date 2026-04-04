import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/home/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import MarketplacePage from "./pages/MarketplacePage";
import RegisterPage from "./pages/RegisterPage";
import VendorProfilePage from "./pages/VendorProfilePage";

export default function App() {
  const { user } = useAuth();
  const landingPath = user?.role === "CLIENT" ? "/" : "/dashboard";

  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/vendors/:vendorId" element={<VendorProfilePage />} />
        <Route path="/login" element={user ? <Navigate to={landingPath} replace /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to={landingPath} replace /> : <RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
