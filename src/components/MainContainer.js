import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CellPhone from "./CellPhone";
import Mascot from "./Mascot";
import About from "./About";

const MainContainer = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={5} md={3}>
          <CellPhone />
        </Col>
        <Col xs={5} md={3}>
          <Mascot />
        </Col>
        <Col xs={9} md={6}>
          <About />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContainer;
