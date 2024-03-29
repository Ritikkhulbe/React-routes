import React from 'react';
import "./login.css"

function LoginPage() {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="title">Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input-field" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="input-field" />
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;