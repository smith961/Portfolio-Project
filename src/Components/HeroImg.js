import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="https://google.com" alt="IntroImg"/>
        <div  className="content">
          <p>I'M A FREELANCER</p>
          <h1>React Developer.</h1>
          <div>
            <link to="/project" className="btn">Projects</link>
            <link to="/contact" className="btn btn-light">Contact</link>
          </div>
        </div>

      </div>

      </div>
  )
}

export default Heroimg

