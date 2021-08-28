import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import '../../App.css';


export default class NetUsers  extends React.Component {
    
    render() {
      return (
        <div className="temp-box-network">
        <h2>Welcome!</h2>
        <div className="photo">
            <img src="#"></img>
        </div>
        <div className="text">
            
        <p>이름 : </p>
        <p>한 줄 소개 : </p>
        </div>
    </div>
    );
    }
}