import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import RoomInformation from "./RoomInformation";

const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewMoreClick = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutTextWrapper">
          <h1 className="aboutH1">OUR ROOMS</h1>
          <div className="paragraphContainer">
            <p>
              Originally a Grade ii listed building, Bridge Park Hotel is the
              ideal place to stay whether you are visiting Wembley or simply
              looking for accommodation to explore the sites of London. Just a
              short distance from Wembley Stadium
            </p>
          </div>
        </div>
      </div>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Single Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Single Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Luxury Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Luxury Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Single Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Single Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Luxury Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Luxury Room",
              description: "Spacious room with a breathtaking view",
            })}
          />{" "}
        </Col>
      </Row>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <RoomInformation room={selectedRoom}/>
      </Modal>
    </div>
  );
};

export default Room;
