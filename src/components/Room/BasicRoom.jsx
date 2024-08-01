import React, { useState, useEffect } from "react";
import SR from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg4.webp";
import SR2 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg3.webp";
import SR1 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg2.webp";
import SR3 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg1.webp";
import SR4 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg5.webp";
import DB1 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom3.webp";
import DB2 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom2.webp";
import DB3 from "../../assets/RoomTypes/DoubleBasic/DoubleRoom1.webp";
import TW5 from "../../assets/RoomTypes/TwinRoom/TwinRoom5.webp";
import TW1 from "../../assets/RoomTypes/TwinRoom/TwinRoom1.webp";
import TW2 from "../../assets/RoomTypes/TwinRoom/TwinRoom2.webp";
import TW3 from "../../assets/RoomTypes/TwinRoom/TwinRoom3.webp";
import TW4 from "../../assets/RoomTypes/TwinRoom/TwinRoom4.webp";
import TW6 from "../../assets/RoomTypes/TwinRoom/TwinRoom6.webp";
import TW7 from "../../assets/RoomTypes/TwinRoom/TwinRoom7.webp";
import TW8 from "../../assets/RoomTypes/TwinRoom/TwinRoom8.webp";
import TB2 from "../../assets/RoomTypes/TripleBasic/TripleRoom2.webp";
import TB1 from "../../assets/RoomTypes/TripleBasic/TripleRoom1.webp";
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
import HomeCard from "../Sitecard/homeCard";

const BasicRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingUrl, setBookingUrl] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const [bathroomType, setBathroomType] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const handleViewMoreClick = (Basicroom, url , id) => {
    setSelectedRoom(Basicroom);
    setBookingUrl(url);
    setIsModalVisible(true);
    setSelectedRoomId(id);
    setRoomPrice(Basicroom.roomPrice);
    if (Basicroom.title.includes('SHARED')) {
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
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const BasicroomData = [
    {
      id: 28,
      image: SR,
      title: "SINGLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon1,
      icon2:bedIcon1,
      cardTitle: "1 x SINGLE BED",
      imageUrl: getUrlById(2),
      BroomPrice: "£48",
      NoOfGuests: "01",
      images: [SR,SR1,SR2,SR3,SR4]
    },
    {
      id: 29,
      image: DB1,
      title: "DOUBLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon2,
      icon2:bedIcon2,
      cardTitle: "1 x DOUBLE BED",
      imageUrl: getUrlById(5),
      BroomPrice: "£58",
      NoOfGuests: "02",
      images: [DB1,DB2,DB3],
      room_link:"https://direct-book.com/properties/bridgeparkdirect?locale=31919https://direct-book.com/properties/bridgeparkdirect?locale=en&items[0][adults]=1&items[0][children]=0&items[0][infants]=0&items[0][rateId]=31919&checkInDate=2024-05-20&checkOutDate=2024-05-21&currency=GBP&trackPage=no"
    },
    {
      id: 34,
      image: TW5,
      title: "TWIN ROOM WITH SHARED BATHROOM",
      icon1:personIcon2,
      icon2:bedIcon2,
      cardTitle: "2 x SINGLE BEDS",
      imageUrl: getUrlById(11),
      BroomPrice: "£60",
      NoOfGuests: "02",
      images: [TW1,TW2,TW3,TW4,TW5,TW6,TW7,TW8]
    },
    {
      id: 31,
      image: TB2,
      title: "TRIPLE ROOM WITH SHARED BATHROOM",
      icon1:personIcon3,
      icon2:bedIcon2,
      cardTitle: "2 x SINGLE BEDS",
      imageUrl: getUrlById(9),
      BroomPrice: "£85",
      NoOfGuests: "03",
      images: [TB1,TB2]
    },
  ];

  return (
    <div >
      <div className="BasicRoom-cardContainor">
        {isMobile ? (
          <div className="BasicRoom-sitecard">
            {/* <SiteCard selectedRoomId={selectedRoomId} /> */}
            <HomeCard />
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
                status="Check"
                NoOfGuests={Basicroom.NoOfGuests} 
                price={Basicroom.BroomPrice}
                buttonText="Book Now"
                cardtitle={Basicroom.cardTitle}
                onViewMoreClick={() => handleViewMoreClick({
                  title: Basicroom.title,
                  imageSource: Basicroom.image,
                  cardTitle:Basicroom.cardTitle,
                  id: Basicroom.id,
                  roomPrice: Basicroom.BroomPrice,
                  images: Basicroom.images,
                  room_link:Basicroom.room_link
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
        <RoomInformation 
        room={selectedRoom} 
        bookingUrl={bookingUrl} 
        selectedRoomId={selectedRoomId}
        bathroomType={bathroomType}
        roomPrice={roomPrice}
        />
      </Modal>
    </div>
  );
};

export default BasicRoom;