import React from "react";
import "./index.css"
import Location from "./images/location.png"

export default function Places(props){
    return (
        <div>
            <div className="place">
                <img src={props.img} className="fuji" alt=""/>
                <div className="place-details">
                    <div className="location">
                        <img src={Location} alt=""/>
                        <p>{props.country}</p>
                        <a href={props.href}>{props.link}</a>
                    </div>
                    <h1 className="where">{props.where}</h1>
                    <p className="date">{props.date}</p>
                    <p className="place-desc">{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}