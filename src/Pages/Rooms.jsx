import React from "react";
import RoomType from "../components/home/RoomType";
import "../css/RoomType/Room.css";
import GuestInfo from "../components/common/GuestInformation";


const Rooms = () => {
  return (
    <>
      {/* <Header2 /> */}
      <div className="RoomsTypeFirstAlignment">
        <RoomType  />
       
      </div>
    </>
  );
};

export default Rooms;
