import React, { useState } from "react";
import RoomCard from "../../components/HomeRoom/RoomCard";
import HotelAllCards from "../Allrooms/AllCards";
import { Row, Col, Modal } from "antd";
import "./RoomInfo.css";
//import RoomInformation from "./RoomInformation";
import img1 from "../../assets/RoomTypes/SingleRoom/SingleRoom.webp";
import DB3 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom3.webp"
import DB1 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom1.webp";
import DB2 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom2.webp";
import TS1 from '../../assets/RoomTypes/TwinRoom/TwinRoom5.webp'
import TS2 from '../../assets/RoomTypes/TwinRoom/TwinRoom1.webp'
import TS3 from '../../assets/RoomTypes/TwinRoom/TwinRoom2.webp'
import TS4 from '../../assets/RoomTypes/TwinRoom/TwinRoom3.webp'
import TS5 from '../../assets/RoomTypes/TwinRoom/TwinRoom4.webp'
import TS6 from '../../assets/RoomTypes/TwinRoom/TwinRoom6.webp'
import TS7 from '../../assets/RoomTypes/TwinRoom/TwinRoom7.webp'
import TS8 from '../../assets/RoomTypes/TwinRoom/TwinRoom8.webp'
import TE1 from "../../assets/RoomTypes/TripleBasic/TripleRoom1.webp";
import TE2 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite2.webp";
import TE3 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite3.webp";
import TR1 from "../../assets/RoomTypes/Quaduple room.webp";
import TR2 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite1.webp";
import TR3 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite2.webp";
import TR4 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite4.webp";
import TR5 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite5.webp";
import img6 from "../../assets/RoomTypes/Quad_2.webp";
import UrlLib from "../common/UrlLib";
import { useNavigate } from "react-router-dom";
import SinBed from "../../assets/icons/single_bed.png"
import DoubBed from "../../assets/icons/bed_double.png"
import KinBed from "../../assets/icons/king_bed.png"
import RoomAll from "../Allrooms/AllRooms";
//import CustomCarousel from "./new";


const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
 

  const handleViewMoreClick = (cardId) => {
    setSelectedCardId(cardId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const roomData = [
    {
      id: 28,
      image: img1,
      title: "Single Room",
      cardTitle: " SINGLE ROOM",
      roomPrice: "£48",
      NoOfGuests: "01",
      NoOfRooms : "01",
      images: [img1],
      bedIcons: [SinBed],
      cardId:"01",
    
    },
    {
      id: 29,
      image: DB3,
      title: "Double Room With Private Bathroom",
      cardTitle: "DOUBLE ROOM",
      roomPrice: "£58",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [DB1,DB2,DB3],
      bedIcons: [DoubBed],
      cardId:"02",
    },
    {
      id: 34,
      image: TS1,
      title: "Twin Room With Shared Bathroom",
      cardTitle: "TWIN ROOM",
      roomPrice: "£60",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TS1,TS2,TS3,TS4,TS5,TS6,TS7,TS8],
      bedIcons: [SinBed, SinBed],
      cardId:"03",
    },
    {
      id: 11,
      image: TE1,
      title: "Triple Room With Private Bathroom",
      cardTitle: "TRIPLE ROOM",
      roomPrice: "£68",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TE1,TE2,TE3],
      bedIcons: [SinBed, SinBed],
      cardId:"04",
    },
    {
      id: 10,
      image: TR1,
      title: "Quadruple Room With Private Bathroom",
      cardTitle: "QUADRUPLE ROOM",
      roomPrice: "£97",
      NoOfGuests: "03",
      NoOfRooms : "01",
      images:[TR1,],
      bedIcons: [DoubBed,SinBed],
      cardId:"05",
    },
    {
      id: 5,
      image: img6,
      title: "Executive King Room With Private Bathroom",
      cardTitle: "EXECUTIVE KING ROOM",
      roomPrice: "£120",
      NoOfGuests: "04",
      NoOfRooms : "01",
      images: [img6],
      bedIcons: [DoubBed,SinBed, SinBed],
      cardId:"06",
    },
  ];

  return (
    <div className="rooms-main-container">
      <div className="aboutContainer">
        <div className="room-text-wraper">
          {/* <h1 className="aboutH1">OUR ROOMS</h1> */}
          <div className='location-title'>Our Rooms</div>
          {/* <div className="rooms-sub-content">
            <p>
              Originally a Grade II-listed building, Bridge Park Hotel is the ideal place to stay, whether you are visiting 
              Wembley or simply looking for accommodation to explore the sites of London. Just a short distance from 
              Wembley Stadium.
            </p>
          </div> */}
        </div>
      </div>
      <div className="hotelRoomMainDiv">
        <Row gutter={[16, 16]} className="hotelRoom-row">
          {roomData.map((room) => (
            <Col key={room.id} className="hotelRoom-col">
              <RoomCard
                imageSource={room.image}
                price={room.roomPrice}
                cardtitle={room.cardTitle}
               
                onViewMoreClick={() => handleViewMoreClick(room.cardId)}
              />
            </Col>
          ))}
        </Row>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="40%"
      >
         {selectedCardId && <RoomAll selectedCardId={selectedCardId} />}
      </Modal>
    </div>
  );
};

export default Room;
