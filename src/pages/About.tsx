const About = () => {
  return (
    <section className="relative min-h-screen bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center flex flex-col justify-center items-center py-16 px-4">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/100 via-black/60 to-black/100" />


      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <h2 className="text-3xl sm:text-5xl md:text-6xl md:mr-[600px] font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
            <span>About Us</span><br />
          </h2>
        </div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Polaroid images */}
          <div className="flex flex-col items-center md:items-start relative">
            {/* Organizer photo */}
            <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-72 flex items-center justify-center mb-[-40px] z-10 rotate-2 relative">
              <img src="/imgs/pic-1.png" alt="Organizer" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* Event photo */}
            <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-44 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0">
              <img src="/imgs/pic-2.jpg" alt="Event" className="w-full h-full object-cover rounded-lg" />
              {/* Red pin */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" fill="#e3342f" stroke="#fff" strokeWidth="2" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-4">
              <span className="text-green-600"> Flesh-n-Ink</span><br />
              <span className="text-white">PRETORIA’S PREMIER SOUTH AFRICAN-OWNED TATTOO STUDIO</span>
            </h2>
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold uppercase mb-6">
              Passionately local. Boldly artistic. Ink Republic is where culture and creativity collide.
            </h3>
            <p className="text-white text-base md:text-lg mb-6 max-w-2xl">
              Founded in the heart of Pretoria, Ink Republic is proudly South African and rooted in a deep love for body art. Our studio celebrates local talent, diversity, and self-expression. Each tattoo we create tells a unique story—whether inspired by heritage, modern artistry, or personal journeys.<br /><br />
              Our artists bring years of experience and a passion for their craft, ensuring every piece is done with precision, professionalism, and care. More than just ink, we create connections—building a community where every client feels seen, heard, and proud of the art they wear.
            </p>
            <span className="mt-2">
              <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 27 Q20 10 30 25 Q40 40 55 10 Q60 5 75 27" stroke="#16a34a" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
