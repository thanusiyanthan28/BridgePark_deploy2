import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Card from "../common/Card";
import "../../css/BasicRoom.css";
import RoomInfromation from "../home/RoomInformation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import personIcon from "../../assets/icons/two.png";
import bedIcon from "../../assets/icons/rest.png";

const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="BasicRoom-containor">
      <div>
        <Card/>
      </div>
      <div className="aboutContainer" style={{ textAlign: 'left' }}>
        <div className="aboutTextWrapper" >
          <h1 className="aboutH1" >BASIC ROOMS</h1>
        </div>
      </div>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            // title=SINGLE ROOM WITH SHARED BATHROOM  
            title={
              <>
                SINGLE ROOM WITH SHARED BATHROOM  <img src={personIcon} alt="Person Icon" className="room-icon" />
                <img src={bedIcon} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            // title="DOUBLE ROOM WITH SHARED BATHROOM"
            title={
              <>
                DOUBLE ROOM WITH SHARED BATHROOM  <img src={personIcon} alt="Person Icon" className="room-icon" />
                <img src={bedIcon} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            // title="TWIN ROOM WITH SHARED BATHROOM"
            title={
              <>
                TWIN ROOM WITH SHARED BATHROOM  <img src={personIcon} alt="Person Icon" className="room-icon" />
                <img src={bedIcon} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="2x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            // title="TRIPLE ROOM WITH SHARED BATHROOM"
            title={
              <>
                TRIPLE ROOM WITH SHARED BATHROOM  <img src={personIcon} alt="Person Icon" className="room-icon" />
                <img src={bedIcon} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="3x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col> 
      </Row> 
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <RoomInfromation/>
      </Modal>
      
    </div>
  );
};

export default BasicRoom;
