import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from "../../assets/logo.jpg"

function Header() {
  return (
    <div className="navbar">

      <Link to="/dashboard">
      <img className="logo" src={logo} />
      </Link>

      <div className="links">
        <Link to="/"> Home </Link>
      </div>
      <div className='buttons'>
      <div className='loginbutton '>
        <Link to="/login">Login</Link>
      </div>
      <div className='signbutton'>
        <Link to="/signup">SignUp</Link>
      </div></div>


    </div>
  )
}

export default Header
