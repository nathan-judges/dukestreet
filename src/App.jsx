import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
      <main className="w-full flex-grow pt-24 md:pt-[96px]">
        <Routes />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App; 