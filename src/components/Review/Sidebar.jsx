import React,{useState} from 'react';
import { Modal, Input, Button } from 'antd';
import './Review.css';
import ReviewForm from './writeReview';

const PopupCard = ({ visible, showModal, handleCancel, bookingNumber, setBookingNumber, username, setUsername, handleSubmit }) => {
  const [showReviewForm, setShowReviewForm] = useState(false)

  const subitForm=()=>{
    setShowReviewForm(true)
  }

  const handleReviewFormCancel = () => {
    setShowReviewForm(false);
  }

  return (
    <>
      <Modal
        title="Enter your booking details"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<span className="close-icon">&times;</span>}
        className="custom-modal2"
      >
        <div className="popup-card-content">
          <Input
            placeholder="Booking Number"
            value={bookingNumber}
            onChange={(e) => setBookingNumber(e.target.value)}
            className="popup-input"
          />
          <Input
            placeholder="Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="popup-input"
          />
          <Button type="primary" onClick={subitForm} className="submit-button" >
            Rate Your Stay
          </Button>
          <p>Only a customer who has booked through Booking.com and stayed at the property in question can write a review. 
        This lets us know that our reviews come from real guests, like you.</p>
        </div>
      </Modal>
      <Modal
        title="Write Your Review"
        visible={showReviewForm}
        onCancel={handleReviewFormCancel}
        footer={null}
        className="custom-modal2"
        width={900}
      >
        <ReviewForm bookingNumber={bookingNumber} username={username} onCancel={handleReviewFormCancel} />
      </Modal>
    </>
  );
};

export default PopupCard;
