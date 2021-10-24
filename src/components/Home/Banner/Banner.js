import React from 'react';
import { Col, Container,Button, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = () => {
    return (
      <div className="banner ">
        <Container>
          <Row>
            <Col xs={6}>
              <h1 style={{ color: "#yellow", paddingTop: "100px", fontSize: "60px", }}
                className=" fw-bold"> <span style={{ color: "#53B04C" }}>Health is wealth </span>
                <br />
                <span style={{ color: "#DD4F42" }}> Keep it healthy </span>
              </h1>
              <br />
              <h3>
                <span style={{ color: "#2660A2" }}>
                  Almost before we knew it, <br /> we had left the ground{" "}
                </span>
              </h3>
              <br />
                <Nav.Link as={Link} to="/contacts">
                  <Button id="contacts" variant="success">Make a Appointment</Button>
                </Nav.Link>
            </Col>
            <Col style={{ color: "#2660A2" }} xs={6}></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;