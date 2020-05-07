import React, { Component } from "react";
import "../../App.css";

import { Redirect } from "react-router";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel/SidePanel";
import Header2 from "../Header/Header2";

class Alerts extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: [],
    };


    this.submitPredict = this.submitPredict.bind(this);
  }
  //get the books data from backend
  componentDidMount() {}

  handleToggel1 = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.name);
    // let dropdown = toggle;
    this.setState({ [e.target.id]: e.target.name });
  };

  submitPredict = e =>{
    window.location = "/severity-chart";
  }

  render() {
    let redirectVar = null;

    // if (!localStorage.getItem("authFlag")) {
    //   redirectVar = <Redirect to="/login" />;
    // }
    return (
        
        <div id="bg">
        <img src={require("../../Images/forest.jpg")}/>
      </div>

      
    );
  }
}
//export Home Component
export default Alerts;
