import React, { useState } from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Space, Popover, Button } from 'antd';
import '../../css/Profile.css'; 

const BeforeProfile = () => {
  const [popoverVisible, setPopoverVisible] = useState(false); // State to manage the visibility of the popover

  const handleAvatarClick = () => {
    setPopoverVisible(!popoverVisible); // Toggle the visibility of the popover
  };

  const handleSignIn = () => {
    // Add your logic for signing in
    console.log('Sign In clicked');
  };

  const handleSignUp = () => {
    // Add your logic for signing upgit
    console.log('Sign Up clicked');
  };

  const content = (
    <Space direction="vertical">
      <Button type="text" onClick={handleSignIn} className="BeforeProfileBtn">Sign In</Button>
      <Button type="text" onClick={handleSignUp} className="BeforeProfileBtn">Sign Up</Button>
    </Space>
  );

  return (
    <div className="profile-avatar-container">
      <Space>
        <Popover
          content={content}
          trigger="click"
          visible={popoverVisible}
          onVisibleChange={setPopoverVisible}
        >
          <span onClick={handleAvatarClick}>
            <Avatar
              className="profile-avatar"
              icon={<AntDesignOutlined />}
            />
          </span>
        </Popover>
      </Space>
    </div>
  );
};

export default BeforeProfile;
