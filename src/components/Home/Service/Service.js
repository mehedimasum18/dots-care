import React from 'react';
import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    
  const { id, specialize, description, images } =  service;

  return (
    <div>
      <CardGroup>
        <Card className="single_service">
          <Card.Img variant="top" className="card_img" src={images} />
          <Card.Body>
            <Card.Title>
              <h2>{specialize}</h2>
            </Card.Title>
            <Card.Text>
              <p>{description}</p>
            </Card.Text>
          </Card.Body>
          <div style={{ marginBottom: "10px" }}>
            <Link to={`/details/${id}`}>
              <Button variant="warning">View Details </Button>
            </Link>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;



