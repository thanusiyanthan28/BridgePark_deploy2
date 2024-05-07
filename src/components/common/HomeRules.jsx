import React from "react";
import "../../css/HouseRules.css";

const HouseRules = () => {
  return (
    <div className="house-rules-container">
      <div className="title-container">
        <h1 className="house-rules-title">House rules</h1>
        <button className="availability-button">See Availability</button>
      </div>
      <p className="house-rules-description">
        Bridge Park Hotel takes special requests - add in the next step!
      </p>
      <div className="house-rules-container-body">
        <div class="house-rules-section">
          <div class="house-rules-item">Check-in</div>
          <ul class="house-rules-info">
            <li>From 14:00</li>
            <li>
              Guests are required to show a photo identification and credit card
              upon check-in
            </li>
          </ul>
          <hr class="house-rules-divider" />
        </div>

        {/* <div className="house-rules-section">
          <div className="house-rules-item house-rules-icon">➔ Check-out</div>
          <p className="house-rules-info">Until 11:00</p>
          <hr className="house-rules-divider" />
        </div> */}
        {/* <div className="house-rules-section">
          <div className="house-rules-item house-rules-icon">
            ⓘ Cancellation/ prepayment
          </div>
          <p className="house-rules-info">
            Cancellation and prepayment policies vary according to accommodation
            type. Please check what
            <a href="#" className="house-rules-link">
              conditions
            </a>{" "}
            may apply to each option when making your selection.
          </p>
          <hr className="house-rules-divider" />
        </div> */}
        {/* <div className="house-rules-section">
          <div className="house-rules-item house-rules-icon">
            ⓘ Refundable damage deposit
          </div>
          <p className="house-rules-info">
            A damage deposit of GBP 100 is required on arrival. That's about LKR
            37283. This will be collected by credit card. You should be
            reimbursed on check-out. Your deposit will be refunded in full via
            credit card, subject to an inspection of the property.
          </p>
          <hr className="house-rules-divider" />
        </div> */}
        {/* <div className="house-rules-section">
          <div className="house-rules-item house-rules-icon">
            👶 Children and beds
          </div>
          <p className="house-rules-info">Child policies</p>
          <p className="house-rules-info">Children of any age are welcome.</p>
          <p className="house-rules-info">
            Children 13 years and above will be charged as adults at this
            property.
          </p>
          <p className="house-rules-info">
            To see correct prices and occupancy information, please add the
            number of children in your group and their ages to your search.
          </p>
          <p className="house-rules-info font-medium">
            Cot and extra bed policies
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default HouseRules;
