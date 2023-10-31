import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import shubham from "../assests/images/shubham.jpg"


const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={shubham} alt="connectedcodes"/>
        </div>
        <div  className="content">
          <p>I'M <strong>smith abdulhakeem</strong>, a freelancer</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>

      </div>

      
  )
}

export default Heroimg

