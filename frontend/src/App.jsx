import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Speakers from './components/Speakers'
import HowItWorks from './components/HowItWorks'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
    
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#071a2f] text-white">
        <Hero />
        <Features />
        <Speakers />
        <HowItWorks />
        <Events />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
