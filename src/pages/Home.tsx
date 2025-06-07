// pages/Home.js
import Hero from '../components/Hero';
import About from './About';
import ArtistSection from '../components/ArtistSection';
import ServicesSection from '../components/ServicesSection'; // or use a section component
import Gallery from '../components/Gallery';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ArtistSection />
      <ServicesSection />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;
