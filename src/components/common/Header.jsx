import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../assets/images/HotelLogo.webp";
import Button from "./Button";
import Card from "./Card";
import { Row } from "antd";
import UserProfile from "./UserProfile";
import img from "../../assets/images/DoubleEnsuite.webp";
import SiteCard from "../Sitecard/siteCard";
import HomeCard from "../Sitecard/homeCard";
import hotellogo1 from "../../assets/images/HotelLogo1.png"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 820px)").matches);

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
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
      setIsMobile(window.matchMedia("(max-width: 820px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="head-main">
      <div className="overlay"></div>
      {isMobile && <div className="home-sitecard"><HomeCard /></div>  }
      <div className="hero-container">
        <div className="headerLogoPosition">
          <img src={hotellogo1} alt="Logo" className="headerLogo" />
        </div>
        
        <div className="header-slogan">RESERVE YOUR STAY NOW</div>
        {!isMobile ? <div className=""><Card title="Card Title 2" description="Description for Card 2" /></div> : null}
      </div>
     
    </div>
  );
};

export default Header;
