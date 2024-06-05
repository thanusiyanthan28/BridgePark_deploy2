import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/SingleRoomwithSharedBathroom.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import RoomInformation from "./RoomInformation";
import img3 from '../../assets/images/Tripleroomwithsharedbathroom.jpg'
import img4 from "../../assets/images/DoubleEnsuite.jpg"
import img5 from "../../assets/images/TwinRoom.jpg"
import img6 from '../../assets/images/TripleEnsuite3singlebeds.jpg'
import UrlLib from "../common/UrlLib";
import { useNavigate } from "react-router-dom";


const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState('');
  const navigate = useNavigate();

  const handleViewMoreClick = (room,url) => {
    setSelectedRoom(room);
    setBookingUrl(url);
    setIsModalVisible(true);
   
  };

  const handleCancel = () => {
   setIsModalVisible(false);
   //navigate('/rooms');
  };

  const getUrlById = (id) => {
    const urlObject = UrlLib.find(url => url.id === id);
    return urlObject ? urlObject.url : '#';
  };

  return (
    <div className="rooms-main-contaner">
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
            title="SINGLE ROOM BASIC"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£200"
            buttonText="Book Now"
            cardtitle="1x Single Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "Single Room",
              imageSource: img1,
            }, getUrlById(2))}
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
            price="£200"
            buttonText="Book Now"
            cardtitle="1x Double Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "DOUBLE BASIC",
              imageSource: img1,
            }, getUrlById(5))}
            link={getUrlById(5)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img3}
            title="TRIPLE BASIC"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£200"
            buttonText="Book Now"
            cardtitle="3x Single Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "TRIPLE BASIC",
              imageSource: img3,
              
            }, getUrlById(10))}
            link={getUrlById(10)}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img4}
            title="DOUBLE ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£200"
            buttonText="Book Now"
            cardtitle="1x Double Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "DOUBLE ENSUITE",
              imageSource: img4,
              
            }, getUrlById(2))}
            link={getUrlById(2)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img5}
            title="TWIN ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£200"
            buttonText="Book Now"
            cardtitle="2x Single Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "TWIN ENSUITE",
              imageSource: img5,
              
            }, getUrlById(11))}
            link={getUrlById(11)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img6}
            title="TRIPLE ENSUITE"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£200"
            buttonText="Book Now"
            cardtitle="3x Single Bed"
            onViewMoreClick={() => handleViewMoreClick({
              title: "TRIPLE ENSUITE",
              imageSource: img6,
            }, getUrlById(9))}
            link={getUrlById(9)}
          />{" "}
        </Col>
      </Row>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
         <RoomInformation room={selectedRoom} bookingUrl={bookingUrl} />
      </Modal>
    </div>
  );
};

export default Room;
