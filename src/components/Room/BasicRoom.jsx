import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/SingleRoomwithSharedBathroom.jpg";
// import img2 from "../../assets/images/Loungebar 1.jpg";
import img2 from "../../assets/images/DoubleEnsuite.jpg";
import img3 from "../../assets/images/TwinRoom.jpg";
import img4 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import { Row, Col, Modal } from "antd";
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
import HotelRoomCardBasicRoom from "../Room/HotelRoomCardBasicRoom";
import HouseRules from "../common/HomeRules";

const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const handleViewMoreClick = (Basicroom, url , id) => {
    setSelectedRoom(Basicroom);
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

  const BasicroomData = [
    {
      id: 2,
      image: img1,
      title: "SINGLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon1,
      icon2:bedIcon1,
      cardTitle: "1x Single Bed",
      imageUrl: getUrlById(2),
      BroomPrice: "£48",
    },
    {
      id: 5,
      image: img2,
      title: "DOUBLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon2,
      icon2:bedIcon2,
      cardTitle: "1x Double Bed",
      imageUrl: getUrlById(5),
      BroomPrice: "£58",
    },
    {
      id: 11,
      image: img3,
      title: "TWIN ROOM WITH SHARED BATHROOM",
      icon1:personIcon2,
      icon2:bedIcon2,
      cardTitle: "2x Single Bed",
      imageUrl: getUrlById(11),
      BroomPrice: "£60",
    },
    {
      id: 9,
      image: img4,
      title: "TRIPLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon3,
      icon2:bedIcon2,
      cardTitle: "3x Single Bed",
      imageUrl: getUrlById(9),
      BroomPrice: "£85",
    },
  ];

  return (
    <div >
      <div className="BasicRoom-cardContainor">
        {isMobile ? (
          <div className="BasicRoom-sitecard">
            <SiteCard selectedRoomId={selectedRoomId} />
          </div>
        ) : null}
        {!isMobile ? (
          <div className="BasicRoom-card">
            <Card title="Card Title 2" description="Description for Card 2" />
          </div>
        ) : null}
      </div>
      <div className="BasicRoom-containor">
        <div className="">

          <div className="BasicRoom-TextWrapper">
          <div className="about-sub-content">
                                <h3 style={{textAlign:'center'}}>Lowest Price Guaranteed</h3>
                                <p style={{textAlign:'center'}}>Book here on for peace of mind that you're getting the best possible deal. Thanks to our Lowest Price Guarantee you can rest assured that you'll pay the cheapest rate possible. Book to secure your savings today!</p>
                    </div>
            {/* <h1 className="BasicRoom-aboutH1">BASIC ROOMS</h1> */}
            <div className='location-title'>BASIC ROOMS</div>
          </div>
        </div>
      </div>
      <div className="BsicRoomMainDiv">
        <Row gutter={[16, 16]} className="BasicRoom-row">
          {BasicroomData.map((Basicroom) => (
            <Col key={Basicroom.id} className="BasicRoom-col">
              <HotelRoomCardBasicRoom
                imageSource={Basicroom.image}
                title={Basicroom.title}
                icon1={Basicroom.icon1}
                icon2={Basicroom.icon2}
                description="Spacious room with a breathtaking view"
                guests={2}
                status="Available"
                price={Basicroom.BroomPrice}
                buttonText="Book Now"
                cardtitle={Basicroom.cardTitle}
                onViewMoreClick={() => handleViewMoreClick({
                  title: Basicroom.title,
                  imageSource: Basicroom.image,
                  id: Basicroom.id
                }, Basicroom.imageUrl,Basicroom.id)}
                link={Basicroom.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </div>
     <div style={{widows:'100%'}}> <HouseRules /></div>
      
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <RoomInformation room={selectedRoom} bookingUrl={bookingUrl} selectedRoomId={selectedRoomId}/>
      </Modal>
    </div>
  );
};

export default BasicRoom;
