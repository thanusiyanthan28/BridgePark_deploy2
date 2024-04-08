import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../assets/images/HotelLogo.png";
import Button from "./Button";
import Card from "./Card";
import { Row } from "antd";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    console.log("button clicked");
  };

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <div className="hero-container">
        <header className="header-container">
          <div className="toggle-icon" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
          <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
            <div className="close-button" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </div>
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

            <div className="headerButtonContainer">
              <Button onClick={handleClick}>Book Now</Button>
            </div>
            <div className="headerButtonContainer2">
              <Button onClick={handleClick}>LogIn / SignUp</Button>
            </div>
          </nav>
          <img src={logo} alt="Logo" className="headerLogo" />
        </header>
        <div className="heading-container">
          <h1 className="heading">BRIDGE </h1>
          <h1 className="heading2">PARK HOTEL</h1>
        </div>
        <Card
          title="Card Title 2"
          description="Description for Card 2"
        />
      </div>
    </div>
  );
};

export default Header;
