import { motion } from 'framer-motion'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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
    <section id="contact">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 py-24 px-4 overflow-hidden">
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
            className="text-center mb-5"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl sm:mt-5 font-extrabold uppercase text-white leading-tight deadwood-font relative mb-6"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white md:mr-[800px] bg-clip-text text-transparent">
                CONTACT
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
            className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 px-6"
          >
            {/* QR Code Section */}
            <div className="hidden sm:flex justify-center items-center rounded-md lg:w-1/2">
              <div className="text-center">
                <img
                  src="/imgs/qrcode3.png"
                  alt="QR Code"
                  className="w-[400px] h-[400px]  mx-auto"
                />
                <p className="mt-4 text-gray-300">
                  Scan the QR code to get in touch with us.
                </p>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="text-white lg:w-1/2">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get a Quote</h1>
              <p className="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl w-full flex flex-col gap-12 lg:gap-8 mt-6"
              >
             
                {/* Contact Info List */}
                <motion.div variants={itemVariants} className="space-y-4">
                  {[{ icon: FaMapMarkerAlt, label: "Address", value: "325 Paul Kruger x Van Heerden Capital Park, Pretoria ", color: "from-green-500 to-black" },
                    { icon: FaPhone, label: "Phone", value: "+27 81 407 1917", color: "from-green-500 to-black" },
                    { icon: FaEnvelope, label: "Email", value: "Email: fleshninktattoos@gmail.com", color: "from-green-500 to-black" },
                    { icon: FaClock, label: "Hours", value: "Appointment Only", color: "from-green-500 to-black" }].map((contact, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 "
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
                </motion.div>

              </motion.div>
            </div>
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
