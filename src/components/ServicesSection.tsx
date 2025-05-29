import { Card, CardContent } from '@/components/ui/card';
import { Scissors, SquarePen, PenTool } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Custom Tattoos',
    description: 'Personalized designs created specifically for you, reflecting your ideas and vision.',
    icon: SquarePen,
    cover: '/imgs/pic-1.png',
  },
  {
    id: 2,
    title: 'Cover-Ups',
    description: 'Transform existing tattoos with creative solutions that seamlessly integrate new designs.',
    icon: Scissors,
    cover: '/imgs/pic-2.jpg',
  },
  {
    id: 3,
    title: 'Touch-Ups',
    description: 'Refresh and revitalize your existing tattoos to maintain their vibrant appearance.',
    icon: PenTool,
    cover: '/imgs/pic-3.png',
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-[url('/imgs/bg-2.png')] bg-cover bg-center  overflow-hidden">
       <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/100 via-black/60 to-black/100" />
      <div className="flex flex-col items-center justify-center mb-16 relative">
        <h2 className="text-3xl sm:text-5xl md:text-6xl md:mr-[600px] font-extrabold uppercase text-white text-center leading-tight deadwood-font z-10">
          <span>Our Services</span>
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          
          {/* Left: Cards with background images */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="relative w-full rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${service.cover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                {/* Content */}
                <CardContent className="relative z-10 flex items-start space-x-4 p-6">
                  <service.icon className="h-10 w-10 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-white text-sm mt-2">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Studio info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white mb-6 deadwood-font">
              Proudly South African Tattoo Studio in Pretoria
            </h2>
            <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-8 max-w-lg leading-relaxed uppercase">
              Rooted in the heart of Pretoria, our studio celebrates local creativity and cultural expression through the art of tattooing. We are a proudly South African-owned business offering a safe, clean, and professional space where your ideas come to life.
            </p>
          </div>
        </div>
      </div>

      {/* Logo */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <div className="hidden md:block h-28 w-28 md:mt-[500px] md:mr-52 md:h-40 md:w-40 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-2 border-white mb-6" />
      </span>
    </section>
  );
};

export default ServicesSection;
