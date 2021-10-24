import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [inputUser, setInputUser] = useState({
    email:"",
    password:""
  });
  const { email, password } = inputUser;
  const [error, setError] = useState("");
  const { signInUsingGoogle, handleSignIn  } =  useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        
        history.push(redirect_uri);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  const handleRegistration = async (e) => {
    
    e.preventDefault();

    try {
      setError("");
      await handleSignIn(email, password);
      history.push(redirect_uri);
    } catch (err) {
      console.log(err);
      setError("Failed to login");
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputUser({ ...inputUser, [name]: value });
  };

  return (
    <div id="login" style={{ padding: "1.5rem" }}>
      <h2 style={{ color: "lightgreen", fontWeight: "bolder" }}>Place Login</h2>
      <Container>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Form onSubmit={handleRegistration}>
              <Form.Floating className="mb-3">
                <Form.Control
                  onClick={handleChange}
                  id="floatingInputCustom"
                  type="email"
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
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom" required>
                  Password
                </label>
              </Form.Floating>
              <br />
              {error && <h4 style={{ color: "red" }}>{error}</h4>}
              <Button type="submit" variant="success">
                {" "}
                Submit
              </Button>
            </Form>
            <div
              style={{
                padding: "1.5rem",
                color:
                  "ligh                                                                                                                ",
              }}
            >
              ----------- <span>Or</span> ------------
            </div>
            <Button onClick={handleGoogleLogin} variant="success">
              Google Sign In
            </Button>
            <Button style={{ marginLeft: "20px", padding: ".5rem" }}>
              <Link style={{ color: "white", textDecoration: "none" }}
                to="/signup"> Sign Up
              </Link>
            </Button>
          </Col>
          <Col xs={6} md={4}>
            {" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
