import { Card, CardContent } from '@/components/ui/card';
import { Scissors, SquarePen, PenTool } from 'lucide-react';  // Replace Tattoo and Needle with valid icons
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Custom Tattoos',
    description: 'Personalized designs created specifically for you, reflecting your ideas and vision.',
    icon: SquarePen,  // Changed from Tattoo
  },
  {
    id: 2,
    title: 'Cover-Ups',
    description: 'Transform existing tattoos with creative solutions that seamlessly integrate new designs.',
    icon: Scissors,
  },
  {
    id: 3,
    title: 'Touch-Ups',
    description: 'Refresh and revitalize your existing tattoos to maintain their vibrant appearance.',
    icon: PenTool,  // Changed from Needle
  },
];

const partnerLogos = [
  { src: '/imgs/vesper-logo.png', alt: 'VESPER' },
  { src: '/imgs/make-tattoo-logo.png', alt: 'MAKE TATTOO' },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Top left red section title */}
      <div className="absolute top-6 left-6 text-red-500 text-xs md:text-sm font-bold tracking-widest z-20">
        Головні партнери фестивалю
      </div>
      {/* Bottom left red section title */}
      <div className="absolute bottom-6 left-6 text-red-500 text-xs md:text-sm font-bold tracking-widest z-20">
        Партнери фестивалю
      </div>
      {/* Large faded image on the left */}
      <div className="absolute inset-y-0 left-0 w-1/2 hidden md:block z-0">
        <img
          src="/imgs/vesper-bg.jpg"
          alt="Vesper Studio"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Spacer for left image on desktop */}
          <div className="hidden md:block md:w-1/2" />
          {/* Right side: text and logos */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white mb-6 deadwood-font">
              Our Festival Unites the Best Representatives of the Tattoo Industry!
            </h2>
            <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-8 max-w-lg leading-relaxed uppercase">
              Thanks to the support of our main partners, we create a unique atmosphere for artists and guests. Together we popularize the art of tattooing, open up new opportunities, and make the festival even more massive!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8 w-full justify-end items-end">
              {partnerLogos.map((logo, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-32">
                  <img src={logo.src} alt={logo.alt} className="max-h-20 max-w-full object-contain" />
                </div>
          ))}
        </div>
          </div>
        </div>
      </div>
      {/* Large red brush/asterisk accent in the bottom right */}
      <span className="absolute bottom-8 right-8 z-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 8 L40 72 M8 40 L72 40 M20 20 L60 60 M60 20 L20 60" stroke="#e3342f" strokeWidth="10" strokeLinecap="round" style={{ filter: 'blur(0.5px)' }}/>
        </svg>
      </span>
    </section>
  );
};

export default ServicesSection;
