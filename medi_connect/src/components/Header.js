import React from 'react'
import "../styles/Header.css";
import logo from "../assets/logo.png"
function Header() {
  return (
    <div className='header'>
        <div className="headerLft">
            <img src={logo} className="headerLogo" alt="" />
            <h2>Medi-Connect</h2>
        </div>
        <div className="headerRit">
            <p>Home</p>
            <p>Login</p>
            <p>About</p>
            <p>Contact</p>
            <div className='headerLftTxt'><p>Book Appointments with ease</p></div>
        </div>
    </div>
       
  )
}

export default Header