import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import styled from 'styled-components'
import '../../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NetUsers from "./NetUsers";


export default class Network  extends React.Component {
    
    render() {
      const {users} = this.props;
      console.log(users)
      return (
        <div className="control-network">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="flexible">
            <NetUsers />
            <NetUsers />
            <NetUsers />
            <NetUsers />
            <NetUsers />
            <NetUsers />
            <NetUsers />
            <NetUsers />
            
          </div>
          <div></div>
        </div>
        
      );
    }
  }