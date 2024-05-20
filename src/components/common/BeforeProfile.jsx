import React, { useState } from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Space, Popover, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../css/Profile.css'; 

const BeforeProfile = () => {
  const [popoverVisible, setPopoverVisible] = useState(false); 
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
    console.log('Sign In clicked');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
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
