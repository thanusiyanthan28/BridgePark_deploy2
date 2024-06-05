// import React from "react";
// import { Row, Col } from "antd";
// import "../../css/HotelRoomTypeCard.css";
// import { Link } from "react-router-dom";


// const hotelRoomTypeTypeCard = ({
//   imageSource,
//   title,
//   description,
//   guests,
//   status,
//   price,
//   buttonText,
//   cardtitle,
//   onViewMoreClick,
// }) => {
//   return (
//     <div>
//       <div className="hotelRoomTypeCardContainer">
//         <img src={imageSource} className="hotelRoomTypeCardImage" alt="Room" />
//         <h1 className="hotelRoomTypeCardTopBar">{cardtitle}</h1>
//         <div className="hotelRoomTypeCardDetails">
//           <Row className="hotelRoomTypeCardInfoRow">
//             <Col span={12}>
//               <p>{description}</p>
//             </Col>
//             <Col span={12} className="HotelRoomTypeTextShown">
//               <div className="HotelRoomTypeTextPara">
//                 <p>Our Price Starts From </p>

//                 <p>{price} Per Nights</p>
//               </div>
              

//               <Link to="/EnsuiteRoom">
//                 <button className="hotelRoomTypeCardButton">
//                   {buttonText}
//                 </button>
//               </Link>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default hotelRoomTypeTypeCard;

import React from "react";
import { Row, Col } from "antd";
import "../../css/HotelRoomTypeCard.css";
import { Link } from "react-router-dom";

const HotelRoomTypeCard = ({
  imageSource,
  title,
  description,
  guests,
  status,
  price,
  buttonText,
  cardtitle,
  linkTo,
}) => {
  return (
    <div>
      <div className="hotelRoomTypeCardContainer">
      <Link to={linkTo}>
          <img src={imageSource} className="hotelRoomTypeCardImage" alt="Room" />
        </Link>       
         <h1 className="hotelRoomTypeCardTopBar">{cardtitle}</h1>
        <div className="hotelRoomTypeCardDetails">
          <Row className="hotelRoomTypeCardInfoRow">
            <Col span={10}>
              <p>{description}</p>
            </Col>
            <Col span={12} className="HotelRoomTypeTextShown">
              <div className="HotelRoomTypeTextPara">
                <p>Our Price Starts From </p>
                <p>{price} Per Night</p>
              </div>
              <Link to={linkTo}>
                <button className="hotelRoomTypeCardButton">
                  {buttonText}
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomTypeCard;
