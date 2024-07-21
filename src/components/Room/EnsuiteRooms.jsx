import React, { useState, useEffect } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import DB3 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom3.webp";
import DB1 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom1.webp";
import DB2 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom2.webp";
import TWE1 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite1.webp";
import TWE2 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite2.webp";
import TWE3 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite3.webp";
import TB1 from "../../assets/RoomTypes/TripleBasic/TripleRoom1.webp";
import TB2 from "../../assets/RoomTypes/TripleBasic/TripleRoom2.webp";
import TE3 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite3.webp";
import TE1 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite1.webp";
import TE2 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite2.webp";
import TE4 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite4.webp";
import TE5 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite5.webp";
import QD from "../../assets/RoomTypes/Quaduple room.webp";
import img6 from "../../assets/images/QuadEnsuitedoubleandBunk.webp";
import img7 from "../../assets/RoomTypes/Quad_2.webp";
import TW2 from "../../assets/RoomTypes/Twlight/TwlightRoom2.webp";
import TW1 from "../../assets/RoomTypes/Twlight/TwlightRoom1.webp";
import TW3 from "../../assets/RoomTypes/Twlight/TwlightRoom3.webp";
import TW4 from "../../assets/RoomTypes/Twlight/TwlightRoom4.webp";
import TW5 from "../../assets/RoomTypes/Twlight/TwlightRoom5.webp";
import TW6 from "../../assets/RoomTypes/Twlight/TwlightRoom6.webp";
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
  const [bathroomType, setBathroomType] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (EnsuiteRoom, url ,id) => {
    setSelectedRoom(EnsuiteRoom);
    setBookingUrl(url);
    setIsModalVisible(true);
    setSelectedRoomId(id);
    setRoomPrice(EnsuiteRoom.roomPrice);
    if (EnsuiteRoom.title.includes('SHARED')) {
      setBathroomType('Shared');
    } else {
      setBathroomType('Private');
    }
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
      id: 27,
      image: DB3,
      title: "DOUBLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon1,
      icon2: bedIcon1,
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(14),
      EroomPrice: "£65",
      images: [DB3,DB1,DB2]
    },
    {
      id: 11,
      image: TWE1,
      title: "TWIN ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
      EroomPrice: "£68",
      images:[TWE1,TWE2,TWE3]
    },
    {
      id: 31,
      image: TB1,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
      EroomPrice: "£92",
      images: [TB1,TB2]
    },
    {
      id: 30,
      image: TE3,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x single bed + 1x double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£97",
      images: [TE1,TE2,TE3,TE4,TE5]
    },
    {
      id: 32,
      image: QD,
      title: "QUADRUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "2x single bed + 1x double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£120",
      images: [QD]
    },
    {
      id: 33,
      image: img6,
      title: "QUADRUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x double bed + 1x bunk bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£110",
      images:[img6]
    },
    {
      id: 4,
      image: img7,
      title: "EXECUTIVE KING ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Double bed",
      imageUrl: getUrlById(10),
      EroomPrice: "£120",
      images: [img7]
    },
    {
      id: 4,
      image: TW2,
      title: "CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Superior King Room",
      imageUrl: getUrlById(10),
      EroomPrice: "£125", 
      images:[TW1,TW2,TW3,TW4,TW5,TW6]
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
                        id: Ensuiteroom.id,
                        cardTitle:Ensuiteroom.cardTitle,
                        images: Ensuiteroom.images,
                        roomPrice: Ensuiteroom.EroomPrice,
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
          <RoomInfromation
           room={selectedRoom}
            bookingUrl={bookingUrl}
             selectedRoomId={selectedRoomId}
             bathroomType={bathroomType}
             roomPrice={roomPrice}
             />
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default EnsuiteRoom;