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
import icon11 from "../../assets/icons/bed.png"
import icon22 from "../../assets/icons/two.png"


const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const [bookingUrl, setBookingUrl] = useState('');
  const [bathroomType, setBathroomType] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const navigate = useNavigate();

  const handleViewMoreClick = (room, url, id) => {
    setSelectedRoom(room);
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
      id: 2,
      image: img1,
      title: "SINGLE ROOM BASIC",
      cardTitle: "1x Single Bed",
      imageUrl: getUrlById(2),
      roomPrice: "£48",
    
    },
    {
      id: 5,
      image: img1,
      title: "DOUBLE BASIC",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(5),
      roomPrice: "£58",
    },
    {
      id: 10,
      image: img3,
      title: "TRIPLE BASIC",
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(10),
      roomPrice: "£60",
    },
    {
      id: 3,
      image: img4,
      title: "DOUBLE ENSUITE",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(3),
      roomPrice: "£65",
    },
    {
      id: 11,
      image: img5,
      title: "TWIN ENSUITE",
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
      roomPrice: "£68",
    },
    {
      id: 9,
      image: img6,
      title: "TRIPLE ENSUITE",
      icon1: icon11,
      icon2: icon22,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
      roomPrice: "£97",
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
                guests={2}
                status="Available"
                price={room.roomPrice}
                buttonText="Book Now"
                cardtitle={room.cardTitle}
                onViewMoreClick={() => handleViewMoreClick({
                  title: room.title,
                  cardTitle: room.cardTitle,
                  imageSource: room.image,
                  id: room.id,
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
         <RoomInformation room={selectedRoom} bookingUrl={bookingUrl} selectedRoomId={selectedRoomId} bathroomType={bathroomType} roomPrice={roomPrice}/>
      </Modal>
    </div>
  );
};

export default Room;
