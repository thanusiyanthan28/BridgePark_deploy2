import React from "react";
import "../../css/HouseRules.css";
import exportImg from "../../assets/icons/export.gif";
import cancelImg from "../../assets/icons/cancel.gif";
import childrenBed from "../../assets/icons/Children & Beds.gif";
import ageImg from "../../assets/icons/age-restriction.gif";
import pets from "../../assets/icons/Pets.gif";
import groupImg from "../../assets/icons/Group.gif";
import acceptPay from "../../assets/icons/Accepted payment methods.gif";
import refundabaleImg from "../../assets/icons/Refundable DAmage.gif";
import americanex from "../../assets/Facilities of BPH/americanex.png";
import mastercard from "../../assets/Facilities of BPH/mastercard.png";
import visa from "../../assets/Facilities of BPH/visa.jpeg";
import jcb from "../../assets/Facilities of BPH/jcb.png";
import cash from "../../assets/icons/Cash.png";
const HouseRules = () => {
  return (
    <div className="house-rules-container">
      <div className="house-rules-title-container">
        <div className="house-rules-main-title">
          <h1 className="house-rules-title">House rules</h1>
        </div>
        <div className="house-rules-availability-button">
          <button className="availability-button"  onClick={() => window.location.href = 'https://direct-book.com/properties/bridgeparkdirect'}>See All Availability</button>
        </div>
      </div>
      <p className="house-rules-description">
        Bridge Park Hotel takes special requests - add in the next step!
      </p>
      <div className="house-rules-container-body">
        <table class="house-rules-table">
          <tr>
            <td>
              <img
                src={exportImg}
                alt="Check-in Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Check-in</td>
            <td>
              <ul className="house-rules-table-ul">
                <li>From 14:00</li>
                <li>
                  Guests are required to show a photo identification and credit
                  card upon check-in
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={exportImg}
                alt="Check-out Icon"
                class="house-rules-icon-rotate"
              />
            </td>
            <td className="house-rules-info">Check-out</td>
            <td>From 14:00</td>
          </tr>
          <tr>
            <td>
              <img
                src={cancelImg}
                alt="Cancellation Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Cancellation/Prepayment</td>
            <td>
              Cancellation and prepayment policies vary according to
              accommodation type. Please check what{" "}
              <a
                class="condition-link"
                href="https://direct-book.com/properties/bridgeparkdirect/policies?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-07-29&checkOutDate=2024-07-30&trackPage=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                conditions
              </a>{" "}
              may apply to each option when making your selection.
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={refundabaleImg}
                alt="Refundable damage deposit Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Refundable damage deposit</td>
            <td>
              A damage deposit of GBP 100 is required on arrival. That's about
              GBP 100. This will be collected by credit card. You should be
              reimbursed on check-out. Your deposit will be refunded in full via
              credit card, subject to an inspection of the property.
            </td>
          </tr>

          <tr>
            <td>
              <img
                src={childrenBed}
                alt="Childern & bed Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Children and beds</td>
            <td className="house-rules-Details">
              <ul>
                <li className="house-rule-sub-topic">Child policies</li>
                <li>Children of any age are welcome.</li>
                <li>
                  Children 13 years and above will be charged as adults at this
                  property.
                </li>
                <li>
                  To see correct prices and occupancy information, please add
                  the number of children in your group and their ages to your
                  search.
                </li>
                <li className="house-rule-sub-topic">
                  Cot and extra bed policies
                </li>
                <li>Cots and extra beds are not available at this property.</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src={ageImg}
                alt="Age restriction Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Age restriction</td>
            <td className="house-rules-Details">The minimum age for check-in is 18</td>
          </tr>

          <tr>
            <td>
              <img src={pets} alt="Pets Icon" class="house-rules-icon" />
            </td>
            <td className="house-rules-info">Pets</td>
            <td className="house-rules-Details">Pets are not allowed.</td>
          </tr>

          <tr>
            <td>
              <img src={groupImg} alt="Group Icon" class="house-rules-icon" />
            </td>
            <td className="house-rules-info">Groups</td>
            <td className="house-rules-Details">
              When booking more than 5 rooms, different policies and additional
              supplements may apply.
            </td>
          </tr>

          <tr>
            <td>
              <img
                src={acceptPay}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
            </td>
            <td className="house-rules-info">Accepted payment methods</td>
            <td>
              {" "}
              <img
                src={americanex}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
              <img
                src={mastercard}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
              <img
                src={jcb}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
              <img
                src={visa}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
              <img
                src={cash}
                alt="Accepted payment methods Icon"
                class="house-rules-icon"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HouseRules;
