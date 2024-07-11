import React, { useState } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import { Row, Col, Modal } from "antd";
import "../../css/Room.css";
import RoomInformation from "./RoomInformation";
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
import TE1 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite1.webp";
import TE2 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite2.webp";
import TE3 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite3.webp";
import TR1 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite3.webp";
import TR2 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite1.webp";
import TR3 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite2.webp";
import TR4 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite4.webp";
import TR5 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite5.webp";
import img6 from "../../assets/RoomTypes/Quaduple room.webp";
import UrlLib from "../common/UrlLib";
import { useNavigate } from "react-router-dom";
import icon11 from "../../assets/icons/bed.png"
import icon22 from "../../assets/icons/two.png"
import CustomCarousel from "./new";


const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const [bookingUrl, setBookingUrl] = useState('');
  const [bathroomType, setBathroomType] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const navigate = useNavigate();

  const handleViewMoreClick = (room, url, id) => {
    setSelectedRoom({
      ...room,
      images: room.images || [] 
    });
    setBookingUrl(url);
    setIsModalVisible(true);
    setSelectedRoomId(id)
    setRoomPrice(room.roomPrice);
    if (room.title.includes('BASIC')) {
      setBathroomType('Shared');
    } else {
      setBathroomType('Private');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getUrlById = (id) => {
    const urlObject = UrlLib.find(url => url.id === id);
    return urlObject ? urlObject.url : '#';
  };

  const roomData = [
    {
      id: 28,
      image: img1,
      title: "SINGLE W SHARED BATHROOM",
      cardTitle: "1x Single Bed",
      imageUrl: getUrlById(2),
      roomPrice: "£68.00",
      NoOfGuests: "01",
      NoOfRooms : "01",
      images: [img1]
    
    },
    {
      id: 29,
      image: DB3,
      title: "DOUBLE W SHARED BATHROOM",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(5),
      roomPrice: "£90.93",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [DB1,DB2,DB3]
    },
    {
      id: 34,
      image: TS1,
      title: "TWIN W SHARED BATHROOM",
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(10),
      roomPrice: "£95.13",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TS1,TS2,TS3,TS4,TS5,TS6,TS7,TS8]
    },
    {
      id: 11,
      image: TE1,
      title: "TWIN W PRIVATE BATHROOM",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(3),
      roomPrice: "£120.82",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TE1,TE2,TE3]
    },
    {
      id: 10,
      image: TR1,
      title: "TRIPLE W PRIVATE BATHROOM",
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
      roomPrice: "£104.95",
      NoOfGuests: "03",
      NoOfRooms : "01",
      images:[TR1,TR2,TR3,TR4,TR5]
    },
    {
      id: 19,
      image: img6,
      title: "QUADUPLE W PRIVATE BATHROOM",
      icon1: icon11,
      icon2: icon22,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
      roomPrice: "£90.00",
      NoOfGuests: "04",
      NoOfRooms : "01",
      images: [img6]
    },
  ];

  return (
    <div className="rooms-main-container">
      <div className="aboutContainer">
        <div className="room-text-wraper">
          {/* <h1 className="aboutH1">OUR ROOMS</h1> */}
          <div className='location-title'>OUR ROOMS</div>
          <div className="rooms-sub-content">
            <p>
              Originally a Grade II-listed building, Bridge Park Hotel is the ideal place to stay, whether you are visiting 
              Wembley or simply looking for accommodation to explore the sites of London. Just a short distance from 
              Wembley Stadium.
            </p>
          </div>
        </div>
      </div>
      <div className="hotelRoomMainDiv">
        <Row gutter={[16, 16]} className="hotelRoom-row">
          {roomData.map((room) => (
            <Col key={room.id} className="hotelRoom-col">
              <HotelRoomCard
                imageSource={room.image}
                title={room.title}
                // icon1={room.icon1}
                // icon2={room.icon2}
                description="Spacious room with a breathtaking view"
                // guests={2}
                status="Available"
                price={room.roomPrice}
                buttonText="Book Now"
                cardtitle={room.cardTitle}
                NoOfGuests={room.NoOfGuests} 
                NoOfRooms={room.NoOfRooms}
                onViewMoreClick={() => handleViewMoreClick({
                  title: room.title,
                  cardTitle: room.cardTitle,
                  id: room.id,
                  images: room.images,
                  roomPrice: room.roomPrice
                }, room.imageUrl, room.id)}
                link={room.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        {selectedRoom && (
          <>
            <RoomInformation
              room={selectedRoom}
              bookingUrl={bookingUrl}
              selectedRoomId={selectedRoomId}
              bathroomType={bathroomType}
              roomPrice={roomPrice}
            />
            {/* <CustomCarousel roomImages={selectedRoom.images} /> */}
          </>
        )}
      </Modal>
    </div>
  );
};

export default Room;
