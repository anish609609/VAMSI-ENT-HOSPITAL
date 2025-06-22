import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';

// Floating Admin Login Button
// Appears on all public pages, not on /admin or dashboard
const AdminLoginButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide button on /admin route
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <button
      aria-label="Admin Login"
      className="fixed z-50 right-4 bottom-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center px-5 py-3 font-semibold text-base transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      onClick={() => navigate('/admin')}
    >
      <Lock className="w-5 h-5 mr-2" aria-hidden="true" />
      Admin Login
    </button>
  );
};

export default AdminLoginButton; 