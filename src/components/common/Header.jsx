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
   
            <div className="headerLogoPosition">
            <img src={logo} alt="Logo" className="headerLogo" />
            </div>

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
