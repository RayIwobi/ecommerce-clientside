// MediaSlider.jsx
import React, { useState } from 'react';

const mediaItems = [
  { type: 'image', src: '/assets/foodimg/spices.jpg' },
  { type: 'video', src: '/assets/videos/vegy.mp4' },
  { type: 'image', src: '/assets/foodimg/spices.jpg' },
  { type: 'video', src: '/assets/videos/vegy.mp4' },
 
];

export default function MediaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = mediaItems[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.mediaContainer}>
        {current.type === 'image' ? (
          <img src={current.src} alt="" style={styles.media} />
        ) : (
          <video src={current.src} style={styles.media} controls autoPlay muted />
        )}
      </div>
      <div style={styles.controls}>
        <button onClick={prevSlide} style={styles.button}>⟵ Prev</button>
        <button onClick={nextSlide} style={styles.button}>Next ⟶</button>
      </div>
    </div>
  );
}

const styles = {
  sliderContainer: {
    width: '80%',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  mediaContainer: {
    width: '100%',
    height: 'auto',
  },
  media: {
    width: '100%',
    borderRadius: '12px',
    objectFit: 'cover',
  },
  controls: {
    marginTop: '1rem',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
