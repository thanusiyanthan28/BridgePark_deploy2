import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd'; // Import DatePicker from Ant Design
import './siteCard.css'; // Import CSS file for styling
import moment from 'moment';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(weekday);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
});

const SiteCard = ({ selectedRoomId,roomPrice }) => {
  const [formData, setFormData] = useState({
    checkInDate: dayjs(),
    checkOutDate: dayjs(),
    adults: 1,
    children: 0,
    language: 'en',
    currency: 'USD',
  });

  const [daysOfWeek, setDaysOfWeek] = useState({
    checkInDay: dayjs().format('dddd'),
    checkOutDay: dayjs().format('dddd'),
  });

  
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const bookingEngineUrl = `https://direct-book.com/properties/bridgeparkdirect`;

  const handleCountChange = (fieldName, increment) => {
    setFormData(prevState => {
      const updatedValue = Math.max(0, prevState[fieldName] + increment);
      return {
        ...prevState,
        [fieldName]: updatedValue,
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
        checkInDay: date ? date.format('dddd') : 'Select the date'
      }));
    } else if (fieldName === 'checkOutDate') {
      setDaysOfWeek(prevState => ({
        ...prevState,
        checkOutDay: date ? date.format('dddd') : 'Select the date'
      }));
    }
  };
  const handleClearDate = (fieldName) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: null
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



  const calculatePrices = () => {
    const personCount = formData.adults + formData.children;
    let price = roomPrice;
    if (personCount > 2) {
      price *= 2; // Double the price if more than two persons
    }
    const tax = price * 0.1; // Assuming a tax rate of 10%
    setTax(tax);
    setTotalPrice(price + tax);
  };

  useEffect(() => {
    valueCheck(selectedRoomId);
  }, [selectedRoomId]);

  useEffect(() => {
    console.log('selectedRoomId:', selectedRoomId);
    console.log('roomPrice:', roomPrice);
    calculatePrices();
  }, [formData.adults, formData.children, roomPrice]);

  const currentDate = moment().format('DD MMM');
  const valueCheck = (value) => value > 0;
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
                    <div className='current-day-site'>{daysOfWeek.checkInDay}</div>
                    <div className="date-input-container-site">
                    <DatePicker
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={(date) => handleDateChange(date, 'checkInDate')}
                        format="DD MMM"
                        placeholder="Select date"
                        className="custom-datepicker1"
                      />
                    </div>
                  </td>
                  <td className='td-site'>
                    <p className='check-head-site'>CHECK OUT</p>
                    <div className='current-day-site'>{daysOfWeek.checkOutDay}</div>
                    <div className="date-input-container-site">
                    <DatePicker
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={(date) => handleDateChange(date, 'checkOutDate')}
                        format="DD MMM"
                        placeholder="Select date"
                        className="custom-datepicker1"
                      />
                    </div>
                  </td>
                </tr>
                {/* <tr className='tr-site'>
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
                </tr> */}
              </tbody>
            </table>
            <button className="button-site" type="submit" onClick={handleSubmit}>Modify</button>
          </div>
        </div>
        <div>
          <p>1 x  Room Price <span className='price-site'>£{roomPrice ? roomPrice.toFixed(2): '0.00'}</span></p>
          <p>Tax <span className='price-site'>£{tax.toFixed(2)}</span></p>
          <hr />
          <p>Grand total <span className='price-site'>£{totalPrice.toFixed(2)}</span></p>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
