import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import { FaInstagram, FaEye } from 'react-icons/fa';
import { artistsData } from '@/config/artistData';

const LogoCircle = ({ className = '' }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`h-32 w-32 md:h-48 md:w-48 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-4 border-white/30 bg-white ${className}`} 
  />
);

const cardRotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ArtistSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-2.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      
      {/* Floating orbs for modern effect */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between mb-20"
        >
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-tight deadwood-font relative"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                MEET OUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                TEAM
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-left"
                style={{ width: '100%' }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-gray-300 max-w-md"
            >
              Meet our talented artists who bring your vision to life with precision and creativity.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <LogoCircle />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-green-400/30 rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {artistsData.map((artist, idx) => (
            <motion.div
              key={artist.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className={`group relative transform ${cardRotations[idx % cardRotations.length]} transition-all duration-500`}
            >
              {/* Glass morphism card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social media icon */}
                <motion.a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 left-4 z-20 text-white/80 hover:text-green-400 text-2xl transition-colors duration-300 bg-black/30 p-2 rounded-full backdrop-blur-sm"
                >
                  <FaInstagram />
                </motion.a>

                {/* Artist image with overlay */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating view profile button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 shadow-lg"
                    >
                      <FaEye className="text-white text-2xl" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <CardContent className="p-6 relative">
                  <motion.h3 
                    className="text-24px font-bold uppercase text-white mb-2 deadwood-font tracking-wider"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {artist.name}
                  </motion.h3>
                  <p className="text-1xl font-medium uppercase text-green-400 tracking-widest mb-4">
                    {artist.specialty}
                    
                  </p>
                  
                  {/* CTA Button */}
                   <Link to={`/artist/${artist.id}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold uppercase text-sm rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg border border-green-400/30"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Portfolio
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </Link>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default ArtistSection;
