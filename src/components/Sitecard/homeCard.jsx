// HomeCard.js
import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import './homeCard.css'; 
import moment from 'moment';
import DiscountMessage from './Discount'; 

const HomeCard = () => {
  const [formData, setFormData] = useState({
    checkInDate: null, 
    checkOutDate: null, 
    adults: 1,
    children: 0,
    roomType: 'SS', 
    language: 'en',
    currency: 'USD',
  });

  const [daysOfWeek, setDaysOfWeek] = useState({
    checkInDay: moment().format('dddd'), // Initialize with current day
    checkOutDay: moment().format('dddd'), // Initialize with current day
  });

  const [discountPercentage, setDiscountPercentage] = useState(25); // Default discount percentage
  const bookingEngineUrl = `https://direct-book.com/properties/bridgeparkdirect`;

  useEffect(() => {
    // Fetch the discount percentage from the backend
    fetch('/api/discount')
      .then(response => response.json())
      .then(data => setDiscountPercentage(data.discountPercentage))
      .catch(error => console.error('Error fetching discount:', error));
  }, []);

  const handleCountChange = (field, increment) => {
    setFormData(prevState => {
      const newCount = Math.max(0, prevState[field] + increment);
      return {
        ...prevState,
        [field]: newCount
      };
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: date
    }));

    if (fieldName === 'checkInDate') {
      setDaysOfWeek(prevState => ({
        ...prevState,
        checkInDay: date ? date.format('dddd') : 'Select a date'
      }));
    } else if (fieldName === 'checkOutDate') {
      setDaysOfWeek(prevState => ({
        ...prevState,
        checkOutDay: date ? date.format('dddd') : 'Select a date'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate check-in date
    if (formData.checkInDate && formData.checkInDate.isBefore(moment(), 'day')) {
      alert('Please select a future date for Check-in.');
      return;
    }

    // Validate check-out date
    if (formData.checkOutDate && formData.checkOutDate.isBefore(moment(), 'day')) {
      alert('Please select a future date for Check-out.');
      return;
    }

    const queryString = new URLSearchParams({
      check_in_date: formData.checkInDate.format('YYYY-MM-DD'),
      check_out_date: formData.checkOutDate.format('YYYY-MM-DD'),
      number_adults: formData.adults,
      number_children: formData.children,
    });

    window.location.href = `${bookingEngineUrl}?${queryString.toString()}`;
  };

  const currentDate = moment().format('DD MMM');

  return (
    <div className='app-container2-site-home'>
      <div className="app-container-site-home">
        <div className="card-site-home">
          <div className="card-body-site-home">
            <table className='table-site-home'>
              <tbody className='tbody-site-home'>
                <tr className='tr-site-home'>
                  <td className='td-site-home'>
                    <p className='check-head-site-home'>CHECK IN</p>
                    <div className='current-day-site'>{daysOfWeek.checkInDay}</div>
                    <div className="date-input-container-site-home">
                      <DatePicker
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={(date) => handleDateChange(date, 'checkInDate')}
                        format="DD MMM"
                        placeholder={currentDate}
                      />
                    </div>
                  </td>
                  <td className='td-site-home'>
                    <p className='check-head-site-home'>CHECK OUT</p>
                    <div className='current-day-site'>{daysOfWeek.checkOutDay}</div>
                    <div className="date-input-container-site-home">
                      <DatePicker
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={(date) => handleDateChange(date, 'checkOutDate')}
                        format="DD MMM"
                        placeholder={currentDate}
                      />
                    </div>
                  </td>
                </tr>
                <tr className='tr-site-home'>
                  <td className='td-site-home'>
                    <label className='check-head-site-home'>ADULTS</label>
                    <p className='site-p'>No of Persons</p>
                    <div className="counter-site-home">
                      <button className="valueupdown-site-home" onClick={() => handleCountChange('adults', -1)}>-</button>
                      <input type="text" name="adults" value={formData.adults.toString().padStart(2, '0')} readOnly />
                      <button className="valueupdown-site-home" onClick={() => handleCountChange('adults', 1)}>+</button>
                    </div>
                  </td>
                  <td className='td-site-home'>
                    <label className='check-head-site-home'>CHILDREN</label>
                    <p className='site-p'>No of Persons</p>
                    <div className="counter-site-home">
                      <button className="valueupdown-site-home" onClick={() => handleCountChange('children', -1)}>-</button>
                      <input type="text" name="children" value={formData.children.toString().padStart(2, '0')} readOnly />
                      <button className="valueupdown-site-home" onClick={() => handleCountChange('children', 1)}>+</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="button-site-home" type="submit" onClick={handleSubmit}>Modify</button>
          </div>
        </div>
        <div>
          <DiscountMessage
            discountPercentage={discountPercentage}
            bookingUrl={bookingEngineUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
