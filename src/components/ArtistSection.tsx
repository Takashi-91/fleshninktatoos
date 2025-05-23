import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const artistsData = [
  {
    id: 1,
    name: 'Dylan Brown',
    specialty: 'BLACK&GREY TATTOO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    instagram: '#',
  },
  {
    id: 2,
    name: 'Olivia North',
    specialty: 'COLOR TATTOO',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop',
    instagram: '#',
  },
  {
    id: 3,
    name: 'Sofia Grant',
    specialty: 'PORTRAIT TATTOO',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop',
    instagram: '#',
  },
 
];

const cardRotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3'];

const ArtistSection = () => {
  return (
    <section className="relative py-20 bg-black overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Headline with red brush accent */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
            <span>MEET OUR TEAM</span><br />
          </h2>
          {/* Red brush/asterisk accent on the right */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
             <div className="h-28 w-28 md:mr-60 md:h-40 md:w-40 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-2 border-white mb-6 md:mb-0 " />
          </span>
        </div>

        {/* Polaroid-style artist cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {artistsData.map((artist, idx) => (
            <div
              key={artist.id}
              className={`bg-white border-4 border-black rounded-xl shadow-2xl w-64 flex flex-col items-center pb-4 transform ${cardRotations[idx % cardRotations.length]} transition-transform duration-300 hover:scale-105 hover:z-20 relative`}
              style={{ zIndex: 10 - idx }}
            >
              {/* Instagram icon */}
              <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="absolute top-3 left-3 text-black opacity-80">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke="#111" strokeWidth="1.5"/><rect x="7" y="7" width="10" height="10" rx="5" stroke="#111" strokeWidth="1.5"/><circle cx="16.5" cy="7.5" r="1" fill="#111"/></svg>
              </a>
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover rounded-t-lg border-b-2 border-black"
              />
              <CardContent className="w-full px-4 pt-4 pb-0 flex flex-col items-center">
                <h3 className="text-lg font-extrabold uppercase text-black text-center deadwood-font mb-1">{artist.name}</h3>
                <p className="text-xs font-bold uppercase text-gray-800 text-center tracking-widest mb-2">{artist.specialty}</p>
              </CardContent>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArtistSection;
