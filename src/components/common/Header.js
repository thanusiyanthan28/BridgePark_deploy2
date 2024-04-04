import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../assets/images/HotelLogo.png";
import Button from "./Button";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Header = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div>
      <div className="hero-container">
        <header className="header-container">
          <Link to="/" className="header-link">
            <h1>Home</h1>
          </Link>
          <Link to="/rooms" className="header-link">
            <h1>Rooms</h1>
          </Link>
          <Link to="/facilities" className="header-link">
            <h1>Facilities</h1>
          </Link>
          <Link to="/meeting-events" className="header-link">
            <h1>Meeting &amp; Events</h1>
          </Link>
          <img src={logo} alt="Logo" className="logo" />
          <div className="buttonContainer">
            <Button onClick={handleClick}>Book Now</Button>
          </div>
          <div className="buttonContainer2">
            <Button onClick={handleClick}>LogIn / SignUp</Button>
          </div>
        </header>
        <div className="heading-container">

          <h1 className="heading">BRIDGE </h1>
          <h1 className="heading2">PARK HOTEL</h1>
       
        </div>
      </div>
    </div>
  );
};

export default Header;
