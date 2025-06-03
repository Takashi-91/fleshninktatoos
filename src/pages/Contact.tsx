import { motion } from 'framer-motion'; 

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaClock } from 'react-icons/fa';

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

const Contact = () => {
  return (
    <section id ="contact">
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 py-24 px-4 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />

      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -60, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 80, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
      />

      <div className="relative z-10 w-full flex flex-col items-center">
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
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">CONTACT</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">US</span>
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
            Ready to start your tattoo journey? Get in touch with us and let's bring your vision to life.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full flex flex-col lg:flex-row items-start gap-4"
        >
          {/* Left Column: Contact Info */}
          <motion.div variants={itemVariants} className="flex-1 space-y-6 flex justify-center md:justify-start">
            <div className="space-y-4 w-full sm:max-w-md md:ml-6">
              {[{ icon: FaMapMarkerAlt, label: "Address", value: "123 Ink Street, Pretoria, 0001", color: "from-red-500 to-red-600" },
                { icon: FaPhone, label: "Phone", value: "+27 (012) 345-6789", color: "from-green-500 to-green-600" },
                { icon: FaEnvelope, label: "Email", value: "info@fleshinktattoos.com", color: "from-blue-500 to-blue-600" },
                { icon: FaClock, label: "Hours", value: "Mon-Sat: 9AM-6PM", color: "from-purple-500 to-purple-600" }].map((contact, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-semibold">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
              <div className="pt-6">
                <h4 className="text-lg font-bold text-white mb-4 deadwood-font uppercase">Follow Us</h4>
                <div className="flex space-x-4">
                  {[{ icon: FaInstagram, href: "#", color: "from-pink-500 to-purple-600" },
                    { icon: FaFacebookF, href: "#", color: "from-blue-500 to-blue-600" },
                    { icon: FaWhatsapp, href: "#", color: "from-green-500 to-green-600" }].map((social, idx) => (
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
              </div>
            </div>
          </motion.div>

          {/* Right Column: QR Code */}
          <motion.div variants={itemVariants} className="flex-1 w-full max-w-md">
            <div className="relative flex flex-col items-center justify-center bg-[url('/imgs/contact-form-bg.jpg')] bg-cover bg-center rounded-3xl p-8 lg:p-12 shadow-lg border border-white/20 backdrop-blur-lg min-h-[400px]">
              <img 
                src="/imgs/contact-qr.png" 
                alt="Scan QR to contact" 
                className="w-48 h-48 object-contain rounded-xl border-4 border-white shadow-xl mb-6" 
              />
              <p className="text-white text-center text-lg">Scan to connect with us instantly</p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                  d="M5 30 Q25 10 50 25 Q75 40 95 20" 
                  stroke="#16a34a" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-3 h-3 bg-green-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </section>
  );
};

export default Contact;
