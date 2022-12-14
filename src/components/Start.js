import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"


export default function Start() {

    return(

        <div className="div--start" >
            <div className="start--body">
                <h1 className="start--h1"> Start Saving Money With Cleist!</h1>
                <div className="image-wrapper">
                    <img src={logo} alt="logo" className="start--logo"/>
                </div>
                <Link to="/home" className="start--button">Save Money</Link>
                <p className="start--copyright">Copyright © 2022 by Cleist Solutions. All rights reserved</p>
            </div>
        </div>
    );
}