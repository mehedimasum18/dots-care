import React, { useState } from "react";
import { useHistory } from "react-router";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import './Signup.css'

const Signup = () => {
       
  const { signInUsingGoogle, handleSignUp } = useAuth();
  

  const [inputUser, setInputUser] = useState({
      email: "",
      password: "",
      name: ""
  });
    
  const [error, setError] = useState("");
  const { email, password, name } = inputUser;
  const history = useHistory();

  const handleRegistration = async(e) => {
    e.preventDefault();
    
    try {
      setError("");
      await handleSignUp(email, password, name);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed create an account");
    }
  };
  
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInputUser({ ...inputUser, [inputName]: inputValue });
  };

  console.log(inputUser);
  return (
    <div id="login" style={{ padding: "1.5rem" }}>
      <h2 style={{ color: "lightgreen", fontWeight: "bolder" }}>
        Place Sign Up
      </h2>
      <Container>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Form onSubmit={handleRegistration}>
              <Form.Floating className="mb-3">
                <Form.Control
                  onClick={handleChange}
                  name="name"
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name"
                />
                <label htmlFor="floatingInputCustom" required>
                  Name
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  onClick={handleChange}
                  id="floatingInputCustom"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom" required>
                  Email address
                </label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  onClick={handleChange}
                  id="floatingPasswordCustom"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom" required>
                  Password
                </label>
              </Form.Floating>
              <br />
              {error && <h4 style={{ color: "red" }}>{error}</h4>}
              <Button type="submit" variant="success">
                Submit{" "}
              </Button>
            </Form>
            <div
              style={{ padding: "1.5rem", color:"ligh " }}
            >
              ----------- <span>Or</span> ------------
            </div>
            <Button onClick={signInUsingGoogle} variant="success">
              Google Sign In
            </Button>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
      </Container>
      </div>
  );
};

export default Signup;
