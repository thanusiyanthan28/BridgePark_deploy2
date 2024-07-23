import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer, Button, Dropdown, Avatar } from 'antd';
import { MenuOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import "../../css/HeaderUpdate.css";
import img from "../../assets/images/DoubleEnsuite.webp";
import headerlogo from '../../assets/header-logo.png';

const HeaderUpdate = () => {
  const [current, setCurrent] = useState();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isMobile = windowWidth <= 768;

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  const userData = {
    name: "John Doe",
    avatar: img,
    bio: "Lorem ipsum dolor sit amet",
    email: "john@example.com",
    location: "New York",
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    setCurrent(e.key);
    onClose();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsLeft = [
    {
      label: (
        <Link to="/" className="header-home header-font">
          Home
        </Link>
      ),
      key: 'Home',
    },
    {
      label: (
        <Link to="/rooms" className="header-rooms header-font">
          Rooms
        </Link>
      ),
      key: 'Rooms',
    },
    {
      label: (
        <Link to="/facilities" className="header-facilities header-font">
          Facilities
        </Link>
      ),
      key: 'Facilities',
    },
    {
      label: (
        <Link to="/main-meeting" className="header-meeting header-font">
          Meeting & Events
        </Link>
      ),
      key: 'Meeting & Events',
    },
    {
      label: (
        <Link to="/location" className="location-meeting header-font">
          Location
        </Link>
      ),
      key: 'Location',
    },
    {
      label: (
        <Link to="/review" className="location-meeting header-font">
          Review
        </Link>
      ),
      key: 'Review',
    },
  ];

  const profileMenuItems = isLoggedIn ? [
    {
      label: (
        <Link to="/profile" className="custom-dropdown-item header-font" onClick={onClose}>
          Profile
        </Link>
      ),
      key: 'profile',
    },
    {
      label: (
        <Link to="/" className="custom-dropdown-item header-font" onClick={() => { handleLogout(); setCurrent('Home'); }}>
          Logout
        </Link>
      ),
      key: 'logout',
    }
  ] : [
    {
      label: (
        <Link to="/SignIn" className="custom-dropdown-item header-font" onClick={onClose}>
          Login
        </Link>
      ),
      key: 'login',
    },
    {
      label: (
        <Link to="/SignUp" className="custom-dropdown-item header-font" onClick={onClose}>
          Signup
        </Link>
      ),
      key: 'signup',
    }
  ];

  const itemsRight = [
    {
      label: (
        <button className='header-button '>
          <Link to="https://direct-book.com/properties/bridgeparkdirect?" className='header-book-now header-font'>
            Book Now
          </Link>
        </button>
      ),
      key: 'Book Now',
    },
    {
      label: isMobile ? (
        <Menu.SubMenu
          key="profile-submenu"
          title={isLoggedIn ? "Profile / Logout" : "Login / Signup"}
        >
          {profileMenuItems.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu.SubMenu>
      ) : (
        <Dropdown
          overlay={<Menu items={profileMenuItems} />}
          trigger={['click']}
          visible={dropdownVisible}
          onVisibleChange={setDropdownVisible}
        >
          <Avatar
            icon={<UserOutlined />}
            src={isLoggedIn ? userData.avatar : null}
          />
        </Dropdown>
      ),
      key: 'profile',
    },
  ];

  useEffect(() => {
    // Close drawer when switching from mobile to desktop view
    if (!isMobile) {
      onClose();
    }
  }, [isMobile]);

  return (
    <div className='header-update-container'>
      <div className='header-update'>
        <a href='/'><img className='update-header-logo' src={headerlogo} alt="Logo" /></a>
        {!isMobile ? (
          <div className='header-nav-bar-left'>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsLeft} />
          </div>
        ) : null}
        {!isMobile ? (
          <div className='header-nav-bar-right'>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemsRight} />
          </div>
        ) : null}
        <div className='header-update-toggle-button'>
          <Button type="primary" onClick={showDrawer} className="mobile-toggle">
            <MenuOutlined />
          </Button>
        </div>
      </div>

      <Drawer placement="left" closable={false} onClose={onClose} open={open} className='update-header-drawer'>
        <Button onClick={onClose} className='drawer-close-btn'><CloseOutlined /></Button>
        <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={itemsLeft} />
        <Menu mode="inline" items={profileMenuItems} onClick={onClose} />
      </Drawer>
    </div>
  );
};

export default HeaderUpdate;
