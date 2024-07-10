import React from 'react';
import { Carousel } from 'antd';
import '../../css/RoomInformation/new.css'

const CustomCarousel = ({ roomImages }) => {
  if (!roomImages || roomImages.length === 0) {
    return <div>No images available</div>;
  }

  //console.log("roomImages", roomImages);

  return (
    <div className='new-main'>
    <Carousel autoplay autoplaySpeed={1000} effect="scrollx" className="new-custom-carousel">
      {roomImages.map((image, index) => (
        <div key={index} className="carousel-slide">
        <img src={image} alt={`Room Image ${index}`} className="carousel-image" />
      </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CustomCarousel;
