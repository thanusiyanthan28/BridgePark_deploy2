import React, { useState } from 'react';
import { DatePicker } from 'antd'; // Import DatePicker from Ant Design
import './siteCard.css'; // Import CSS file for styling
import moment from 'moment'; // Import moment for date formatting

const SiteCard = () => {
  const [formData, setFormData] = useState({
    checkInDate: '', // Initialize with current date
    checkOutDate: '', // Initialize with current date
    adults: 1,
    children: 0,
    infants: 0,
    language: 'en',
    currency: 'USD',
    // Add more form fields as needed
  });

  const bookingEngineUrl = `https://direct-book.com/properties/bridgeparkdirect`;

  const handleCountChange = (fieldName, increment) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: Math.max(0, prevState[fieldName] + increment) // Ensure the count doesn't go below 0
    }));
  };

  const handleDateChange = (date, fieldName) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: date
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const queryString = new URLSearchParams({
      check_in_date: formData.checkInDate.format('YYYY-MM-DD'),
      check_out_date: formData.checkOutDate.format('YYYY-MM-DD'),
      number_adults: formData.adults,
      number_children: formData.children,
    });
    window.location.href = `${bookingEngineUrl}?${queryString.toString()}`;
  };

  // Calculate total price
  const singleRoomPrice = 1146.31;
  const tax = 53.69;
  const totalPrice = singleRoomPrice + tax;

  return (
    <div className='app-container2-site'>
      <div className="app-container-site">
        <div className="card-site">
          <div className="card-body-site">
            <table className='table-site'>
              <tbody className='tbody-site'>
                <tr className='tr-site'>
                  <td className='td-site'>
                    <p className='check-head-site'>CHECK IN</p>
                    <div className="date-input-container-site">
                      <DatePicker
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={(date) => handleDateChange(date, 'checkInDate')}
                        format="DD MMM"
                      />
                    </div>
                  </td>
                  <td className='td-site'>
                    <p className='check-head-site'>CHECK OUT</p>
                    <div className="date-input-container-site">
                      <DatePicker
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={(date) => handleDateChange(date, 'checkOutDate')}
                        format="DD MMM"
                      />
                    </div>
                  </td>
                </tr>
                <tr className='tr-site'>
                  <td className='td-site'>
                    <label className='check-head-site'>ADULTS</label>
                    <p className='site-p'>No of Persons</p>
                    <div className="counter-site">
                      <button className="valueupdown-site" onClick={() => handleCountChange('adults', -1)}>-</button>
                      <input type="text" name="adults" value={formData.adults.toString().padStart(2, '0')} onChange={handleChange} readOnly />
                      <button className="valueupdown-site" onClick={() => handleCountChange('adults', 1)}>+</button>
                    </div>
                  </td>
                  <td className="td-site">
                    <label className='check-head-site'>CHILDREN</label>
                    <p className='site-p'>No of Persons</p>
                    <div className="counter-site">
                      <button className="valueupdown-site" onClick={() => handleCountChange('children', -1)}>-</button>
                      <input type="text" name="children" value={formData.children.toString().padStart(2, '0')} onChange={handleChange} readOnly />
                      <button className="valueupdown-site" onClick={() => handleCountChange('children', 1)}>+</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="button-site" type="submit" onClick={handleSubmit}>Modify</button>
          </div>
        </div>
        <div>
          <p>1 x Single Room Basic <span className='price-site'>${singleRoomPrice.toFixed(2)}</span></p>
          <p>Tax <span className='price-site'>${tax.toFixed(2)}</span></p>
          <hr />
          <p>Grand total <span className='price-site'>${totalPrice.toFixed(2)}</span></p>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
