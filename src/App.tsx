import ParticleBackground from './components/ParticleBackground';
import ExitIntentPopup from './components/ExitIntentPopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <ParticleBackground />
            <ExitIntentPopup />
            <Navbar />

            <Home />
            <About />
            <Services />
            <Contact />

            <Footer />
        </div>
    )
}

export default App
