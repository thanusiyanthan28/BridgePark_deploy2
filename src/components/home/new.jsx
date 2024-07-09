import React from 'react';
import { Carousel, Card } from 'antd';
//import 'antd/dist/antd.css';
import '../../css/RoomInformation/new.css'; 

import img1 from "../../assets/RoomTypes/SingleRoom.webp";
import img2 from "../../assets/RoomTypes/DoubleEnsuiteRoom2.webp";
import img3 from "../../assets/RoomTypes/TwlightRoom5.webp";
import img4 from "../../assets/RoomTypes/TwinRoom4.webp";
import img5 from "../../assets/RoomTypes/TwinEnsuite2.webp";
import img6 from "../../assets/RoomTypes/TripleRoomEnsuite3.webp";
import img7 from "../../assets/RoomTypes/DoubleRoom2.webp";
import img8 from "../../assets/RoomTypes/TripleRoom1.webp";

const CustomCarousel = () => {
  return (
    <Card hoverable className="carousel-card-new">
    <Carousel dotPosition="top" className="inner-carousel-new" autoplay autoplaySpeed={2000}>
      <div>
        <img alt="Single Room" src={img1} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Double Ensuite Room 2" src={img2} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Twilight Room 5" src={img3} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Twin Room 4" src={img4} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Twin Ensuite 2" src={img5} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Triple Room Ensuite 3" src={img6} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Double Room 2" src={img7} className="carousel-image-new" />
      </div>
      <div>
        <img alt="Triple Room 1" src={img8} className="carousel-image-new" />
      </div>
    </Carousel>
      
    </Card>
  );
};

export default CustomCarousel;
