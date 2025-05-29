import { CardContent } from '@/components/ui/card';
import { FaInstagram } from 'react-icons/fa';

// Reusable circular logo component
const LogoCircle = ({ className = '' }) => (
  <div className={`h-28 w-28 md:h-40 md:w-40 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-2 border-white ${className}`} />
);

const artistsData = [
  {
    id: 1,
    name: 'Vincent Mnxombola',
    specialty: 'Artist',
    image: '/imgs/artist1.jpg',
    instagram: 'https://instagram.com/dylanbrownink',
  },
  {
    id: 2,
    name: 'Thabo Makgatho',
    specialty: 'Artist',
    image: '/imgs/artist2.jpg',
    instagram: 'https://instagram.com/olivianorthcolor',
  },
  {
    id: 3,
    name: 'Jamie Michelle Van Aswegen',
    specialty: 'Artist',
    image: '/imgs/artist3.jpg',
    instagram: 'https://instagram.com/sofiagrantportrait',
  },
];

const cardRotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3'];

const ArtistSection = () => {
  return (
    <section className="relative py-20 bg-[url('/imgs/bg-2.png')] bg-cover bg-center overflow-x-hidden">
       <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/100 via-black/80 to-black/100" />
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <h2 className="text-3xl sm:text-5xl md:mr-[600px] md:text-6xl font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
            MEET OUR TEAM
          </h2>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
            <LogoCircle />
          </span>
        </div>

        {/* Artist Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {artistsData.map((artist, idx) => (
            <div
              key={artist.id}
              className={`bg-white border-4 border-black rounded-xl shadow-2xl w-64 flex flex-col items-center pb-4 transform ${cardRotations[idx % cardRotations.length]} transition-transform duration-300 hover:scale-105 hover:z-20 relative`}
              style={{ zIndex: 10 - idx }}
            >
              {/* Instagram Icon */}
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 text-black opacity-80 text-xl hover:text-red-500 transition"
              >
                <FaInstagram />
              </a>

              {/* Artist Image */}
                <img
                  src={artist.image}
                  alt={artist.name}
                className="w-full h-64 object-cover rounded-t-lg border-b-2 border-black"
              />

              {/* Card Content */}
              <CardContent className="w-full px-4 pt-4 pb-0 flex flex-col items-center">
                <h3 className="text-lg font-extrabold uppercase text-black text-center deadwood-font mb-1">
                  {artist.name}
                </h3>
                <p className="text-xs font-bold uppercase text-gray-800 text-center tracking-widest mb-2">
                  {artist.specialty}
                </p>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Logo on Bottom Left */}
        <span className="absolute left-0 bottom-[12%] -translate-y-1/2 z-0">
          <LogoCircle />
        </span>

      </div>
    </section>
  );
};

export default ArtistSection;
