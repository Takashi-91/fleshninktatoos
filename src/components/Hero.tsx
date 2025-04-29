import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import '../styles/fonts.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setIsVisible(false);
      setShowContent(true);
    };

    if (video) {
      video.play().catch((err) => console.error("Error playing video:", err));
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="relative h-screen bg-transparent overflow-hidden">
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
      </div>

      {/* Content that appears after video */}
      {showContent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-white/80 to-green-600/30 px-4 space-y-8 md:space-y-0 md:space-x-8"
        >
          <div className="h-60 w-60 md:h-64 md:w-64 bg-[url('/imgs/logo-3.png')] bg-cover bg-center"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-black deadwood-font">
              Flesh-n-Ink<span className="text-green-600">Tattoos</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 deadwood-font">
              Where Art Meets Skin
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
              >
                Book a Session
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      {showContent && (
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default Hero; 