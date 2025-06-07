import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const images = [
  { id: 1, src: '/imgs/pic1.jpg' },
  { id: 2, src: '/imgs/pic2.jpg' },
  { id: 3, src: '/imgs/pic3.jpg' },
  { id: 4, src: '/imgs/pic4.jpg' },
  { id: 5, src: '/imgs/pic5.jpg' },
  { id: 6, src: '/imgs/pic6.jpg' },
  { id: 7, src: '/imgs/pic7.jpg' },
  { id: 8, src: '/imgs/pic8.jpg' },
  { id: 9, src: '/imgs/pic9.jpg' },
  { id: 10, src: '/imgs/pic10.jpg' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-black min-h-screen relative" id="gallery">
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl md:mr-[600px] md:mb-20 font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              GALLERY
            </motion.span>
            <br />
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
          {images.map((image) => (
            <motion.div
              key={image.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}
                onClick={() => setSelectedImage(image.id)}
                className="rounded-xl overflow-hidden bg-white/10 shadow-md border border-white/20 cursor-pointer transform transition-all duration-300"
              >
                <motion.img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={images.find(img => img.id === selectedImage)?.src}
                alt={`Gallery ${selectedImage}`}
                className="w-full h-auto lg:h-1/2 rounded-lg shadow-2xl"
              />
              <motion.button
                  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 
