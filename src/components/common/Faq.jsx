import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import '../../css/Faq.css';

const { Panel } = Collapse;

const FAQ = () => {
    const expandIcon = ({ isActive }) => {
        return isActive ? <CaretDownOutlined style={{ transform: 'rotate(180deg)' }} /> : <CaretRightOutlined />;
      };
  return (
    <div className="faq-container">
      <div className="faq-row">
        <div className="faq-heading">
          <h1>FAQs about Bridge Park Hotel</h1>
        </div>
        <div className="faq-content">
          <Collapse accordion className="faq-collapse" expandIconPosition="right" expandIcon={expandIcon}>
            <Panel header="How far Bridge Park Hotel from the center of Landon?" key="1">
              <p>Bridge Park Hotel is 10 km from the center of London. All distances are measured in straight lines. Actual travel distances may vary.</p>
            </Panel>
            <Panel header="What type of room can I book at Bridge park Hotel?" key="2">
              <p>Room options at Bridge Park Hotel include:</p>
              <ul>
                <li>Double</li>
                <li>Twin</li>
                <li>Triple</li>
                <li>Quad</li>
                <li>Single</li>
              </ul>
            </Panel>
            <Panel header="How much does it cost to stay at Bridge Park Hotel?" key="3">
              <p>The prices at Bridge Park Hotel may vary depending on your stay (e.g. dates, hotel's policy etc.). To see prices, enter your dates.</p>
            </Panel>
            <Panel header="What is thereto do at Bridge Park Hotel?" key="4">
              <p>Bridge Park Hotel offers the following activities/services (charges may apply):</p>
              <ul>
                <li>Live sports events (broadcast)</li>
              </ul>
            </Panel>
            <Panel header="How kind of breakfast is serves at Bridge Park Hotel?" key="5">
              <p>Guests staying at Bridge Park Hotel can enjoy a highly-rated breakfast during their stay (guest review score: 6.6).</p>
              <p>Breakfast option(s) include:</p>
              <ul>
                <li>Full English/Irish</li>
                <li>Buffet</li>
              </ul>
            </Panel>
            <Panel header="What are the check-in and check-out times at Bridge Park Hotel?" key="6">
              <p>Check-in at Bridge Park Hotel is from 2:00 PM, and check-out is until 11:00 AM.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
