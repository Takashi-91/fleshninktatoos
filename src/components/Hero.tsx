import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import '../styles/fonts.css';

const Hero = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleVideoEnd = () => setShowContent(true);
    if (video) {
      video.play().catch((err) => console.error("Error playing video:", err));
      video.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (video) video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/vids/video-2.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          autoPlay
        />
        {/* Strong black overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-85" />
      </div>

      {/* Main Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-24"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center mb-8 md:space-x-8 space-y-6 md:space-y-0 w-full">
            {/* Large red brush/asterisk accent */}
            <span className="block flex-shrink-0 mx-auto md:mx-0 ">
    {/* Image on the left (or right, adjust order as needed) */}
   <div className="h-40 w-40 mr-52 md:h-80 md:w-80 bg-[url('/imgs/logo-3.png')] md:ml-20 bg-cover bg-center rounded-full border-2 border-white mb-6 md:mb-0" />

           
            </span>
            <div className="w-full">
              <div className="s">
              <h1 className="deadwood-font text-white text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-extrabold uppercase leading-none tracking-widest text-left drop-shadow-xl">
                FLESH-N-INK<br />
                TATTOOS
              </h1>
              <p className="deadwood-font text-white text-lg xs:text-xl sm:text-2xl md:text-3xl mt-6 mb-8 text-left max-w-xl drop-shadow-lg">
                Where Art Meets Skin
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-2 w-full max-w-xs sm:max-w-none">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-green-700 transition-colors shadow-lg w-full sm:w-auto"
                >
                  Book a Session
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white transition-colors shadow-lg border border-white w-full sm:w-auto"
                >
                  View Our Work
                </motion.button>
              </div>
              </div>
            </div>
            
          </div>
          {/* Event/date/location block in bottom right, repositioned for mobile */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
            <div className="text-green-500 text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase">14 - 15 June</div>
            <div className="text-green-500 text-xs xs:text-sm sm:text-md md:text-lg font-semibold uppercase">Art Factory</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
