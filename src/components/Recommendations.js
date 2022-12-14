import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Device from "./Device";
import Footer from "./Footer";

export default function Recommendations() {
    //GET Response Data
    const {state} = useLocation();
    const { devices } = state; 
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
        <div style={{height: '100vh'}}>
            <Header/>
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column', 
                flex: 1, 
                height: '68vh'}}>
                <div>
                    <h1>Recommendations</h1>
                </div>
                <br/>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {deviceList}
                </div>
                <br/>
                <Link to="/home" className="generic--button"> Back</Link>
            </div>
            <Footer />
        </div> 
    );
}