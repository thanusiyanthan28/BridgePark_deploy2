// DiscountMessage.js
import React from 'react';
import PropTypes from 'prop-types';

const DiscountMessage = ({ discountPercentage, bookingUrl }) => {
  return (
    <h2 className='home-para'>
      Save up to {discountPercentage}% and get exclusive discounts when you{' '}
      <a href={bookingUrl} className='booking-link-home'>
        book!
      </a>
    </h2>
  );
};

DiscountMessage.propTypes = {
  discountPercentage: PropTypes.number.isRequired,
  bookingUrl: PropTypes.string.isRequired,
};

export default DiscountMessage;
