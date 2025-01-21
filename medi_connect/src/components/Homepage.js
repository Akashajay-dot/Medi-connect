import React from 'react'
import background from "../assets/BG.png"
import Header from './Header'
import "../styles/Homepage.css"
function Homepage() {
  return (
    <div className="mainBody">
    <img className='bgImage' src={background} alt="" />
    <div className="overlay" >
      <Header/>
      <div className="hero">
        <div className="heroInner">
        <p>Your Gateway to Hassle-Free Medical Appointments</p>
          <h1>
            BOOK NOW
          </h1>
          <p>
          Welcome to Medi-Connect, the future of healthcare accessibility. Easily <br /> schedule hospital appointments with just a few clicks. Say goodbye to <br /> long waiting times and hello to convenience.
          </p>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Homepage