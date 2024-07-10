import React from 'react';
import { Carousel } from 'antd';
import '../../css/RoomInformation/new.css'

const CustomCarousel = ({ roomImages }) => {
  if (!roomImages || roomImages.length === 0) {
    return <div>No images available</div>;
  }

  //console.log("roomImages", roomImages);

  return (
    <Carousel autoplay autoplaySpeed={1000} effect="scrollx" className="custom-carousel">
      {roomImages.map((image, index) => (
        <div key={index} className="carousel-slide">
        <img src={image} alt={`Room Image ${index}`} className="carousel-image" />
      </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
