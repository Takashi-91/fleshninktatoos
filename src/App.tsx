import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import Contact from './pages/Contact';
import Services from './components/ServicesSection';
import ArtistPortfolio from './pages/ArtistPortfolio';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import Cousel from './components/Coursel';
import Dashboard from './dashboard layouts/dashboard';
import AuthPage from './dashboard layouts/authpage';


function App() {

  const location = useLocation();

  const hideContent =["/dashboard", "/auth"].includes(location.pathname);
  return (
    <>
      {!hideContent && <Navbar />}
      <ScrollToTop />
      {/* Main content */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
          
        {/* Separate routes for each section */}
        <Route path="/about" element={<About />} />
       <Route path ="/coursel" element={<Cousel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic artist portfolio page */}
        <Route path="/artist/:id" element={<ArtistPortfolio />} />
        <Route path="/auth" element= {<AuthPage />} />
        <Route path="/dashboard" element= {<Dashboard/>} />
        </Routes>
       {!hideContent &&<Footer />}
    </>
  );
}

export default App;
