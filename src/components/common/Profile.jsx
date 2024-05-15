import React, { useState } from 'react';
import { AntDesignOutlined,ProfileOutlined,BellOutlined,SecurityScanOutlined,LoginOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Dropdown, Menu } from 'antd'; // Import Dropdown and Menu components
import '../../css/Profile.css'; 

const Profile = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State to manage the visibility of the dropdown menu

  const handleAvatarClick = () => {
    setMenuVisible(!menuVisible); // Toggle the visibility of the dropdown menu
  };

  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e);
    setMenuVisible(false); // Close the dropdown menu when a menu item is clicked
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
                // size={{
                //   xs: 20,
                //   sm: 24,
                //   md: 32,
                //   lg: 40,
                //   xl: 48,
                //   xxl: 64,
                // }}
                icon={<AntDesignOutlined />}
              />
            </Badge>
          </span>
        </Dropdown>
      </Space>
    </div>
  );
};

export default Profile;


