import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Upskill Mafia All rights reserved.</p>
        <Link to="/signup">
        <button className="register-btn">Register for free</button></Link>
      </div>
    </footer>
  );
};

export default Footer;