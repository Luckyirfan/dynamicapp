import React from "react";
import { Row, Col } from "react-bootstrap";
import { EmpList } from "./EmpList";
import { dataEmp } from "../service";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Row>
        {dataEmp.map((item) => (
          <Col lg={4}>
            <EmpList dep={item.dep} empdata={item.empData} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
