import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, duration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [currentImageIndex, duration, images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
};

export default Slideshow;
