import HeroSection from './components/HeroSection'
import ContactSection from './components/ContactSection'
import PortfolioSection from './components/PortfolioSection'

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
    </main>
  )
}

export default App 