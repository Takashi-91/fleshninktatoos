import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

 
  return (
    <section className="relative min-h-screen bg-[url('/imgs/bg-2.png')] bg-cover bg-center flex flex-col justify-center items-center py-16 px-4" id="contact">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl mb-5 md:text-6xl md:mr-[600px] md:mb-20 font-extrabold uppercase text-white text-center leading-tight deadwood-font"
        >
          <span>Contact Us</span>
        </motion.h2>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Polaroid images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start relative"
          >
            <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-60 flex items-center justify-center mb-[-40px] z-10 rotate-2 relative">
              <img src="/imgs/contact-map.jpg" alt="Map location" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-44 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0">
              <img src="/imgs/contact-studio.jpg" alt="Studio interior" className="w-full h-full object-cover rounded-lg" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" fill="#e3342f" stroke="#fff" strokeWidth="2" />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center items-start md:ml-52 text-left"
          >
            <div className="mb-6 text-white text-base md:text-lg space-y-2">
              <div><span className="font-bold">Address:</span> 123 Ink Street, Tattoo City, TC 12345</div>
              <div><span className="font-bold">Phone:</span> +1 (555) 123-4567</div>
              <div><span className="font-bold">Email:</span> info@fleshinktattoos.com</div>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white text-black"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm">Failed to send message. Please try again.</div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            <span className="mt-6" aria-hidden="true">
              <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 27 Q20 10 30 25 Q40 40 55 10 Q60 5 75 27" stroke="#e3342f" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;