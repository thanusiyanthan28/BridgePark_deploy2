
import React from "react";
import { Input, Row, Col, DatePicker, Divider } from "antd";
import dayjs from "dayjs";
import PrimaryButton from "./PrimaryButton";
import "../../css/Card.css";
import NumberPicker from "./NumberPicker";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <Row gutter={[16, 16]} align="middle">
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="titleH1">CHECK IN</h1>
            </Row>
            <Row>
              <h3 className="titleH3">Friday</h3>
            </Row>
            <Row>
              <DatePicker defaultValue={dayjs("2024-12-01", "YYYY-MM-DD")} />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="titleH1">CHECK OUT</h1>
            </Row>
            <Row>
              <h3 className="titleH3">Friday</h3>
            </Row>
            <Row>
              <DatePicker defaultValue={dayjs("2024-12-01", "YYYY-MM-DD")} />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="titleH1">ADULTS</h1>
            </Row>
            <Row>
              <h3 className="titleH3">No of Persons</h3>
            </Row>
            <Row>
              {/* <Input type="number" min={0} placeholder="Enter number of persons" /> */}
              <NumberPicker placeholder="Enter number of persons" />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider" />
          </Col>
          <Col span={4} className="containerCol">
            <Row>
              <h1 className="titleH1">CHILDREN</h1>
            </Row>
            <Row>
              <h3 className="titleH3">No of Children</h3>
            </Row>
            <Row>
              {/* <Input type="number" min={0} placeholder="Enter number of children" /> */}
              <NumberPicker placeholder="Enter number of children" />
            </Row>
          </Col>
          <Col>
            <Divider type="vertical" className="divider divider4" />
          </Col>
          <Col span={4} className="button-col">
            <PrimaryButton title="CHECK AVAILABILITY" className="btnPrimary-check" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Card;
