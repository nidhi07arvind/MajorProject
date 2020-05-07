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
        
        <div>
        <Header2/>
        {/* <div className="Hero-Image2"> */}
        <Container>&nbsp;
        
        <div class="bs-example"> 
    <div class="alert alert-success alert-dismissible fade show ">
        <strong>Success!</strong> Your message has been sent successfully.
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <div class="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> A problem has been occurred while submitting your data.
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <div class="alert alert-warning alert-dismissible fade show">
        <strong>Warning!</strong> There was a problem with your network connection.
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <div class="alert alert-info alert-dismissible fade show">
        <strong>Info!</strong> Please read the comments carefully.
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <div class="alert alert-success alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
</div>
      </Container>
      
      </div>
      
    );
  }
}
//export Home Component
export default Alerts;
