import React from "react";
import './home.css'

const Dashboard = () => {
  return (
    <div id="home-container">
      <div className="home-content">
        <h1>Welcome to The Dashboard</h1>
        <p>
          This dashboard is/will be under contruction because we only have the task to show routing
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

export default Dashboard;