import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../assets/images/HotelLogo.png";
import Button from "./Button";
import Card from "./Card";
import { Row } from "antd";
import UserProfile from "./UserProfile";
import img from "../../assets/images/DoubleEnsuite.jpg";
import SiteCard from "../Sitecard/siteCard";
import title from "../../assets/web ok.png"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="head-main">
      {isMobile ? <div className="home-sitecard"><SiteCard /></div> : null}
      <div className="hero-container">
        <div className="headerLogoPosition">
          {/* <img src={logo} alt="Logo" className="headerLogo" /> */}
        </div>
        <img src={title}alt="title" className="header-title" />
        {/* <div className="heading-container">
          <h1 className="heading">BRIDGE </h1>
          <h1 className="heading2">PARK HOTEL</h1>
        </div> */}
        <div className="header-slogan">RESERVE YOUR STAY NOW</div>
        {!isMobile ? <div className=""><Card title="Card Title 2" description="Description for Card 2" /></div> : null}
      </div>
    </div>
  );
};

export default Header;
