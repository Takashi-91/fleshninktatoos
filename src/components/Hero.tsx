import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "../styles/fonts.css";

const Hero = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const flipControls = useAnimation();
  const headingRef = useRef<HTMLDivElement>(null);

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

  // Flip animation function
  const playFlip = () => {
    flipControls.start({
      rotateY: [0, 180, 0],
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  // Animate slide-in first, then start flip loop
  useEffect(() => {
    if (!showContent) return;

    let cleanupFn: (() => void) | undefined;

    async function runAnimations() {
      // Set initial state off-screen right and invisible
      flipControls.set({ opacity: 0, x: 100 });

      // Slide in from right
      await flipControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Start flip animation loop every 10 seconds
      playFlip();
      const interval = setInterval(() => {
        playFlip();
      }, 10000);

      // Return cleanup function to clear interval
      return () => clearInterval(interval);
    }

    runAnimations().then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [showContent]);

  // Replay flip animation when heading scrolls back into view
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
        {/* Strong black overlay for contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/85 via-black/85 to-black/100" />
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
            {/* Image */}
            <span className="block flex-shrink-0 mx-auto md:mx-0 ">
              <div className="relative h-40 w-40 md:h-80 md:w-80 mr-40 md:ml-20 mb-6 md:mb-0">
                <div className="absolute inset-0 rounded-full border-4 border-green-500 bg-white animate-neon-blink" />
                <div className="relative h-full w-full bg-[url('/imgs/logo3.png')] bg-cover bg-center rounded-full" />
              </div>
            </span>
            <div className="w-full">
              <div className="s">
                <div
                  ref={headingRef}
                  className="flip-container"
                  style={{ perspective: 1000 }}
                >
                  <motion.h1
                    animate={flipControls}
                    style={{ transformStyle: "preserve-3d" }}
                    className="deadwood-font text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-none tracking-widest text-left drop-shadow-xl"
                  >
                    FLESH-N-INK
                    <br />
                    TATTOOS
                  </motion.h1>
                </div>

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
                </div>
              </div>
            </div>
          </div>

          {/* Event/date/location block in bottom right */}
         <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
  <div className="flex flex-col space-y-6">
    <a
      href="https://instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-500 text-2xl"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
    <a
      href="https://facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-500 text-2xl"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://wa.me/yourwhatsappnumber"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-500 text-2xl"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
