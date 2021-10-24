import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfound from "../../images/banner/404.png";

const NotFound = () => {
  return (
    <div>
      <img src={notfound} alt="" />
      <br />
      <Button style={{ marginLeft: "20px", padding: ".5rem", marginBottom:"2rem" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
          Go Back 
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
