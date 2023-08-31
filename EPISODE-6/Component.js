import React from "react";
import './App.css';

const Component = (props) =>{
    return(
        <div className="head">
            <h1>{props.name}</h1>
            <img src = {props.imageUrl} className="logo"></img>
            <p>Rank-1</p>
        </div>
        )
}

export default Component;