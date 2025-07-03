import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#hero' },
    { name: 'About', path: '/#about' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white md:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3">
            <motion.div
              className="relative h-10 w-10 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-2 bg-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            <motion.div
              className={`text-1xl font-bold ${scrolled ? 'text-black' : 'md:text-white'}`}
            >
              Flesh-n-Ink<span className="text-green-600"> Tattoo Studio</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredLink(link.name)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <a
                  href={link.path}
                  className={`relative font-medium transition-colors duration-300 hover:text-green-600 ${
                    scrolled ? 'text-black' : 'md:text-white'
                  }`}
                >
                  {link.name}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="hover-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600/50"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden pt-4 pb-2"
              
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.path}
                    className="block py-2 px-4 rounded-lg font-semibold text-black hover:text-green-600 hover:bg-green-50 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
