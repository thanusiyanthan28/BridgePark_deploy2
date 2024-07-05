import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import "./Faq.css";
import Card from "../common/Card";
import SiteCard from "../Sitecard/siteCard";

const { Panel } = Collapse;

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const navigate = useNavigate();
  const expandIcon = ({ isActive }) => {
    return isActive ? (
      <CaretDownOutlined style={{ transform: "rotate(180deg)" }} />
    ) : (
      <CaretRightOutlined />
    );
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const faqData = [
    {
      key: "1",
      question: "Is there free WiFi at Bridge Park Hotel?",
      answer: "FREE wireless internet is available throughout.",
    },
    {
      key: "2",
      question: "What are the Check-in and Check-out times at Bridge Park Hotel?",
      answer: "The Check-in at Bridge Park Hotel is from 14:00 and Check-out is until 11:00",
    },
    {
      key: "3",
      question: "How can I get to Bridge Park Hotel?",
      answer: "Please visit our location page to get directions to the property",
    },
    {
      key: "4",
      question: "Can I park my car at Bridge Park Hotel?",
      answer: "There is FREE parking at The Bridge Park Hotel.",
    },
    {
      key: "5",
      question: "What kind of breakfast is served at Bridge Park Hotel?",
      answer: "At Bridge Park Hotel we offer Room Only options or Continental Breakfast options, or once you check in you can request to pay extra for a cooked breakfast.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq-main">
        {isMobile ? (
          <div className="faq-sitecard">
            <SiteCard />
          </div>
        ) : (
          <div className="faq-card">
            <Card />
          </div>
        )}
      </div>
      <div className="faq-title">FAQ</div>
      <div className="faq-sub"></div>
      <div className="faq-container">
        <div className="faq-row">
          <div className="faq-heading">
            <h1 className="faq-Mainheading">Frequently Asked Questions</h1>
          </div>
        </div>
        <div className="faq-content">
          <Collapse
            accordion
            className="faq-collapse"
            expandIconPosition="right"
            expandIcon={expandIcon}
          >
            {faqData.map(({key,question,answer}) =>(
              <Panel header={question} key={key} className="panel-border">
              <p>
                {answer}{" "}
                <button className="faq-view-full-text" onClick={() => navigate(`/faq/${key}`)}>View full details</button>
              </p>
            </Panel>
            ))}
           
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
