import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
    { src: '/imgs/pic1.jpg', alt: 'Logo 1' },
    { src: '/imgs/pic2.jpg', alt: 'Logo 2' },
    { src: '/imgs/pic3.jpg', alt: 'Logo 3' },
    { src: '/imgs/pic4.jpg', alt: 'Logo 4' },
    { src: '/imgs/pic5.jpg', alt: 'Logo 5' },
    { src: '/imgs/pic6.jpg', alt: 'Logo 6' },
    { src: '/imgs/pic7.jpg', alt: 'Logo 7' },
    { src: '/imgs/pic8.jpg', alt: 'Logo 8' },
];
const CarouselGallery: React.FC = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      
      {/* Carousel */}
      <div className="relative z-10 w-full h-full flex items-center">
        <ul className="flex animate-infinite-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <li key={index} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-40 w-50 object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselGallery;