import React, { useEffect, useState, useRef } from "react";
import "./videoslider.css";

const mediaFiles = [
  { type: "image", src: "/media/images/image1.jpg" },
  { type: "image", src: "/media/images/image2.jpg" },
  { type: "image", src: "/media/images/image3.jpg" },
  { type: "image", src: "/media/images/image4.jpg" },
  { type: "image", src: "/media/images/image5.jpg" }
  // { type: "video", src: "/media/Green.mp4" },
];

const AUTO_PLAY_INTERVAL = 6000; // 5 seconds

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaFiles.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const currentMedia = mediaFiles[currentIndex];

  return (
    <div className="sliderContainer">
      <div className="">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={`Slide ${currentIndex + 1}`}
            className="slidecontent"
          />
        ) : (
          <video
            src={currentMedia.src}
            autoPlay loop muted playsInline 
            className="slidecontent"
          />
        )}
      </div>
      {/* <p className="slide-counter">
        {currentIndex + 1} / {mediaFiles.length}
      </p> */}
    </div>
  );
}
