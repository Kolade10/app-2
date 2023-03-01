import React from "react";
import "./index.css";
import Globe from "./images/globe.png";



export default function Navbar(){
    return(
        <nav className="nav">
            <div className="nav-cont">
            <img className="logo" src={Globe} alt=""/>
            <p className="nav-text">my travel jornal</p>
            </div>
        </nav>
    )
}