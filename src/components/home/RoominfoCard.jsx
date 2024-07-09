import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import img1 from "../../assets/RoomTypes/SingleRoom.webp";
import img2 from "../../assets/RoomTypes/DoubleEnsuiteRoom2.webp";
import img3 from "../../assets/RoomTypes/TwlightRoom5.webp";
import img4 from "../../assets/RoomTypes/TwinRoom4.webp";
import img5 from "../../assets/RoomTypes/TwinEnsuite2.webp";
import img6 from "../../assets/RoomTypes/TripleRoomEnsuite3.webp";
import img7 from "../../assets/RoomTypes/DoubleRoom2.webp";
import img8 from "../../assets/RoomTypes/TripleRoom1.webp";
import '../../css/RoomInformation/RoominfoCard.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

  const images = [
    [img1, img2, img3],  // Images for the first card
    [img4, img5, img6],  // Images for the second card
    [img7, img8, img1]   // Images for the third card
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images[0].length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="room-info-cards">
      <Row gutter={[16, 16]}>
        <Col span={isSmallScreen ? 24 : 12}>
          <Card className="info-card">
            <div className="image-container">
              <img src={images[0][currentIndex]} alt={`Card 1 - Image ${currentIndex + 1}`} />
            </div>
          </Card>
        </Col>
        {!isSmallScreen && (
          <>
            <Col span={6} className="hide-on-small-screen">
              <Card className="info-card">
                <div className="image-container">
                  <img src={images[1][currentIndex]} alt={`Card 2 - Image ${currentIndex + 1}`} />
                </div>
              </Card>
            </Col>
            <Col span={6} className="hide-on-small-screen">
              <Card className="info-card">
                <div className="image-container">
                  <img src={images[2][currentIndex]} alt={`Card 3 - Image ${currentIndex + 1}`} />
                </div>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default Carousel;
