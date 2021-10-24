import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const { user, logOut, signInUsingGoogle } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg md"
        sticky="top"
        bg={"info"}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <span
              style={{
                color: "#c0392b",
                fontWeight: "bolder",
                fontSize: "25px",
              }}
            >
              DOT'S CARE
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <h5>Home</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
          
                <h5>Services</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
               <h5>About Us </h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts">
                <h5>Contact Us </h5>
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="success">
                  <h6>Logout </h6>
                </Button>
              ) : (
                <div>
                  <Button onClick={signInUsingGoogle} variant="success">
                    <h6>LogIn </h6>
                  </Button>
                  <Button style={{ marginLeft: "20px", padding:".5rem" }}>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
                        Sign Up
                    </Link>
                  </Button>
                </div>
              )}

              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ paddingLeft: ".8rem" }}>
                  <a href="#login">{user?.displayName} {user?.images}</a> 
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
