import React from "react";
import logo from "../images/logo.svg"
export default function Header() {
    return(  
        <div className="div--header">
            <img src={logo} alt="logo" className="header--logo"/>
            <h1 className="header--headline">Your partner for value-fit tech equipment!</h1>
        </div>
    );
}