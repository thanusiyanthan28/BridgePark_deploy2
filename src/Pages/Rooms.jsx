import React from "react";
import RoomType from "../components/home/RoomType";
import "../css/RoomType/Room.css";

import Header2 from "../components/common/Header2";

const Rooms = () => {
  return (
    <>
      <Header2 />
      <div className="RoomsTypeFirstAlignment">
        <RoomType  />
      </div>
    </>
  );
};

export default Rooms;
