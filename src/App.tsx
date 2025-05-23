import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './pages/Contact';
import ArtistSection from './components/ArtistSection';
import ServicesSection from './components/ServicesSection';
import ArtistPortfolio from './pages/ArtistPortfolio';
import About from './pages/About';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ArtistSection />
            <About/>
            <ServicesSection />
            <Gallery/>
            <Contact/>
          </>
        } />
        <Route path="/artist/:id" element={<ArtistPortfolio />} />
      </Routes>
    </>
  );
}

export default App;
