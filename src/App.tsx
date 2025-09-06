import { Suspense, lazy, useState } from 'react';

const HeroSection = lazy(() => import('./components/HeroSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const WhoWeHelp = lazy(() => import('./components/ScrollStackSection'));
const VariableProximitySection = lazy(() => import('./components/VariableProximitySection'));
const FooterSection = lazy(() => import('./components/FooterSection'));
const AcknowledgmentModal = lazy(() => import('./components/AcknowledgmentModal'));
const PoliciesModal = lazy(() => import('./components/PoliciesModal'));


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openPolicies = () => setIsPoliciesOpen(true);
  const closePolicies = () => setIsPoliciesOpen(false);

  return (
    <main className="bg-dark w-full min-h-screen m-0 p-0 relative overflow-x-hidden">
      <div style={{ background: '#F8F7F2' }}>
        <Suspense fallback={null}>
          <HeroSection />
        </Suspense>
      </div>
      <div style={{ background: '#000510' }}>
        <Suspense fallback={null}>
          <ContactSection />
          <PortfolioSection />
        </Suspense>
      </div>
      <div style={{ background: '#000510', marginTop: 'clamp(1rem, 4vw, 3rem)' }}>
        <Suspense fallback={null}>
          <WhoWeHelp />
        </Suspense>
      </div>
      <div style={{ background: '#000510' }}>
        <Suspense fallback={null}>
          <VariableProximitySection 
            text="Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future."
          />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <FooterSection onOpenModal={openModal} onOpenPolicies={openPolicies} />
      </Suspense>
      
      {/* Acknowledgment Modal */}
      <Suspense fallback={null}>
        <AcknowledgmentModal isOpen={isModalOpen} onClose={closeModal} />
      </Suspense>
      {/* Policies Modal */}
      <Suspense fallback={null}>
        <PoliciesModal isOpen={isPoliciesOpen} onClose={closePolicies} />
      </Suspense>
    </main>
  )
}

export default App; 