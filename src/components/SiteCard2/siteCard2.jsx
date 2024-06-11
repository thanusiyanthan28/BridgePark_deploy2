import React, { useState } from 'react';
import { DatePicker } from 'antd'; // Import DatePicker from Ant Design
import './siteCard2.css'; // Import CSS file for styling
import moment from 'moment'; // Import moment for date formatting

const roomDetails = {
  SS: { price: 48 },
  DS: { price: 58 },
  TS: { price: 60 },
  TRIS: { price: 85 },
  DE: { price: 65 },
  TE: { price: 68 },
  TRI: { price: 92 },
  TRE: { price: 97 },
  QE: { price: 120 },
  DBE: { price: 110 },
  EXDE: { price: 120 },
  TWL: { price: 125 },
  DRM: { price: 350 },
};

const SiteCard2 = () => {
  const [formData, setFormData] = useState({
    checkInDate: moment(), // Initialize with current date
    checkOutDate: moment(), // Initialize with current date
    adults: 1,
    children: 0,
    roomType: 'SS', // Default room type
    language: 'en',
    currency: 'USD',
  });

  const bookingEngineUrl = `https://direct-book.com/properties/bridgeparkdirect`;

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
  };

  const handleRoomTypeChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      roomType: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPersons = formData.adults + formData.children;
    const queryString = new URLSearchParams({
      check_in_date: formData.checkInDate.format('YYYY-MM-DD'),
      check_out_date: formData.checkOutDate.format('YYYY-MM-DD'),
      number_adults: formData.adults,
      number_children: formData.children,
    });
    window.location.href = `${bookingEngineUrl}?${queryString.toString()}`;
  };

  const roomPrice = roomDetails[formData.roomType].price;
  const totalPersons = formData.adults + formData.children;
  const totalPrice = totalPersons > 2 ? roomPrice * 2 : roomPrice;
  const tax = roomPrice * 0.1; // Assuming 10% tax rate based on base room price

  return (
    <div className='app-container2-site2'>
      <div className="app-container-site2">
        <div className="card-site2">
          <div className="card-body-site2">
            <table className='table-site2'>
              <tbody className='tbody-site2'>
                <tr className='tr-site2'>
                  <td className='td-site2'>
                    <p className='check-head-site2'>CHECK IN</p>
                    <div className="date-input-container-site2">
                      <DatePicker
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={(date) => handleDateChange(date, 'checkInDate')}
                        format="DD MMM"
                      />
                    </div>
                  </td>
                  <td className='td-site2'>
                    <p className='check-head-site2'>CHECK OUT</p>
                    <div className="date-input-container-site2">
                      <DatePicker
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={(date) => handleDateChange(date, 'checkOutDate')}
                        format="DD MMM"
                      />
                    </div>
                  </td>
                </tr>
                <tr className='tr-site2'>
                  <td className='td-site2'>
                    <label className='check-head-site2'>ADULTS</label>
                    <div className="counter-site2">
                      <button className="valueupdown-site2" onClick={() => handleCountChange('adults', -1)}>-</button>
                      <input type="text" name="adults" value={formData.adults.toString().padStart(2, '0')} readOnly />
                      <button className="valueupdown-site2" onClick={() => handleCountChange('adults', 1)}>+</button>
                    </div>
                  </td>
                  <td className='td-site2'>
                    <label className='check-head-site2'>CHILDREN</label>
                    <div className="counter-site2">
                      <button className="valueupdown-site2" onClick={() => handleCountChange('children', -1)}>-</button>
                      <input type="text" name="children" value={formData.children.toString().padStart(2, '0')} readOnly />
                      <button className="valueupdown-site2" onClick={() => handleCountChange('children', 1)}>+</button>
                    </div>
                  </td>
                </tr>
                <tr className='tr-site2'>
                  <td className='td-site2' colSpan="2">
                    <label className='check-head-site2'>ROOM TYPE</label>
                    <div className="room-type-container-site2">
                      <select name="roomType" value={formData.roomType} onChange={handleRoomTypeChange}>
                        {Object.keys(roomDetails).map(key => (
                          <option key={key} value={key}>{key}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="button-site2" type="submit" onClick={handleSubmit}>Modify</button>
          </div>
        </div>
        <div>
          <p>Room Price <span className='price-site2'>${roomPrice.toFixed(2)}</span></p>
          <p>Tax <span className='price-site2'>${tax.toFixed(2)}</span></p>
          <hr />
          <p>Grand total <span className='price-site2'>${(totalPrice + tax).toFixed(2)}</span></p>
        </div>
      </div>
    </div>
  );
}

export default SiteCard2;
