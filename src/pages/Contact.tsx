import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Polaroid images */}
        <div className="flex flex-col items-center md:items-start relative">
          {/* Map Polaroid */}
          <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-60 flex items-center justify-center mb-[-40px] z-10 rotate-2 relative">
            <img src="/imgs/contact-map.jpg" alt="Map" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Studio/Event Polaroid, slightly overlapped */}
          <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-44 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0">
            <img src="/imgs/contact-studio.jpg" alt="Studio" className="w-full h-full object-cover rounded-lg" />
            {/* Red pin/accent */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" fill="#e3342f" stroke="#fff" strokeWidth="2" />
              </svg>
            </span>
          </div>
        </div>
        {/* Right: Contact info and form */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-6 text-white">Contact Us</h2>
          <div className="mb-6 text-white text-base md:text-lg space-y-2">
            <div><span className="font-bold">Address:</span> 123 Ink Street, Tattoo City, TC 12345</div>
            <div><span className="font-bold">Phone:</span> +1 (555) 123-4567</div>
            <div><span className="font-bold">Email:</span> info@fleshinktattoos.com</div>
          </div>
          <form className="w-full max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-white mb-1">Name</label>
              <input type="text" id="name" className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-1">Email</label>
              <input type="email" id="email" className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-white mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-green-700 transition-colors">Send Message</button>
          </form>
          {/* Red signature/accent */}
          <span className="mt-6">
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 27 Q20 10 30 25 Q40 40 55 10 Q60 5 75 27" stroke="#e3342f" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact; 