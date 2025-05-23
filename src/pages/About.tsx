import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center py-16 px-4">
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
            <img src="/imgs/organizer.jpg" alt="Organizer" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Event photo, slightly overlapped */}
          <div className="bg-white border-4 border-black rounded-xl shadow-2xl w-60 h-44 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0">
            <img src="/imgs/event.jpg" alt="Event" className="w-full h-full object-cover rounded-lg" />
            {/* Red pin/accent */}
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
            <span className="text-red-600">СЕРГІЙ ПЕЦУХ</span><br />
            <span className="text-white">ОРГАНІЗАТОР ВЖЕ ДРУГОГО КИЇВСЬКОГО ТАТУ ФЕСТИВАЛЮ</span>
          </h2>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold uppercase mb-6">
            Він є власником найбільшого тату-магазину MakeTattoo та бренду тату-косметики VESPER, які задають високі стандарти в сфері.
          </h3>
          <p className="text-white text-base md:text-lg mb-6 max-w-2xl">
            Сергій також організовує професійний тату форум TattooConcentrate, де майстри обмінюються досвідом і знаннями. Його YouTube-проєкт ТАТУ БАЛАЧКИ популяризує тату-культуру, висвітлюючи тренди та новинки індустрії.<br /><br />
            Як активний ентузіаст і популяризатор, Сергій просуває тату-мистецтво в Україні та робить Київський Тату Фестиваль знаковою подією міжнародного рівня.
          </p>
          {/* Red signature/accent */}
          <span className="mt-2">
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 27 Q20 10 30 25 Q40 40 55 10 Q60 5 75 27" stroke="#e3342f" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About; 