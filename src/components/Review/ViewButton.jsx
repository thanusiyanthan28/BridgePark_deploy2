import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ReviewApp from './popupPage';
import './Review.css';

const ReButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="link" className="read-reviews-link" onClick={showModal}>
        <button className="see-all-button">Read all reviews</button>
      </Button>
      <Modal
        title="All Reviews"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
        style={{ top: 0, right: 0, margin: 0 }}
      >
        <ReviewApp />
      </Modal>
    </div>
  );
};

export default ReButton;
