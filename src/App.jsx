import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/common/Footer';
import Routes from './Routes';

// Create a wrapper component to access useLocation
const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/' || location.pathname === '/contact';

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="w-full flex-grow">
        <Routes />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 