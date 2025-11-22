import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Auth Pages
import LoginSignup from "./pages/Auth/LoginSignup";
// import OtpVerification from "./pages/Auth/OtpVerification";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import ResetPassword from "./pages/Auth/ResetPassword";

// Main Pages
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Inventory from "./pages/Inventory/Inventory";
// import Profile from "./pages/Profile/Profile";
// import Checkout from "./pages/Checkout/Checkout";

// Protected Route
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* ---------- AUTH ROUTES ---------- */}
        <Route path="/" element={<LoginSignup />} />
        {/* <Route path="/otp" element={<OtpVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}

        {/* ---------- MAIN APP (Protected + With Sidebar) ---------- */}
         <Route 
          path="/app" 
          element={
            <MainLayout />
            // <ProtectedRoute>
            // </ProtectedRoute>
            }
            >

          {/* Nested routes inside layout */}
            {/*
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          */}

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
