import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import "./Faq.css";
import Card from "../common/Card";
import SiteCard from "../Sitecard/siteCard";
import FaqComponent from "./FaqComponent";

const { Panel } = Collapse;

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const navigate = useNavigate();

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
      <FaqComponent/>
    </div>
  );
};

export default FAQ;
