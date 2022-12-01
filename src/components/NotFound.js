import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

export default function NotFound() {
    return(
        <div>
            <Header/>
            <h1>EROR 404</h1>
            <Link to="/home" className="generic--button">Home</Link>
        </div>   
    );
}