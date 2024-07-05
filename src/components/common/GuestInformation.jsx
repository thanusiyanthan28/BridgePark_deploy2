import React from "react";
import { useState } from 'react';
import "../../css/RoomInformation/GuestInformation.css";
import SiteCard from "../Sitecard/siteCard";
import img1 from "../../assets/images/Loungebar 1.jpg";

const GuestInfo = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    address: '',
    postcode: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleButtonClick = () => {
    window.location.href = 'https://direct-book.com/properties/bridgeparkdirect/book?';
  };

  return (
    <div>
      <div className="cal-card"><SiteCard /> </div>
      <div className="hotelRoomCardContainer2">
        <img src={img1} className="Guestimage" alt="Room" />
      </div>
      <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <h2>Provide Guest Information</h2>
          
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          
          <div className="form-row">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          
          <div className="form-row">
            <label htmlFor="address">Address</label>
            <input
              type="text"            
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          
          <div className="form-row">
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          
          <button type="button" onClick={handleButtonClick}>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default GuestInfo;
