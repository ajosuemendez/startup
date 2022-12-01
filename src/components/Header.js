import React from "react";
import logo from "../images/logo.png"
export default function Header() {
    return(  
        <div className="div--header">
            <img src={logo} alt="logo" className="header--logo"/>
        </div>
    );
}