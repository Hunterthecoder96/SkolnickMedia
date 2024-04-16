import React from "react";
import Logo from "../assets/smc logo.png"
import { Link } from "react-router-dom";
import "../Styles/Nav.css"

export default function Nav(){

    return(
        <div className="nav-container">
        <img className="logo"src={Logo}/>
        <div className="options">
        <Link className="option" to="/">Home</Link>
        <Link className="option" to="/portfolio">Portfolio</Link>
        <Link className="option" to="/about">Who we are</Link>
        <Link className="option" to="/HowWeDoit">How We Do it</Link>
        <p className="option">Contact</p>
        </div>
        </div>
    )
}