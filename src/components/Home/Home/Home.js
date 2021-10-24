import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <div className="first_col">
        <h3>Emergency hotline</h3>
        <h1>(+880) – 256 567 550</h1>
        <p> We provide 24/7 customer support. Please feel free to contact us for
          emergency case.</p>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
