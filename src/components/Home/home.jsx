import React from "react";
import './home.css'

const Home = () => {
  return (
    <div id="home-container">
      <div className="home-content">
        <h1>Welcome to Our Site</h1>
        <p>
          We provide a wide range of high-quality products and services. Our team
          is dedicated to your satisfaction and will do everything we can to
          meet your needs.
        </p>
        <a href="#services" className="cta-button">
          Learn More About Our Services
        </a>
      </div>
      <div className="home-image">
        <img
          src="https://source.unsplash.com/random/600x400/?technology,office"
          alt="A person working on a laptop in a professional office"
        />
      </div>
    </div>
  );
};

export default Home;