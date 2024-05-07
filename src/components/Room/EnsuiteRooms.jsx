import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Card from "../common/Card";
import "../../css/EnsuiteRooms.css";
import Hearder2 from "../common/Header2";
import RoomInfromation from "../home/RoomInformation";

const EnsuiteRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="EnsuiteRoom-container">
      <div>
        <Hearder2/>
      </div>
      <div>
        <Card/>
      </div>
      <div className="aboutContainer">
      
        <div className="aboutTextWrapper">
          <h1 className="aboutH1">ENSUITE ROOMS</h1>
        </div>
      </div>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="DOUBLE ENSUITE"
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
            title="TWIN ENSUITE"
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
            title="TRIPLE ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="QUAD ENSUITE"
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
            title="DOUBLE & BUNK ENSUITE"
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
            title="EXECUTIVE KING ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
      </Row>
	  <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="CHAMBRE OF TWILIGHT"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
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

export default EnsuiteRoom;
