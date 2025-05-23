import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/gallery/tattoo1.jpg', category: 'TRADITIONAL' },
  { id: 2, src: '/gallery/tattoo2.jpg', category: 'REALISM' },
  { id: 3, src: '/gallery/tattoo3.jpg', category: 'MINIMALIST' },
  { id: 4, src: '/gallery/tattoo4.jpg', category: 'GEOMETRIC' },
  { id: 5, src: '/gallery/tattoo5.jpg', category: 'WATERCOLOR' },
  { id: 6, src: '/gallery/tattoo6.jpg', category: 'BLACKWORK' },
];

const cardRotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', 'rotate-1', '-rotate-1'];

const Gallery = () => {
  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 deadwood-font uppercase tracking-widest">Gallery</h2>
          <p className="text-gray-300 text-lg">Explore our diverse portfolio of tattoo styles</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04, zIndex: 20 }}
              className={`bg-white border-4 border-black rounded-xl shadow-2xl w-64 flex flex-col items-center pb-4 transform ${cardRotations[idx % cardRotations.length]} transition-transform duration-300 hover:scale-105 hover:z-20 relative`}
              style={{ zIndex: 10 - idx }}
            >
              {/* Camera icon */}
              <span className="absolute top-3 left-3 text-black opacity-80">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M7 10V17H17V10M7 10V7H17V10M7 10H17" stroke="#111" strokeWidth="1.5"/><circle cx="12" cy="13.5" r="2.5" stroke="#111" strokeWidth="1.5"/></svg>
              </span>
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-64 object-cover rounded-t-lg border-b-2 border-black"
              />
              <div className="w-full px-4 pt-4 pb-0 flex flex-col items-center">
                <h3 className="text-lg font-extrabold uppercase text-black text-center deadwood-font mb-1 tracking-widest">{image.category}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 