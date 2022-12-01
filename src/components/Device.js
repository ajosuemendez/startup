import React from "react";

export default function Device(props) {
    return(
        <div className="div--device">
            <p><strong>{props.name}</strong></p>
            <img src={props.image} alt="img" className="device--image"/>
            <p>Price: {props.price} {props.currency}</p>
            <a href={props.amazon_link} className="generic--button">Buy Product</a>
        </div>
    );
}