import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, src: '/gallery/tattoo1.jpg', category: 'Traditional' },
    { id: 2, src: '/gallery/tattoo2.jpg', category: 'Realism' },
    { id: 3, src: '/gallery/tattoo3.jpg', category: 'Minimalist' },
    { id: 4, src: '/gallery/tattoo4.jpg', category: 'Geometric' },
    { id: 5, src: '/gallery/tattoo5.jpg', category: 'Watercolor' },
    { id: 6, src: '/gallery/tattoo6.jpg', category: 'Blackwork' },
  ];

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Our Work</h2>
          <p className="text-gray-600">Explore our diverse portfolio of tattoo styles</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={`Tattoo ${image.id}`}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-white text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{image.category}</h3>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 