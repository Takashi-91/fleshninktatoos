import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import "../styles/fonts.css";

const Hero = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const flipControls = useAnimation();

  // Play video for 3 seconds, then show content
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((err) => console.error("Error playing video:", err));

      const timer = setTimeout(() => {
        video.pause(); // Stop playback
        setShowContent(true); // Show content
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  // Flip animation function
  const playFlip = () => {
    flipControls.start({
      rotateY: [0, 180, 0],
      transition: { duration: 2, ease: "easeInOut" },
    });
  };

  // Animate content when it's shown
  useEffect(() => {
    if (!showContent) return;

    let cleanupFn: (() => void) | undefined;

    async function runAnimations() {
      flipControls.set({ opacity: 0, x: 100 });

      await flipControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      playFlip();

      const interval = setInterval(() => {
        playFlip();
      }, 90000); // every 90 seconds

      return () => clearInterval(interval);
    }

    runAnimations().then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [showContent]);

  // Replay flip on scroll into view
  useEffect(() => {
    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playFlip();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headingRef.current);

    return () => observer.disconnect();
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
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        
        {/* Floating orbs for modern effect */}
        <motion.div
          animate={{ 
            x: [0, 150, 0],
            y: [0, -80, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-60 h-60 bg-green-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-24"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 w-full">
            
            {/* Logo Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full border-2 bg-white">
                {/* Animated rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-green-400/30"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-green-500/20"
                />
                
            
                
                {/* Logo */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-full w-full bg-[url('/imgs/logo3.png')] bg-cover bg-center rounded-full border-4 border-white/30  "
                />
                
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                <div
                  ref={headingRef}
                  className="flip-container mb-6"
                  style={{ perspective: 1000 }}
                >
                  <motion.h1
                    animate={flipControls}
                    style={{ transformStyle: "preserve-3d" }}
                    className="deadwood-font text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-none tracking-widest drop-shadow-2xl"
                  >
                    <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent block">
                      FLESH-N-INK
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block mt-2">
                      TATTOOS
                    </span>
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative mb-8"
                >
                  <div className="absolute inset-0  rounded-2xl" />
                  <p className="deadwood-font text-white text-xl sm:text-2xl lg:text-3xl max-w-lg p-4 rounded-2xl ">
                    <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                      Where Art Meets Skin
                    </span>
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <motion.button
  onClick={() => window.open("https://wa.me/+27814071917", "_blank")} // Replace with your number
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)"
  }}
  whileTap={{ scale: 0.95 }}
  className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold uppercase text-sm rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg border border-green-400/30"
>
  <span className="flex items-center justify-center gap-3">
    <FaCalendarAlt className="w-4 h-4 group-hover:scale-110 transition-transform" />
    Book a Session
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      →
    </motion.span>
  </span>
</motion.button>


                 <a href="#gallery">
  <motion.button
    whileHover={{ 
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.15)"
    }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold uppercase text-sm rounded-full hover:bg-white/15 transition-all duration-300 shadow-lg"
  >
    View Gallery
  </motion.button>
</a>

                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Social Media Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-8 lg:right-8 lg:left-auto"
          >
         <div className="hidden lg:flex flex-row lg:flex-col gap-4 ">

              {[
                { icon: FaInstagram, href: "https://www.instagram.com/fleshninktattoos/", color: "white" },
                { icon: FaFacebookF, href: "https://www.facebook.com/fleshninktattoos/", color: "white" },
                { icon: FaWhatsapp, href: "https://wa.me/+27814071917", color: "white" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20`}
                  aria-label={social.icon.name}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      )}

      {/* Loading Overlay */}
     
      
    </div>
  );
};

export default Hero;
