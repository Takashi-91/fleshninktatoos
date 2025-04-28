import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

function Intro() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      console.log("Video ended"); // Debugging if the video ends correctly
      setIsVisible(false);
      setTimeout(() => {
        console.log("Navigating to /herosection"); // Check if navigation triggers
        navigate("/herosection");
      }, 1000); // wait for fade-out transition
    };

    if (video) {
      // Log to check if video element is available
      console.log("Video element available:", video);
      video.play().catch((err) => console.error("Error playing video:", err)); // Added error handling for play
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [navigate]);

  // Check visibility status for debugging
  console.log("isVisible:", isVisible);

  // If not visible, return null to remove the component from DOM
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000">
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/vids/video-2.mp4"
          className="w-full h-52 object-cover glitch"
          muted
          playsInline
          autoPlay
        />
      </div>
    </div>
  );
}

export default Intro;
