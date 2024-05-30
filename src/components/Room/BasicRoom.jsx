import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/SingleRoomwithSharedBathroom.jpg";
// import img2 from "../../assets/images/Loungebar 1.jpg";
import img2 from "../../assets/images/DoubleEnsuite.jpg";
import img3 from "../../assets/images/TwinRoom.jpg";
import img4 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Card from "../common/Card";
import "../../css/BasicRoom.css";
import RoomInfromation from "../home/RoomInformation";
import personIcon2 from "../../assets/icons/two.png";
import bedIcon2 from "../../assets/icons/rest.png";
import bedIcon1 from "../../assets/icons/bed.png";
import personIcon1 from "../../assets/icons/people.png";
import personIcon3 from "../../assets/icons/Three.png";
import UrlLib from "../common/UrlLib";


const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewMoreClick = (room) => {
    setSelectedRoom(room);
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
            // title=SINGLE ROOM WITH SHARED BATHROOM  
            title={
              <>
                SINGLE ROOM WITH SHARED BATHROOM  <img src={personIcon1} alt="Person Icon" className="room-icon" />
                <img src={bedIcon1} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="£48"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
            link={getUrlById(8)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img2}
            // title=DOUBLE ROOM WITH SHARED BATHROOM  
            title={
              <>
                DOUBLE ROOM WITH SHARED BATHROOM  <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="£58"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(3)}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img3}
            // title=TWIN ROOM WITH SHARED BATHROOM  
            title={
              <>
                TWIN ROOM WITH SHARED BATHROOM  <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="£85"
            buttonText="Book Now"
            cardtitle="1x single bed"
            link={getUrlById(3)}
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img4}
            // title="TRIPLE ROOM WITH SHARED BATHROOM"
            title={
              <>
                TRIPLE ROOM WITH SHARED BATHROOM  <img src={personIcon3} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            onViewMoreClick={handleViewMoreClick}
            price="$200"
            buttonText="Book Now"
            cardtitle="3x single bed"
            link={getUrlById(5)}
          />{" "}
        </Col> 
      </Row> 
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <RoomInfromation room={selectedRoom}/>
      </Modal>
      
      <div>
      </div>
    </div>
  );
};

export default BasicRoom;
