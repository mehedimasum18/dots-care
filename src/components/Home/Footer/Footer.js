import React from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Nav } from "react-bootstrap";
import "./Footer.css"
const Footer = () => {
    return (
      <div>
        <div className="top_footer">
          <Container>
            <Row>
              <Col sm={8}>
                <h3>What are you waiting for?</h3>
                <p> Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor.</p>
              </Col>
              <Col sm={4}>
                <Nav.Link as={Link} to="/contacts">
                  <Button id="contacts" variant="success">Contact us now</Button>
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mt-5 p-5 footer_container">
          <Container>
            <Row>
              <Col>
                <h1 style={{ color: "#53B04C", fontWeight: "bolder" }}>DOT'S HEALTH</h1>
                <h3 style={{ color: "#EF6262", fontWeight: "bolder" }}> 24/7 hours Medical Service </h3>
                <p> Seed good winged wherein which night multiply midst does not fruitful</p>
              </Col>
              <Col className="quick_link">
                <h3>Quick Link </h3>
                <ul style={{ listStyle: "none", textItems: "right" }}>
                  <li>Contact Us</li>
                  <li>Services </li>
                  <li>Feedback </li>
                  <li>Privacy </li>
                </ul>
              </Col>
              <Col>
                <h2>Contact Info</h2>
                <p>Address: 106, Motijheel, Dhaka, Bangladesh.</p>
                <p> Mobile: +880********** <br />
                  Email:dotshealth0@gmail.com
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Footer;