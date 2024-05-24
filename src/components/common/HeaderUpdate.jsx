

import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import "../../css/HeaderUpdate.css";
import img from "../../assets/images/DoubleEnsuite.jpg";
import UserProfile from "./UserProfile";

const HeaderUpdate = () => {
  const [current, setCurrent] = useState();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  
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

  const itemsLeft = [
    {
      label: (
        <Link to="/" className="header-home">
          Home
        </Link>
      ),
      key: 'Home',
    },
    {
      label: (
        <Link to="/rooms" className="header-rooms">
          Rooms
        </Link>
      ),
      key: 'Rooms',
    },
    {
      label: (
        <Link to="/facilities" className="header-facilities">
          Facilities
        </Link>
      ),
      key: 'Facilities',
    },
    {
      label: (
        <Link to="/main-meeting" className="header-meeting">
          Meeting&Events
        </Link>
      ),
      key: 'Meeting & Events',
    },
    {
      label: (
        <Link to="/location">
          Location
        </Link>
      ),
      key: 'Location',
    },
  ];
  
  const itemsRight = [
    {
      label: (
        <button className='header-button'>
          <Link to="/" className='header-book-now'>
            Book Now
          </Link>
        </button>
      ),
      key: 'Book Now',
    },
    {
      label: isLoggedIn ? (
        <button  onClick={handleLogout} className='header-button'>
        <Link to="/" className='header-book-sign'>
         logout
          </Link>
      </button>
      ) : (
        <button  onClick={handleLogin} className='header-button'>
          <Link to="/SignIn" className='header-book-sign'>
            LogIn/SignUp
          </Link>
        </button>   
      ),
      key: 'SignIn/SignUp',
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    setCurrent(e.key);
    onClose(); // Close the drawer after selecting an item
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header-update-container'>
      <div className='header-update'>
     
      {!isMobile ? <div className='header-nav-bar-left'>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsLeft} />
        </div>: null}
        <div className='header-nav-bar-right'>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsRight} />
        </div>  
        <div className='header-update-toggle-button'>
          <Button type="primary" onClick={showDrawer} className="mobile-toggle">
            <MenuOutlined />
          </Button>
        </div>
      </div>
      <Drawer placement="left" closable={false} onClose={onClose} open={open}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={itemsLeft.concat(itemsRight)} />
      </Drawer>
    </div>
  );
};

export default HeaderUpdate;
