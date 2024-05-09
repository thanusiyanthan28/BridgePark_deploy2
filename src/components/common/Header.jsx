import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../assets/images/HotelLogo.png";
import Button from "./Button";
import Card from "./Card";
import { Row } from "antd";
import UserProfile from "./UserProfile";
import img from "../../assets/images/DoubleEnsuite.jpg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    console.log("button clicked");
  };

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
  };

  const userData = {
    name: "John Doe",
    avatar: img,
    bio: "Lorem ipsum dolor sit amet",
    email: "john@example.com",
    location: "New York",
  };
  return (
    <div className="head-main">
      <div className="hero-container">
        {/* <header className="header-container">
          <div className="toggle-icon" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
          <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
            <div className="close-button" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </div>
            <Link to="/" className="header-link">
              <h1 className="headerlink-h1-1">Home</h1>
            </Link>
            <Link to="/rooms" className="header-link">
              <h1 className="headerlink-h1-2">Rooms</h1>
            </Link>
            <Link to="/facilities" className="header-link">
              <h1 className="headerlink-h1-3">Facilities</h1>
            </Link>
            <Link to="/meeting-events" className="header-link">
              <h1 className="headerlink-h1-4">Meeting & Events</h1>
            </Link> */}
            <div className="headerLogoPosition">
            <img src={logo} alt="Logo" className="headerLogo" />
            </div>
            {/* <div className="headerButtonContainer">
              <Button onClick={handleClick}>Book Now</Button> */}
            {/* </div>

            {isLoggedIn ? (
              <div className="HeaderProfileContainer">
                <UserProfile user={userData} />
              </div>
            ) : (
              // If user is not logged in, display login/signup button
              <div className="headerButtonContainer2">
                <Button onClick={handleLogin}>LogIn / SignUp</Button>
              </div>
            )}
          </nav>
        </header> */}
        <div className="heading-container">
          <h1 className="heading">BRIDGE </h1>
          <h1 className="heading2">PARK HOTEL</h1>
        </div>
        <Card title="Card Title 2" description="Description for Card 2" />
      </div>
    </div>
  );
};

export default Header;
