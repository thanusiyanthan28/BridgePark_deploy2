import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Menu, Dropdown, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AntDesignOutlined, ProfileOutlined, BellOutlined, SecurityScanOutlined, LoginOutlined } from '@ant-design/icons';
import "../../css/Profile.css";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowButtons(false);
    console.log("User logged in successfully");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const menu = (
    <Menu>
      <Menu.Item key="0"className="custom-menu-item">
      <ProfileOutlined className="Profile-icon"/>
        <Link to="/my-booking">My Booking</Link>
      </Menu.Item>
      <Menu.Item key="1" className="custom-menu-item">
      <BellOutlined className="Profile-icon"/>
        <Link to="/notifications">Notifications</Link>
      </Menu.Item>
      <Menu.Item key="2" className="custom-menu-item">
      <SecurityScanOutlined className="Profile-icon"/>
        <Link to="/help">Help</Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={handleLogout} className="custom-menu-item">
      <LoginOutlined className="Profile-icon"/>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {!isLoggedIn ? (
          <div>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              onClick={() => setShowButtons(!showButtons)}
              className="profile-image"
            />
            {showButtons && (
              <div className="buttons-container">
                <Space direction="vertical">
                <Link to="/SignIn">
                    <Button onClick={handleLogin} className="custom-button">Sign In</Button>
                  </Link>
                  <Link to="/SignUp">
                    <Button className="custom-button">Sign Up</Button>
                  </Link>
                </Space>
              </div>
            )}
          </div>
        ) : (
          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="profile-image"
            />
          </Dropdown>
        )}
      </div>
      {console.log("isLoggedIn:", isLoggedIn)}
    </div>
  );
};

export default Profile;
