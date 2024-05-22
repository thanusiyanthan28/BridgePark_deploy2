import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { AntDesignOutlined, ProfileOutlined, BellOutlined, SecurityScanOutlined, LoginOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Dropdown, Menu, Button } from 'antd';
import '../../css/Profile.css';

const [cookies, setCookie, removeCookie] = useCookies(['user']);
const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.user);

const handleLogin = () => {
  setCookie('user', 'John Doe', { path: '/' });
  setIsLoggedIn(true);
};

const handleLogout = () => {
  removeCookie('user');
  setIsLoggedIn(false);
};

const BeforeProfile = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  const content = (
    <Space direction="vertical">
      <Button onClick={handleLogin} className="BeforeProfileBtn">
        Sign In
      </Button>
      <Button onClick={() => {}} className="BeforeProfileBtn">
        Sign Up
      </Button>
    </Space>
  );

  return (
    <div className="profile-avatar-container">
      <Space>
        <Dropdown overlay={content} visible={popoverVisible} placement="bottomRight" trigger={['click']}>
          <span onClick={handleAvatarClick}>
            <Avatar
              className="profile-avatar"
              icon={<AntDesignOutlined />}
            />
          </span>
        </Dropdown>
      </Space>
    </div>
  );
};

const CustomProfile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAvatarClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e);
    setMenuVisible(false);
  };

  const items = [
    {
      label: 'My Booking',
      key: '1',
      icon: <ProfileOutlined />,
    },
    {
      label: 'Notifications',
      key: '2',
      icon: <BellOutlined />,
    },
    {
      label: 'Help',
      key: '3',
      icon: <SecurityScanOutlined />,
    },
    {
      label: 'Logout',
      key: '4',
      icon: <LoginOutlined />,
    },
  ];

  const menu = (
    <Menu onClick={handleMenuClick} className="profile-custom-dropdown">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} danger={item.danger} disabled={item.disabled}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="profile-avatar-container">
      <Space>
        <Dropdown overlay={menu} visible={menuVisible} placement="bottomRight" trigger={['click']}>
          <span onClick={handleAvatarClick}>
            <Badge size="small" count={1}>
              <Avatar
                className="profile-avatar"
                icon={<AntDesignOutlined />}
              />
            </Badge>
          </span>
        </Dropdown>
      </Space>
    </div>
  );
};

export default CustomProfile;