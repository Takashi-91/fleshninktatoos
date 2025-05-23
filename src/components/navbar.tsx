import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/button';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
     className={`fixed w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-white shadow-md' : 'bg-white md:bg-transparent'
}`}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="h-14 w-14 bg-[url('/imgs/logo-3.png')] bg-cover bg-center" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-1xl font-bold text-black
            ${
        scrolled ? 'text-black' : 'md:text-white'
      }`}
            >
              Flesh-n-Ink<span className="text-green-600"> Tattoo Studio</span>
            </motion.div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-tattoo link-hover font-medium
              ${
        scrolled ? 'text-black' : 'md:text-white'
      }`}
      >
                {link.name}
              </Link>
            ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Book Now
          </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-black hover:text-tattoo"
                

                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
            
          
    </motion.nav>
  );
};

export default Navbar;
