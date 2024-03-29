import React from 'react';
import './signup.css';

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="form-container">
        <h1 className="title">Sign Up</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="input-field" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input-field" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="input-field" />
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;