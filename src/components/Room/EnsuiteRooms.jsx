import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Card from "../common/Card";
import "../../css/EnsuiteRooms.css";
import UrlLib from "../common/UrlLib";

const EnsuiteRoom = () => {
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
    <div className="EnsuiteRoom-container">
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
            price="£65"
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
            title="TWIN ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£68"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(11)}
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
            price="£97"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(9)}
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
            price="£120"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(19)}
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
            price="£110"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(20)}
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
            price="£120"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(16)}
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
            price="£125"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(23)}
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
    </div>
  );
};

export default EnsuiteRoom;
