import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/banner/about.png'
import "./About.css"
const About = () => {
    return (
      <div id="about">
        <div className="about" style={{ marginTop: "1rem", marginBottom:"2rem"}}>
          <h1 style={{ fontWeight: "bolder", color: "white" }}> About Us</h1>
        </div>
        <Container>
          <Row>
            <Col style={{ fontWeight: "bolder", textAlign: "start" }} xs={6}>
              <div>
                <h2 style={{ fontWeight: "bolder", color: "Green" }}>
                  Health Data Management</h2>
                <h5 className="sub_head">Health Dashboard Development </h5>
                <p>
                  {" "}
                  We are experts in dashboard engineering, and have made
                  numerous dashboards for government and non governmental
                  organizations. </p>
              </div>
              <div>
                <h5 className="sub_head">Data Preparation, Integration and Open data</h5>
                <p>We are experts in dashboard engineering, and have made
                  numerous dashboards for government and non governmental
                  organizations. </p>
              </div>
              <div>
                <h5 className="sub_head">
                  Health Data Visualisation, Dissemination, Engagement &
                  Advocacy
                </h5>
                <p>We are experts in dashboard engineering, and have made
                  numerous dashboards for government and non governmental
                  organizations. </p>
              </div>
            </Col>
            <Col xs={6}>
              <img src={img} alt="" />{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default About;