import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import Contact from './pages/Contact';
import Services from './components/ServicesSection';
import ArtistPortfolio from './pages/ArtistPortfolio';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';



function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {/* Main content */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Separate routes for each section */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic artist portfolio page */}
        <Route path="/artist/:id" element={<ArtistPortfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
