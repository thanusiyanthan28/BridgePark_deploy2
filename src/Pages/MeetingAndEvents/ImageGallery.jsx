import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import './ImageGallery.css'; // Import the custom CSS file
import image1 from "../../assets/images/image_gellery/image1.jpg"
import image2 from "../../assets/images/image_gellery/image2.jpg"
import image3 from "../../assets/images/image_gellery/image3.jpg"
import image4 from "../../assets/images/image_gellery/image1.jpg"
import image5 from "../../assets/images/image_gellery/image5.jpeg"
import image6 from "../../assets/images/image_gellery/image6.jpg"
import { height } from '@mui/system';

const contentStyle = {
  margin: 'auto',
  color: '#fff',
  lineHeight: '10px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '30px',
  overflow: 'hidden',
  objectFit: 'cover', // Ensure content does not overflow the rounded corners
};

const imagestyle = {
  width: '100%', // Make the image responsive
  objectFit: 'cover', // Cover the entire area while maintaining aspect ratio
  borderRadius: '30px',
  transition: 'transform 0.5s ease-in-out', // Add transition for smooth animation
};

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
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
        className='content-wrapper'
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={imagestyle}  className='image-gallery-photo'/>
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
