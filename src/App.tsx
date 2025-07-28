import HeroSection from './components/HeroSection'
import ContactSection from './components/ContactSection'
import PortfolioSection from './components/PortfolioSection'
import VariableProximitySection from './components/VariableProximitySection'

function App() {
  return (
    <main className="bg-dark w-full min-h-screen m-0 p-0 relative overflow-x-hidden">
      <div style={{ background: '#F8F7F2' }}>
        <HeroSection />
      </div>
      <div style={{ background: '#000510' }}>
        <ContactSection />
        <PortfolioSection />
      </div>
      <VariableProximitySection 
        text="Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future."
        color="#F9F7F1"
        backgroundColor="#000510"
      />
    </main>
  )
}

export default App 