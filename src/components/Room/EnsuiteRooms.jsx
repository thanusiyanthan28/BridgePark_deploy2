import React, { useState, useEffect } from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/DoubleEnsuite.jpg";
import img2 from "../../assets/images/TwinRoom.jpg";
import img3 from "../../assets/images/TripleEnsuite3singlebeds.jpg";
import img4 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import img5 from "../../assets/images/QuadEnsuitedoubleandtwosinglebeds.jpg";
import img6 from "../../assets/images/QuadEnsuitedoubleandBunk.jpg";
import img7 from "../../assets/images/Untitled Project.jpg";
import img8 from "../../assets/images/TwilightExecroom.jpg";
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
import HotelRoomCardBasicRoom from "../Room/HotelRoomCardBasicRoom";

const EnsuiteRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState("");
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (EnsuiteRoom, url) => {
    setSelectedRoom(EnsuiteRoom);
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

  const EnsuiteroomData = [
    {
      id: 14,
      image: img1,
      title: "DOUBLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon1,
      icon2: bedIcon1,
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(14),
    },
    {
      id: 11,
      image: img2,
      title: "TWIN ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
    },
    {
      id: 9,
      image: img3,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon2,
      icon2: bedIcon2,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
    },
    {
      id: 10,
      image: img4,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x single bed + 1x double bed",
      imageUrl: getUrlById(10),
    },
    {
      id: 10,
      image: img5,
      title: "QUADUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "2x single bed + 1x double bed",
      imageUrl: getUrlById(10),
    },
    {
      id: 10,
      image: img6,
      title: "QUADUPLE ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x double bed + 1x bunk bed",
      imageUrl: getUrlById(10),
    },
    {
      id: 10,
      image: img7,
      title: "EXECUTIVE KING ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Double bed",
      imageUrl: getUrlById(10),
    },
    {
      id: 10,
      image: img8,
      title: "CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM",
      icon1: personIcon3,
      icon2: bedIcon2,
      cardTitle: "1x Superior King Room",
      imageUrl: getUrlById(10),
    },
  ];

  return (
    <div>
      <div className="EnsuiteRoom-cardContainor">
        {isMobile ? (
          <div className="EnsuiteRoom-sitecard">
            <SiteCard />
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
            <h1 className="EnsuiteRoom-heading">ENSUITE ROOMS</h1>
          </div>
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
                  status="Available"
                  price="£200"
                  buttonText="Book Now"
                  cardtitle={Ensuiteroom.cardTitle}
                  onViewMoreClick={() =>
                    handleViewMoreClick(
                      {
                        title: Ensuiteroom.title,
                        imageSource: Ensuiteroom.image,
                      },
                      Ensuiteroom.imageUrl
                    )
                  }
                  link={Ensuiteroom.imageUrl}
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
          <RoomInfromation room={selectedRoom} bookingUrl={bookingUrl} />
        </Modal>
      </div>
    </div>
  );
};

export default EnsuiteRoom;
