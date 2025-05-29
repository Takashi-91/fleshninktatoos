import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/gallery/photo1.jpg' },
  { id: 2, src: '/gallery/photo2.jpg' },
  { id: 3, src: '/gallery/photo3.jpg' },
  { id: 4, src: '/gallery/photo4.jpg' },
  { id: 5, src: '/gallery/photo5.jpg' },
  { id: 6, src: '/gallery/photo6.jpg' },
  { id: 7, src: '/gallery/photo7.jpg' },
  { id: 8, src: '/gallery/photo8.jpg' },
  { id: 9, src: '/gallery/photo9.jpg' },
  { id: 10, src: '/gallery/photo10.jpg' },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-black min-h-screen" id="gallery">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
       <h2 className="text-3xl sm:text-5xl md:text-6xl md:mr-[600px] md:mb-20 font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
            <span>GALLERY</span><br />
          </h2>
          </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden bg-white/10 shadow-md border border-white/20"
            >
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
