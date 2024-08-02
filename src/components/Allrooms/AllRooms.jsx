import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import "./AllRooms.css";
import RoomInformation from "../home/RoomInformation";
import img1 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg4.webp";
import img2 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg2.webp";
import img3 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg3.webp";
import img4 from "../../assets/Rooms/SingleRoomWithSharedBathroom/SingleRoomWithSharedBathroomImg1.webp";
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
import TWE1 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite1.webp";
import TWE2 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite2.webp";
import TWE3 from "../../assets/RoomTypes/TwinEnsuite/TwinEnsuite3.webp";
import TB1 from "../../assets/RoomTypes/TripleBasic/TripleRoom1.webp";
import TB2 from "../../assets/RoomTypes/TripleBasic/TripleRoom2.webp";
import img6 from "../../assets/RoomTypes/Quad_2.webp";
import TW2 from "../../assets/RoomTypes/Twlight/TwlightRoom2.webp";
import TW1 from "../../assets/RoomTypes/Twlight/TwlightRoom1.webp";
import TW3 from "../../assets/RoomTypes/Twlight/TwlightRoom3.webp";
import TW4 from "../../assets/RoomTypes/Twlight/TwlightRoom4.webp";
import TW5 from "../../assets/RoomTypes/Twlight/TwlightRoom5.webp";
import TW6 from "../../assets/RoomTypes/Twlight/TwlightRoom6.webp";
import TE4 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite4.webp";
import TE5 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite5.webp";
import UrlLib from "../../components/common/UrlLib";
import { useNavigate } from "react-router-dom";
import icon11 from "../../assets/icons/bed.png"
import icon22 from "../../assets/icons/two.png"
import SinBed from "../../assets/icons/single_bed.png"
import DoubBed from "../../assets/icons/bed_double.png"
import KinBed from "../../assets/icons/king_bed.png"
import CustomCarousel from "../home/new";
import HotelAllCards from "./AllCards";


const RoomAll = ({ selectedCardId ,selectedCardTitle}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const [bookingUrl, setBookingUrl] = useState('');
  const [bathroomType, setBathroomType] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const [bookLink, setBookLink] = useState('');
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
    setBookLink(room.bookLink);
    if (room.title.includes('SHARED')) {
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
      title: "SINGLE ROOM WITH SHARED BATHROOM",
      cardTitle: "1 x SINGLE BED",
      imageUrl: getUrlById(2),
      roomPrice: "£48",
      NoOfGuests: "01",
      NoOfRooms : "01",
      images: [img1,img2,img3,img4],
      bedIcons: [SinBed],
      cardId:"01",
       BookingLink:"31929"

    
    },
    {
      id: 29,
      image: DB3,
      title: "DOUBLE ROOM WITH PRIVATE BATHROOM",
      cardTitle: "1 x DOUBLE BED",
      imageUrl: getUrlById(5),
      roomPrice: "£58",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [DB1,DB2,DB3],
      bedIcons: [DoubBed],
      cardId:"02",
      BookingLink:"31920"
    },
    {
        id: 29,
        image: DB1,
        title: "DOUBLE ROOM WITH SHARED BATHROOM",
        cardTitle: "1 x DOUBLE BED",
        imageUrl: getUrlById(5),
        roomPrice: "£58",
        NoOfGuests: "02",
        images: [DB1,DB2,DB3],
        cardId:"02",
        BookingLink:"31921"
      },
    {
      id: 34,
      image: TS1,
      title: "TWIN ROOM WITH SHARED BATHROOM",
      cardTitle: "2 x SINGLE BEDS",
      imageUrl: getUrlById(10),
      roomPrice: "£60",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TS1,TS2,TS3,TS4,TS5,TS6,TS7,TS8],
      bedIcons: [SinBed, SinBed],
      cardId:"03",
      BookingLink:"31934"
    },
    {
        id: 11,
        image: TWE1,
        title: "TWIN ROOM WITH PRIVATE BATHROOM",
        cardTitle: "2 x SINGLE BEDS",
        imageUrl: getUrlById(11),
        roomPrice: "£68",
        NoOfGuests: "02",
        images:[TWE1,TWE2,TWE3],
        cardId:"03",
         BookingLink:"31933"
    },
    {
      id: 11,
      image: TE1,
      title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
      cardTitle: "3 x SINGLE BEDS",
      imageUrl: getUrlById(3),
      roomPrice: "£68",
      NoOfGuests: "02",
      NoOfRooms : "01",
      images: [TE1,TE2,TE3],
      bedIcons: [SinBed, SinBed],
      cardId:"04",
       BookingLink:"31932"
    },
    {
        id: 31,
        image: TB2,
        title: "TRIPLE ROOM WITH SHARED BATHROOM",
        cardTitle: "3 x SINGLE BEDS",
        imageUrl: getUrlById(9),
        roomPrice: "£85",
        NoOfGuests: "03",
        images: [TB1,TB2],
        cardId:"04",
          BookingLink:"31931"
      },
    {
        id: 30,
        image: TE3,
        title: "TRIPLE ROOM WITH PRIVATE BATHROOM",
        cardTitle: "1 x SINGLE BED + 1 x DOUBLE BED",
        imageUrl: getUrlById(10),
        roomPrice: "£97",
        NoOfGuests: "03",
        images: [TE1,TE2,TE3,TE4,TE5],
        cardId:"04",
         BookingLink:"31927"
    },
    {
      id: 10,
      image: TR1,
      title: "QUADRUPLE ROOM WITH PRIVATE BATHROOM",
      cardTitle: "2 x SINGLE BEDS + 1 x DOUBLE BED",
      imageUrl: getUrlById(11),
      roomPrice: "£97",
      NoOfGuests: "03",
      NoOfRooms : "01",
      images:[TR1,],
      bedIcons: [DoubBed,SinBed],
      cardId:"05",
       BookingLink:"31925"
    },
    {
        id: 33,
        image: img6,
        title: "QUADRUPLE ROOM WITH PRIVATE BATHROOM",
        cardTitle: "1 x DOUBLE BED + 1 x BUNK BED",
        imageUrl: getUrlById(10),
        roomPrice: "£110",
        NoOfGuests: "04",
        images:[img6],
        cardId:"05",
        BookingLink:"31922"
      },
    {
      id: 5,
      image: img6,
      title: "EXECUTIVE KING ROOM WITH PRIVATE BATHROOM",
      icon1: icon11,
      icon2: icon22,
      cardTitle: "1 x SOFA BED + 1 x LARGE DOUBLE BED",
      imageUrl: getUrlById(9),
      roomPrice: "£120",
      NoOfGuests: "04",
      NoOfRooms : "01",
      images: [img6],
      bedIcons: [DoubBed,SinBed, SinBed],
      cardId:"06",
       BookingLink:""
    },
    {
        id: 4,
        image: TW2,
        title: "CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM",
        cardTitle: "1 x SUPERIOR KING BED",
        imageUrl: getUrlById(10),
        roomPrice: "£125", 
        NoOfGuests: "02",
        images:[TW1,TW2,TW3,TW4,TW5,TW6],
        cardId:"06",
         BookingLink:""
      },
  ];
  const filteredRoomData = roomData.filter(
    (room) => room.cardId === selectedCardId
  );

  return (
    <div>
      <div>
        <div>
          <div className='location-title-ALL'>{selectedCardTitle}</div>
        </div>
      </div>
      <div className="hotelRoomMainDiv-ALL">
        <Row gutter={[16, 16]} className="hotelRoom-row-ALL">
        {filteredRoomData.map((room) => (
            <Col key={room.id} className="hotelRoom-col-ALL">
              <HotelAllCards
                imageSource={room.image}
                title={room.title}
                status="Check"
                price={room.roomPrice}
                buttonText="Book Now"
                cardtitle={room.cardTitle}
                NoOfGuests={room.NoOfGuests} 
                NoOfRooms={room.NoOfRooms}
                bedIcons={room.bedIcons}
                onViewMoreClick={() => handleViewMoreClick({
                  title: room.title,
                  cardTitle: room.cardTitle,
                  id: room.id,
                  images: room.images,
                  roomPrice: room.roomPrice,
                  bookLink:room.BookingLink,
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
              bookLink={bookLink}

            />
            {/* <CustomCarousel roomImages={selectedRoom.images} /> */}
          </>
        )}
      </Modal>
    </div>
  );
};

export default RoomAll;
