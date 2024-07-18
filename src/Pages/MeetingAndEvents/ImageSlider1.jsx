import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider1.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
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
import image11 from "../../assets/RoomTypes/Garden/Garden1.webp";
import image12 from "../../assets/RoomTypes/Garden/Garden2.webp";
import image13 from "../../assets/RoomTypes/Garden/Garden3.webp";
import image14 from "../../assets/RoomTypes/Garden/Garden5.webp";
import image15 from "../../assets/RoomTypes/Garden/Garden6.webp";

const ImageSlider1 = () => {
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
    image11,
    image12,
    image13,
    image14,
    image15,
  ];
  const [index, setIndex] = useState(images.length - 3);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    // Calculate the next start index with cyclic rotation
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    // Calculate the previous start index with cyclic rotation
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="image-galley-slider-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {/* <h1 className='image-galley-title'>Image Gallery</h1> */}
      <div className="image-galley-arrow image-galley-left" onClick={handlePrev}><LeftOutlined style={{ fontSize: 25, color: '#08c' }}/></div>
      <div className="image-galley-slider">
        {[...images, ...images, ...images].slice(startIndex, startIndex + 3).map((image, i) => (
          <div key={i} className={`image-galley-slider-image-wrapper image-galley-size-${i + 1}`}>
            <img src={image} alt={`image-galley-Slide ${startIndex + i}`} className="image-galley-slider-image" />
          </div>
        ))}
      </div>
      <div className="image-galley-arrow image-galley-right" onClick={handleNext}><RightOutlined style={{ fontSize: 25, color: '#08c' }}/></div>
    </div>
  );
};

export default ImageSlider1;
