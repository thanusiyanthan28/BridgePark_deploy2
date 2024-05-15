import React, { useState } from 'react';
import './siteCard.css'; // Import CSS file for styling
import CustomDatePicker from './DatePicker'; // Import the CustomDatePicker component
import { FaCalendarAlt } from 'react-icons/fa';
const SiteCard = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
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
      [fieldName]: Math.max(0, formData[fieldName] + increment) // Ensure the count doesn't go below 0
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
  
     const bookingURL = `https://direct-book.com/properties/bridgeparkdirect`;
     const queryString = new URLSearchParams({
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        number_adults: numAdults,
        number_children: numChildren,
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
                      <CustomDatePicker
                        name="checkInDate"
                        selectedDate={formData.checkInDate}
                        onChange={(date) => handleDateChange(date, 'checkInDate')}
                      />
                      <FaCalendarAlt className="calendar-icon-site" /> {/* Add calendar icon */}
                    </div>
                  </td>
                  <td className='td-site'>
                    <p className='check-head-site'>CHECK OUT</p>
                    <div className="date-input-container-site">
                      <CustomDatePicker
                        name="checkOutDate"
                        selectedDate={formData.checkOutDate}
                        onChange={(date) => handleDateChange(date, 'checkOutDate')}
                      />
                      <FaCalendarAlt className="calendar-icon-site" /> {/* Add calendar icon */}
                    </div>
                  </td>
                </tr>
                <tr className='tr-site'>
                  <td className='td-site'>
                    <label className='check-head-site'>ADULTS</label>
                    <p>No of Persons</p>
                    <div className="counter-site">
                      <button className="valueupdown-site" onClick={() => handleCountChange('adults', -1)}>-</button>
                      <input type="text" name="numAdults" value={formData.adults.toString().padStart(2, '0')} onChange={handleChange} inputMode="none" readOnly />
                      <button className="valueupdown-site" onClick={() => handleCountChange('adults', 1)}>+</button>
                    </div>
                  </td>
                  <td className="td-site">
                    <label className='check-head-site'>CHILDREN</label>
                    <p>No of Persons</p>
                    <div className="counter-site">
                      <button className="valueupdown-site" onClick={() => handleCountChange('children', -1)}>-</button>
                      <input type="text" name="numChildren" value={formData.children.toString().padStart(2, '0')} onChange={handleChange} inputMode="none" readOnly />
                      <button className="valueupdown-site" onClick={() => handleCountChange('children', 1)}>+</button>
                    </div>
                  </td>



                </tr>
              </tbody>
            </table>
            <button className="button-site"type="submit" onClick={handleSubmit}>Modify</button>
          </div>
        </div>
        <div>
          <p>1 x Single Room Basic <span className='price-site'>${singleRoomPrice.toFixed(2)}</span></p>
          <p>Tax <span className='price-site'>${tax.toFixed(2)}</span></p>
          <hr /> {/* Add a horizontal line */}
          <p>Grand total <span className='price-site'>${totalPrice.toFixed(2)}</span></p> {/* Include the total price with span */}

        </div>
      </div>

    </div>
  );
}

export default SiteCard;
