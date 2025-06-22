import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginButton from './components/AdminLoginButton';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleAdminLogin = (credentials) => {
    // Simple authentication - in real app, this would be server-side
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Routes>
          <Route path="/admin" element={
            isAdminLoggedIn ? 
              <AdminDashboard onLogout={handleAdminLogout} /> : 
              <AdminLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/" element={
            <>
              <Navbar />
              <main id="main-content" role="main">
                <Hero />
                <Services />
                <Doctors />
                <About />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
              <AdminLoginButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 