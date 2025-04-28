import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen bg-transparent overflow-hidden">

       {/*  */}
      {/* Content */}
      <div className="relative h-full flex flex-col md:flex-row items-center justify-center px-4 space-y-8 md:space-y-0 md:space-x-8">
              {/* Background Pattern */}
      <div className="h-60 w-60 md:h-52 md:w-52 bg-[url('/imgs/logo-2.png')] bg-cover bg-center opacity-2"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl md:text-8xl font-bold mb-6 text-black">
            FleshInk<span className="text-green-600">Tattoos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Where Art Meets Skin
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Book a Session
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero; 