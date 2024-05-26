// import React from "react";
// import HotelRoomTypeCard from "../common/HotelRoomTypeCard";
// import img1 from "../../assets/images/ExecutiveKingRoom.jpg";

// const RoomType = () => {
//   return (
//     <div>
//       <HotelRoomTypeCard
//         imageSource={img1}
//         title="Single Room"
//         description="All the rooms “Basic” are with shared bathroom facilities"
//         guests={2}
//         status="Available"
//         price="$200"
//         buttonText="Book Now"
//         cardtitle="Basic Rooms"
//       />
//       <HotelRoomTypeCard
//         imageSource={img1}
//         title="Single Room"
//         description="“En-suite” rooms are with Private bathroom facilties"
//         guests={2}
//         status="Available"
//         price="$200"
//         buttonText="Book Now"
//         cardtitle="Ensuite Rooms"
//       />
//     </div>
//   );
// };

// export default RoomType;

import React from "react";
import HotelRoomTypeCard from "../common/HotelRoomTypeCard";
import img1 from "../../assets/images/ExecutiveKingRoom.jpg";

const RoomType = () => {
  return (
    <div>
      <HotelRoomTypeCard
        imageSource={img1}
        title="Single Room"
        description="All the rooms “Basic” are with shared bathroom facilities"
        guests={2}
        status="Available"
        price="£200"
        buttonText="Book Now"
        cardtitle="Basic Rooms"
        linkTo="/BasicRoom"
      />
      <HotelRoomTypeCard
        imageSource={img1}
        title="Single Room"
        description="“En-suite” rooms are with Private bathroom facilities"
        guests={2}
        status="Available"
        price="£200"
        buttonText="Book Now"
        cardtitle="Ensuite Rooms"
        linkTo="/EnsuiteRoom"
      />
    </div>
  );
};

export default RoomType;
