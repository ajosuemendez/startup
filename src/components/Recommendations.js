import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import response from "../dummy_responses/response";
import Device from "./Device";

export default function Recommendations() {
    //GET Response Data
    const devices = response.devices;

    const deviceList = devices.map((elem)=>{
        return <Device 
                id={elem._id}
                key={elem._id} 
                name={elem.name} 
                type={elem.type} 
                price={elem.price} 
                currency={elem.currency} 
                amazon_link={elem.amazonLink}
                image={elem.image}/>
    })

    return(
        <div>
            <Header/>
            <h1>Recommendations</h1>
            <br/>
            {deviceList}
            <br/>
            <Link to="/home" className="generic--button"> Back</Link>
        </div> 
    );
}