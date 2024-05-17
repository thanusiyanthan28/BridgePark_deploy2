import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import './ImageGallery.css'; // Import the custom CSS file

const contentStyle = {
  margin: 'auto',
  height: '450px',
  color: '#fff',
  lineHeight: '10px',
  textAlign: 'center',
  background: '#364d79',
  width: '800px',
  borderRadius: '30px',
  overflow: 'hidden', // Ensure content does not overflow the rounded corners
};

const imagestyle = {
  width: '100%', // Make the image responsive
  height: '100%', // Make the image responsive
  objectFit: 'cover', // Cover the entire area while maintaining aspect ratio
  borderRadius: '30px',
  transition: 'transform 0.5s ease-in-out', // Add transition for smooth animation
};

const images = [
  'https://source.unsplash.com/random/800x450/?nature',
  'https://source.unsplash.com/random/800x450/?city',
  'https://source.unsplash.com/random/800x450/?technology',
  'https://source.unsplash.com/random/800x450/?food',
];

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleSlideChange = (from, to) => {
    setCurrentSlide(to);
  };

  const handleIndicatorClick = (index) => {
    carouselRef.current.goTo(index);
    setCurrentSlide(index); // Update the indicator immediately
  };

  return (
    <div className='image-gallery'>
      <h1>Image Gallery</h1>
      <Carousel
        ref={carouselRef}
        arrows
        infinite={true}
        style={contentStyle}
        beforeChange={handleSlideChange}
        dotPosition="none" // Hide default dots
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={imagestyle} />
          </div>
        ))}
      </Carousel>
      <div className="custom-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-line ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
