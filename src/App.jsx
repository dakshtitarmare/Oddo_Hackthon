import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { InventoryProvider } from './context/InventoryContext';
import LoginSignup from './pages/Auth/LoginSignup';
import OtpVerification from './pages/Auth/OtpVerification';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';
import Profile from './pages/Profile/Profile';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <InventoryProvider>
          <Routes>
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/otp" element={<OtpVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>
            </Route>
          </Routes>
        </InventoryProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;