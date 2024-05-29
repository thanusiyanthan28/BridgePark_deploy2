import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
// import img1 from "../../assets/images/Loungebar 1.jpg";
import img1 from "../../assets/images/DoubleEnsuite.jpg";
import img2 from "../../assets/images/TwinRoom.jpg";
import img3 from "../../assets/images/TripleEnsuite3singlebeds.jpg";
import img4 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import img5 from "../../assets/images/QuadEnsuitedoubleandtwosinglebeds.jpg";
import img6 from "../../assets/images/QuadEnsuitedoubleandBunk.jpg";
import img7 from "../../assets/images/Untitled Project.jpg";
import img8 from "../../assets/images/TwilightExecroom.jpg";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import Card from "../common/Card";
import "../../css/EnsuiteRooms.css";
import RoomInfromation from "../home/RoomInformation";
import personIcon1 from "../../assets/icons/people.png";
import personIcon2 from "../../assets/icons/two.png";
import personIcon3 from "../../assets/icons/Three.png";
import bedIcon1 from "../../assets/icons/bed.png";
import bedIcon2 from "../../assets/icons/rest.png";


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
            // title="DOUBLE ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                DOUBLE ROOM WITH PRIVATE BATHROOM  <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x double bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img2}
            // title="TWIN ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                TWIN ROOM WITH PRIVATE BATHROOM <img src={personIcon2} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="2x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img3}
            // title="TRIPLE ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                TRIPLE ROOM WITH PRIVATE BATHROOM  <img src={personIcon3} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
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
        {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img4}
            // title="TRIPLE ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                TRIPLE ROOM WITH PRIVATE BATHROOM  <img src={personIcon3} alt="Person Icon" className="room-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icon" />
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed + 1x double bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img5}
            // title="QUADUPLE ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                QUADUPLE ROOM WITH PRIVATE BATHROOM  <img src={personIcon3} alt="Person Icon" className="rooms-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icons"/>
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="2x single bed + 1x double bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img6}
            // title="QUADUPLE ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                QUADUPLE ROOM WITH PRIVATE BATHROOM  <img src={personIcon2} alt="Person Icon" className="rooms-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icons"/>
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x double bed + 1x bunk bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------------------------------- */}
	  <Row className="hotelRoomMainRow">
    <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img7}
            // title="EXECUTIVE KING ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                EXECUTIVE KING ROOM WITH PRIVATE BATHROOM  <img src={personIcon1} alt="Person Icon" className="rooms-icon" />
                <img src={bedIcon1} alt="Bed Icon" className="room-icons"/>
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x double bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img8}
            // title="CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM"
            title={
              <>
                CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM  <img src={personIcon2} alt="Person Icon" className="rooms-icon" />
                <img src={bedIcon2} alt="Bed Icon" className="room-icons"/>
              </>
            }
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x superior King Room"
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
