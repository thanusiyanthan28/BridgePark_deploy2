// // DatePicker.js
// import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './siteCard.css';

// function CustomDatePicker({ name, selectedDate, onChange }) {
//   const handleChange = (date) => {
//     onChange(date, name); // Pass the selected date and the field name to the onChange function
//   };

//   const currentDate = new Date();
//   const placeholderText = selectedDate 
//     ? selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) 
//     : currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

//   return (
//     <div className="custom-date-picker">
//       <div className="day-of-week">
//         {selectedDate 
//           ? selectedDate.toLocaleDateString('en-US', { weekday: 'long' }) 
//           : currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
//       </div>

//       <DatePicker
//         selected={selectedDate}
//         onChange={handleChange}
//         dateFormat="dd MMM" // This format allows selecting both the month and the date
//         showMonthDropdown
//         showYearDropdown
//         dropdownMode="select"
//         placeholderText={placeholderText}
//       />
//     </div>
//   );
// }

// export default CustomDatePicker;

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './siteCard.css';

function CustomDatePicker({ name, selectedDate, onChange }) {
  const handleChange = (date) => {
    onChange(date, name);
  };

  const currentDate = new Date();
  const placeholderText = selectedDate 
    ? selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) 
    : currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

  return (
    <div className="custom-date-picker">
      <div className="day-of-week">
        {selectedDate 
          ? selectedDate.toLocaleDateString('en-US', { weekday: 'long' }) 
          : currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd MMM"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        placeholderText={placeholderText}
      />
    </div>
  );
}

export default CustomDatePicker;
