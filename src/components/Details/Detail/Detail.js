import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  

  const { serviceId } = useParams();
  return (
    <div>
      <h3>This is detail:{serviceId} </h3>
      
    </div>
  );
};

export default Detail;
