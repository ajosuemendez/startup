import React from "react";
import logo from "../images/logo.png"

export default function StartHeader(){
    return(
        <div className="start--header">
            <img src={logo} alt="logo" className="start--logo"/>
            <h1> Start Saving Money With Cleist!</h1>
        </div>
    );
}