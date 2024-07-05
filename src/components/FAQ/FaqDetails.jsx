import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FaqDetails.css";

const FaqDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const faqData = {
    1: {
      question: "Is there free WiFi at Bridge Park Hotel?",
      answer: "FREE wireless internet is available throughout.",
    },
    2: {
      question:
        "What are the Check-in and Check-out times at Bridge Park Hotel?",
      answer:
        "The Check-in at Bridge Park Hotel is from 14:00 and Check-out is until 11:00",
    },
    3: {
      question: "How can I get to Bridge Park Hotel?",
      answer:
        "Please visit our location page to get directions to the property",
    },
    4: {
      question: "Can I park my car at Bridge Park Hotel?",
      answer: "There is FREE parking at The Bridge Park Hotel.",
    },
    5: {
      question: "What kind of breakfast is served at Bridge Park Hotel?",
      answer:
        "At Bridge Park Hotel we offer Room Only options or Continental Breakfast options, or once you check in you can request to pay extra for a cooked breakfast.",
    },
  };

  const faq = faqData[id];

  return (
    <div>
      <div className="FaqDetails-main"></div>
      <div className="FaqDetails-title">{faq?.question}</div>
      <div className="FaqDetails-container">
        <p>{faq?.answer}</p>
        <button className="FaqDetails-view-full-text" onClick={() => navigate("/Faq")}>View full FAQ</button>
      </div>
    </div>
  );
};

export default FaqDetails;
