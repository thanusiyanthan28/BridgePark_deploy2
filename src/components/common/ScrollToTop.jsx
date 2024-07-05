import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import "../../css/ScrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Button 
      type="primary" 
      shape="circle" 
      icon={<CustomUpOutlined />} // Use custom icon component
      size="large" 
      onClick={scrollTop} 
      className="scroll-to-top"
      style={{zIndex:999999, display: showScroll ? 'flex' : 'none', backgroundColor: '#669399', borderColor: 'white' }}
    />
  );
}

// Custom icon component to rotate the RightOutlined icon
const CustomUpOutlined = () => {
  return (
    <RightOutlined style={{ transform: 'rotate(-90deg)' }} />
  );
}

export default ScrollToTop;
