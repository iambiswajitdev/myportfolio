import React from "react";
//import { leftarrowIcon } from "../utility/commonStaticData";

import MyContant from "./myContant";
import Logo from "./logo";
import WhatIDo from "./whatIDo";
import MySkile from "./mySkile";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="main_section">
        <Row>
          <Col lg={9}>
            <div className="about_me">
              <MyContant />
            </div>
          </Col>
          <Col lg={3}>
            <div className="myimg">
              <Logo />
            </div>
          </Col>
        </Row>
      </div>
      <div className="contant_section">
        <WhatIDo />
        <MySkile />
      </div>
    </>
  );
};

export default Home;
