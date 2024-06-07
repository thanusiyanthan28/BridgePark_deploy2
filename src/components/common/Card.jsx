import React, { useState, useEffect } from "react";
import { Row, Col, DatePicker, Divider } from "antd";
import dayjs from "dayjs";
import PrimaryButton from "./PrimaryButton";
import "../../css/Card.css";
import NumberPicker from "./NumberPicker";
import weekday from "dayjs/plugin/weekday";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(weekday);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
});

function Card() {
  const [checkInDate, setCheckInDate] = useState(dayjs()); // Default to today's date
  const [checkOutDate, setCheckOutDate] = useState(dayjs()); // Default to today's date
  const [adults, setAdults] = useState(1); // Default to 1 adult
  const [children, setChildren] = useState(0); // Default to 0 children

  useEffect(() => {
    // Set data attributes on body tag
    document.body.setAttribute("data-region", "emea");
    document.body.setAttribute("data-channelcode", "bridgeparkdirect");
  }, []);

  const handleCheckAvailability = () => {
    const checkIn = checkInDate ? checkInDate.format("YYYY-MM-DD") : '';
    const checkOut = checkOutDate ? checkOutDate.format("YYYY-MM-DD") : '';
    const bookingUrl = `https://direct-book.com/properties/bridgeparkdirect?check_in_date=${checkIn}&check_out_date=${checkOut}&number_adults=${adults}&number_children=${children}`;
    window.open(bookingUrl, "_blank"); // Open in a new window
  };

  return (
    <div className="card">
      <div className="card-body">
        <Row gutter={[16, 16]} align="middle">
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="card-titleH1">CHECK IN</h1>
            </Row>
            <Row>
              <h3 className="card-titleH3">{checkInDate ? checkInDate.format("dddd") : 'Select a date'}</h3>
            </Row>
            <Row>
              <DatePicker
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                format="DD MMM"
                className="custom-datepicker"
              />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="card-titleH1">CHECK OUT</h1>
            </Row>
            <Row>
              <h3 className="card-titleH3">{checkOutDate ? checkOutDate.format("dddd") : 'Select a date'}</h3>
            </Row>
            <Row>
              <DatePicker
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                format="DD MMM"
                className="custom-datepicker"
              />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="card-titleH1">ADULTS</h1>
            </Row>
            <Row>
              <h3 className="card-titleH3">No of Persons</h3>
            </Row>
            <Row>
              <NumberPicker
                placeholder="Enter number of persons"
                value={adults}
                onChange={setAdults}
              />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="card-titleH1">CHILDREN</h1>
            </Row>
            <Row>
              <h3 className="card-titleH3">No of Children</h3>
            </Row>
            <Row>
              <NumberPicker
                placeholder="Enter number of children"
                value={children}
                onChange={setChildren}
              />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider divider4" />
          </Col>
          <Col span={4} className="button-col">
            <PrimaryButton
              title="CHECK AVAILABILITY"
              className="btnPrimary-check"
              onClick={handleCheckAvailability}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Card;
