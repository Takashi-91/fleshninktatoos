import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              GET IN
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              TOUCH
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-center w-40"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Ready to bring your vision to life? Book your consultation or reach out with any questions.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl font-bold text-white deadwood-font uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
              >
                Contact Information
              </motion.h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to help you bring your tattoo ideas to life. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Phone</p>
                  <p className="text-white font-semibold text-lg">+27 (012) 345-6789</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Email</p>
                  <p className="text-white font-semibold text-lg">info@fleshinktattoos.com</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Address</p>
                  <p className="text-white font-semibold text-lg">123 Ink Street, Pretoria, 0001</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="text-xl font-bold text-white mb-4 deadwood-font uppercase">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaInstagram, href: "#", color: "from-pink-500 to-purple-600" },
                  { icon: FaFacebookF, href: "#", color: "from-blue-500 to-blue-600" },
                  { icon: FaWhatsapp, href: "#", color: "from-green-500 to-green-600" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
              <motion.h3 
                className="text-2xl font-bold text-white mb-8 deadwood-font uppercase tracking-wider text-center"
                whileHover={{ scale: 1.02 }}
              >
                Send us a Message
              </motion.h3>
              
              <form className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300 group-hover:bg-white/15"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300 group-hover:bg-white/15"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 focus:outline-none transition-all duration-300 resize-none group-hover:bg-white/15"
                    placeholder="Tell us about your tattoo idea..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold uppercase text-sm rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg border border-green-400/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-3 h-3 bg-green-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 