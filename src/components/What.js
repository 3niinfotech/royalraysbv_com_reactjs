import React, { useState, useEffect } from 'react';

const What = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/What1.jpg',  // Assuming this image is in the public folder
    '/What2.jpg',  // Replace with the correct path if different
    '/What3.jpg'   // Replace with the correct path if different
  ];

  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    const id = setTimeout(() => setCurrentIndex(next), 3000); // Change image every 3 seconds
    return () => clearTimeout(id);
  }, [currentIndex, images.length]);

  return (
    <div>
      <div id="carousel">
        {images.map((src, index) => (
          <img 
            key={src} 
            src={src} 
            alt={`Slide ${index + 1}`} 
            style={{ display: index === currentIndex ? 'block' : 'none', width: '100%' }} 
          />
        ))}
      </div>
      <hr style={{ border: '1px solid #ccc', width: '100%' }} />
    </div>
  );
}

export default What;
