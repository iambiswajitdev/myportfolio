import React from "react";
import Sidebar from "./sidebar";
import { Col, Container, Row } from "react-bootstrap";
const Base = ({ children }) => {
  return (
    <>
      <div className="main">
        <Container fluid>
          <Row>
            <Col lg={3} className="nopadding">
              <div className="sideBar">
                <Sidebar />
              </div>
            </Col>
            <Col lg={9}>
              <div className="home">{children}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Base;
