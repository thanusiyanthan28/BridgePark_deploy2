import React, { useState, useEffect } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/RoomTypes/DoubleRoom3.webp";
import img2 from "../../assets/RoomTypes/TwinEnsuite1.webp";
import img3 from "../../assets/RoomTypes/TripleRoom1.webp";
import img4 from "../../assets/RoomTypes/TripleRoomEnsuite3.webp";
import img5 from "../../assets/RoomTypes/Quaduple room.webp";
import img6 from "../../assets/images/QuadEnsuitedoubleandBunk.webp";
import img7 from "../../assets/RoomTypes/Quad_2.webp";
import img8 from "../../assets/RoomTypes/TwlightRoom2.webp";
import { Row, Col, Modal } from "antd";
import Card from "../common/Card";
import "../../css/EnsuiteRooms.css";
import RoomInfromation from "../home/RoomInformation";
import personIcon1 from "../../assets/icons/people.png";
import personIcon2 from "../../assets/icons/two.png";
import personIcon3 from "../../assets/icons/Three.png";
import bedIcon1 from "../../assets/icons/bed.png";
import bedIcon2 from "../../assets/icons/rest.png";
import UrlLib from "../common/UrlLib";
import SiteCard from "../Sitecard/siteCard";
import HouseRules from "../common/HomeRules";
import HotelRoomCardBasicRoom from "../Room/HotelRoomCardBasicRoom";

const EnsuiteRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (EnsuiteRoom, url ,id) => {
    setSelectedRoom(EnsuiteRoom);
    setBookingUrl(url);
    setIsModalVisible(true);
    setSelectedRoomId(id)
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

  const EnsuiteroomData = [
    {
      id: 14,
      image: img1,
      title: "DOUBLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon1,
      icon2: bedIcon1,
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(14),
      EroomPrice: "£111.52",
    },
    {
      id: 11,
      image: img2,
      title: "TWIN ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
      EroomPrice: "£120.82",
    },
    {
      id: 9,
      image: img3,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
      EroomPrice: "£99.00",
    },
    {
      id: 10,
      image: img4,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x single bed + 1x double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£104.95",
    },
    {
      id: 19,
      image: img5,
      title: "QUADUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "2x single bed + 1x double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£90.00",
    },
    {
      id: 20,
      image: img6,
      title: "QUADUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x double bed + 1x bunk bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£100.75",
    },
    {
      id: 25,
      image: img7,
      title: "EXECUTIVE KING ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£121.39",
    },
    {
      id: 4,
      image: img8,
      title: "CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Superior King Room",
      imageUrl: getUrlById(10),
      EroomPrice: "£126.45", 
    },
  ];

  return (
    <div>
      <div className="EnsuiteRoom-cardContainor">
        {isMobile ? (
          <div className="EnsuiteRoom-sitecard">
             <SiteCard selectedRoomId={selectedRoomId} />
          </div>
        ) : null}
        {!isMobile ? (
          <div className="EnsuiteRoom-card">
            <Card title="Card Title 2" description="Description for Card 2" />
          </div>
        ) : null}
      </div>
    
    <div className="EnsuiteRoom-Main-container">
      <div className="EnsuiteRoom-Container">
        <div className="EnsuiteRoom-TextWrapper">
        <div className="about-sub-content">
             <h3 style={{textAlign:'center'}}>Special Offer</h3>
              <p style={{textAlign:'center'}}>Book now for exclusive discounted online rates. Whether you're making a last minute booking or a long stay reservation, we have a discount for you! Book through our secure website for instant confirmation. Then use our online portal to view, modify or cancel your booking.</p>
        </div>
          <h1 className="EnsuiteRoom-heading">ENSUITE ROOMS</h1>
        </div>
        <div className="EnsuiteRoomMainDiv">
          <Row gutter={[16, 16]} className="EnsuiteRoom-row">
            {EnsuiteroomData.map((Ensuiteroom) => (
              <Col key={Ensuiteroom.id} className="EnsuiteRoom-col">
                <HotelRoomCardBasicRoom
                  imageSource={Ensuiteroom.image}
                  title={Ensuiteroom.title}
                  icon1={Ensuiteroom.icon1}
                  icon2={Ensuiteroom.icon2}
                  description="Spacious room with a breathtaking view"
                  guests={2}
                  status="Check"
                  price={Ensuiteroom.EroomPrice}
                  buttonText="Book Now"
                  cardtitle={Ensuiteroom.cardTitle}
                  onViewMoreClick={() =>
                    handleViewMoreClick(
                      {
                        title: Ensuiteroom.title,
                        imageSource: Ensuiteroom.image,
                        id: Ensuiteroom.id
                      },
                      Ensuiteroom.imageUrl,Ensuiteroom.id
                    )
                  }
                  link={Ensuiteroom.imageUrl}
                />
              </Col>
            ))}
          </Row>
        </div>
        <HouseRules />
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width="80%"
        >
          <RoomInfromation room={selectedRoom} bookingUrl={bookingUrl} selectedRoomId={selectedRoomId}/>
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default EnsuiteRoom;