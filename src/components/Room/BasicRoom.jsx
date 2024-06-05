import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import RoomInformation from "../home/RoomInformation";
import personIcon2 from "../../assets/icons/two.png";
import bedIcon2 from "../../assets/icons/rest.png";
import bedIcon1 from "../../assets/icons/bed.png";
import personIcon1 from "../../assets/icons/people.png";
import personIcon3 from "../../assets/icons/Three.png";
import UrlLib from "../common/UrlLib";
import SiteCard from "../Sitecard/siteCard";

const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState('');
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (room, url) => {
    setSelectedRoom(room);
    setBookingUrl(url);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getUrlById = (id) => {
    const urlObject = UrlLib.find((url) => url.id === id);
    return urlObject ? urlObject.url : "#";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const BasicroomData = [
    {
      id: 2,
      image: img1,
      title: "SINGLE ROOM BASIC",
      cardTitle: "1x Single Bed",
      imageUrl: getUrlById(2),
    },
    {
      id: 5,
      image: img2,
      title: "DOUBLE BASIC",
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(5),
    },
    {
      id: 11,
      image: img3,
      title: "TWIN ENSUITE",
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
    },
    {
      id: 9,
      image: img4,
      title: "TRIPLE ENSUITE",
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
    },
  ];

  return (
    <div>
      <div className="BasicRoom-cardContainor">
        {isMobile ? (
          <div className="BasicRoom-sitecard">
            <SiteCard />
          </div>
        ) : null}
        {!isMobile ? (
          <div className="BasicRoom-card">
            <Card title="Card Title 2" description="Description for Card 2" />
          </div>
        ) : null}
      </div>
      <div className="BasicRoom-containor">
        <div className="aboutContainer">
          <div className="BasicRoom-TextWrapper">
            <h1 className="BasicRoom-aboutH1">BASIC ROOMS</h1>
          </div>
        </div>
      </div>
      <div className="hotelRoomMainDiv">
        <Row gutter={[16, 16]} className="BasicRoom-row ">
          {BasicroomData.map((room) => (
            <Col key={room.id} className="hotelRoom-col">
              <HotelRoomCard
                imageSource={room.image}
                title={room.title}
                description="Spacious room with a breathtaking view"
                guests={2}
                status="Available"
                price="£200"
                buttonText="Book Now"
                cardtitle={room.cardTitle}
                onViewMoreClick={() =>
                  handleViewMoreClick(
                    {
                      title: room.title,
                      imageSource: room.image,
                    },
                    room.imageUrl
                  )
                }
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
        <RoomInformation room={selectedRoom} bookingUrl={bookingUrl} />
      </Modal>
    </div>
  );
};

export default BasicRoom;
