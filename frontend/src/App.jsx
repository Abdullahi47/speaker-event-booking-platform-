import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#071a2f] text-white">
        <Hero />
        <Features />
        <Events />
      </main>
      <Footer />
    </>
  )
}

export default App
