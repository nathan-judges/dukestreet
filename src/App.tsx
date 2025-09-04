import { Suspense, lazy, useState } from 'react';

const HeroSection = lazy(() => import('./components/HeroSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const WhoWeHelp = lazy(() => import('./components/ScrollStackSection'));
const VariableProximitySection = lazy(() => import('./components/VariableProximitySection'));
const FooterSection = lazy(() => import('./components/FooterSection'));
const AcknowledgmentModal = lazy(() => import('./components/AcknowledgmentModal'));

function Spinner() {
  return (
    <div className="spinner" aria-label="Loading" />
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-dark w-full min-h-screen m-0 p-0 relative overflow-x-hidden">
      <div style={{ background: '#F8F7F2' }}>
        <Suspense fallback={<div className="preloader"><Spinner /></div>}>
          <HeroSection />
        </Suspense>
      </div>
      <div style={{ background: '#000510' }}>
        <Suspense fallback={<div className="preloader"><Spinner /></div>}>
          <ContactSection />
          <PortfolioSection />
        </Suspense>
      </div>
      <div style={{ background: '#000510' }}>
        <Suspense fallback={<div className="preloader"><Spinner /></div>}>
          <WhoWeHelp />
        </Suspense>
      </div>
      <div style={{ background: '#000510' }}>
        <Suspense fallback={<div className="preloader"><Spinner /></div>}>
          <VariableProximitySection 
            text="Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future."
          />
        </Suspense>
      </div>
      <Suspense fallback={<div className="preloader"><Spinner /></div>}>
        <FooterSection onOpenModal={openModal} />
      </Suspense>
      
      {/* Acknowledgment Modal */}
      <Suspense fallback={null}>
        <AcknowledgmentModal isOpen={isModalOpen} onClose={closeModal} />
      </Suspense>
    </main>
  )
}

export default App; 