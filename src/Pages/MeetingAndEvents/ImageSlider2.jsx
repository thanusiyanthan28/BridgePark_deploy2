import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './ImageSlider2.css'; // Import the CSS file

import image1 from "../../assets/RoomTypes/Reception/Reception&Lobby1.webp";
import image2 from "../../assets/RoomTypes/Reception/Reception&Lobby11.webp";
import image3 from "../../assets/RoomTypes/Reception/Reception&Lobby12.webp";
import image4 from "../../assets/RoomTypes/Reception/Reception&Lobby3.webp";
import image5 from "../../assets/RoomTypes/Reception/Reception&Lobby4.webp";
import image6 from "../../assets/RoomTypes/Reception/Reception&Lobby6.webp";
import image7 from "../../assets/RoomTypes/Reception/Reception&Lobby7.webp";
import image8 from "../../assets/RoomTypes/Reception/Reception&Lobby9.webp";
import image9 from "../../assets/RoomTypes/Restuarent/Resturant2.webp";
import image10 from "../../assets/RoomTypes/Restuarent/Resturant3.webp";


const ImageSlider2 = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return 'large';
    if (index === (currentIndex + 1) % images.length) return 'medium';
    if (index === (currentIndex + 2) % images.length) return 'small';
    return 'hidden';
  };

  return (
    <div className="imagesilder2-container">
      <IconButton onClick={goToPrevious} className="arrow left-arrow"
        style={{ color: 'rgb(0, 238, 255)' }} // Set the arrow color/>
        >
        <ArrowBackIos />
      </IconButton>
      <div className="imagesilder2-carousel">
        {images.map((image, index) => (
          <div key={index} className={`slide ${getSlideClass(index)}`}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <IconButton onClick={goToNext} className="arrow right-arrow"
        style={{ color: 'rgb(0, 238, 255)' }} // Set the arrow color/>
        >
        <ArrowForwardIos 
        />
      </IconButton>
    </div>
  );
};

export default ImageSlider2;
