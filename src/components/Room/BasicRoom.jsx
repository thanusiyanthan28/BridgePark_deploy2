import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Header2 from "../common/Header2";
import Card from "../common/Card";
import Footer from "../common/Footer";
import "../../css/BasicRoom.css";
import UrlLib from "../common/UrlLib";


const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getUrlById = (id) => {
    const urlObject = UrlLib.find(url => url.id === id);
    return urlObject ? urlObject.url : '#';
  };

  return (
    <div className="BasicRoom-containor">
      <div>
        {/* <Header2/> */}
      </div>
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
            title="SINGLE ROOM BASIC"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£48"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
            link={getUrlById(2)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="DOUBLE BASIC"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£58"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(3)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="TRIPLE BASIC"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£85"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(10)}
          />{" "}
        </Col>
      </Row>
      
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
      </Modal>
      <div>
      </div>
    </div>
  );
};

export default BasicRoom;
