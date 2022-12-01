import React from "react";
import { Link } from "react-router-dom";
import StartHeader from "./StartHeader";


export default function Start() {
    return(
        <div className="div--start">
            <StartHeader/>
            <div className="start--body">
            <Link to="/home" className="start--button"> Start</Link>
            </div>
            
        </div>
    );
}