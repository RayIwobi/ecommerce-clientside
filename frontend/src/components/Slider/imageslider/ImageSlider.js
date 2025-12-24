import React, { useEffect, useState, useRef } from "react";
import "./imageslider.css";

const mediaFiles = [
  { type: "image", src: "/media/images/image1.jpg" },
  { type: "image", src: "/media/images/image2.jpg" },
  { type: "image", src: "/media/images/image3.jpg" },
  { type: "image", src: "/media/images/image4.jpg" },
  { type: "image", src: "/media/images/image5.jpg" },
  { type: "image", src: "/media/images/image6.jpg" },
  { type: "image", src: "/media/images/image7.jpg" },
  { type: "image", src: "/media/images/image8.jpg" },
  { type: "image", src: "/media/images/image9.jpg" },
  { type: "image", src: "/media/images/image10.jpg" }
];

const AUTO_PLAY_INTERVAL = 4000;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliderContainer">
      <div
        className="sliderTrack"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out"
        }}
        ref={slideRef}
      >
        {mediaFiles.map((media, index) => (
          <div className="slide" key={index}>
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={`Slide ${index + 1}`}
                className="slidecontent"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="slidecontent"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
