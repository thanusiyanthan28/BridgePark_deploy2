import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header2.css";
import logo from "../../assets/images/HotelLogo.png";
import Button from "./Button";
import Card from "./Card";
import { Row } from "antd";
import UserProfile from "./UserProfile";
import img from "../../assets/images/DoubleEnsuite.jpg";

const Header2 = () => {
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
    <div>
      <div>
      <div className="header2-hero-container">
        <header className="header2-container">
          <div className="toggle-icon" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
          <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
            <div className="close-button" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </div>
            <Link to="/" className="header2-link">
              <h1 className="headerlink-h1-1">Home</h1>
            </Link>
            <Link to="/rooms" className="header2-link">
              <h1 className="headerlink-h1-2">Rooms</h1>
            </Link>
            <Link to="/facilities" className="header2-link">
              <h1 className="headerlink-h1-3">Facilities</h1>
            </Link>
            <Link to="/meeting-events" className="header2-link">
              <h1 className="headerlink-h1-4">Meeting & Events</h1>
            </Link>
            <div className="headerLogoPosition">
            <img src={logo} alt="Logo" className="header2Logo" />
            </div>
            <div className="header2ButtonContainer">
              <Button onClick={handleClick}>Book Now</Button>
            </div>
              <div className="Header2ProfileContainer">
                <UserProfile user={userData} />
              </div>
            
          </nav>
        </header>
      </div>
    </div>
    </div>
  )
}

export default Header2

