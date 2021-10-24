import React from 'react';
import img from '../../../images/banner/doctor.png'
import { Col, Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import "./Contacts.css"
const Contacts = () => {
    return (
      <div id="contacts" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
        <div className="about">
          <h1 style={{ fontWeight: "bolder", color: "white" }}> Contact Us</h1>
        </div>
        <Container className="mt-5">
          <Row>
            <h1 style={{ color: "#20ACC5", fontWeight: "bolder" }}>Get In Touch</h1>
            <h4> Quos ipsum ratione vitae repudiandae voluptatibus rem inventore et
              natus cupiditate tempore! </h4>
            <Col className="pt-5">
              <img style={{ width: "100%" }} src={img} alt="" />
            </Col>
            <Col className="pt-5">
              <div><h1 style={{ color: "#EF6262", fontWeight: "bolder" }}>  Contact Info </h1>
              </div>
              <Form style={{ textAlign: "left" }}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter first name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Last first name" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Write Your Massage</Form.Label>

                  <FloatingLabel controlId="floatingTextarea2" label="Massage">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="success">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Contacts;