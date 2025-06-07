import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex flex-col justify-center items-center py-24 px-4 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      
      {/* Floating orbs for modern effect */}
      <motion.div
        animate={{ 
          x: [0, 120, 0],
          y: [0, -60, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 80, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-tight deadwood-font relative mb-6"
          >
            <span className="bg-gradient-to-r from-white via-green-100 to-white md:mr-[800px] bg-clip-text text-transparent">
              ABOUT
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text md:mr-[500px] text-transparent">
              US
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-1/5 -translate-x-1/2 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-center w-32"
            />
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-16"
        >
          {/* Left: Polaroid images */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start relative"
          >
            {/* Organizer photo */}
            <motion.div 
              whileHover={{ 
                rotate: 8, 
                scale: 1.05,
                y: -10
              }}
              className="bg-white/95 backdrop-blur-sm border-4 border-white/80 rounded-2xl shadow-2xl w-72 h-80 flex items-center justify-center mb-[-40px] z-10 rotate-2 relative group overflow-hidden"
            >
              <img 
                src="/imgs/pic-1.png" 
                alt="Studio" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Event photo */}
            <motion.div 
              whileHover={{ 
                rotate: -8, 
                scale: 1.05,
                y: -5
              }}
              className="bg-white/95 backdrop-blur-sm border-4 border-white/80 rounded-2xl shadow-2xl w-72 h-52 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0 group overflow-hidden"
            >
              <img 
                src="/imgs/pic-2.jpg" 
                alt="Tattoo work" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Enhanced red pin */}
              <motion.span 
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#e3342f" stroke="#fff" strokeWidth="3" />
                    <motion.circle 
                      cx="12" 
                      cy="12" 
                      r="6" 
                      fill="#ff6b6b"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex flex-col justify-center items-start text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase mb-6 leading-tight"
            >
              <span className="deadwood-font bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
                Flesh-n-Ink
              </span>
              <span className="text-white text-xl sm:text-2xl lg:text-3xl mt-2 block font-bold tracking-wide">
                PRETORIA'S PREMIER TATTOO STUDIO
              </span>
            </motion.h2>

            <motion.h3 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-8 leading-relaxed"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Passionately local. Boldly artistic.
              </span>
              <br />
              <span className="text-green-400">
                Where culture and creativity collide.
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0" />
              <p className="text-white text-base lg:text-lg leading-relaxed max-w-3xl p-6 rounded-2xl ">
                <span className="text-green-400 font-semibold">Founded in the heart of Pretoria</span>, Flesh-n-Ink is proudly South African and rooted in a deep love for body art. Our studio celebrates local talent, diversity, and self-expression. Each tattoo we create tells a unique story—whether inspired by heritage, modern artistry, or personal journeys.
                <br /><br />
                Our artists bring years of experience and a passion for their craft, ensuring every piece is done with precision, professionalism, and care. More than just ink, we create connections—building a community where every client feels seen, heard, and proud of the art they wear.
              </p>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Bottom wave decoration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-0"
        >
          <svg width="300" height="80" viewBox="0 0 300 80" className="text-green-400">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.2 }}
              d="M20 40 Q75 15 150 40 Q225 65 280 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              d="M20 50 Q75 25 150 50 Q225 75 280 50"
              stroke="currentColor"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 