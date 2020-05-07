import React, { Component } from "react";
import "../../App.css";

import { Redirect } from "react-router";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel/SidePanel";
import Header from "../Header/Header";

class Home extends Component {
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

    if (!localStorage.getItem("authFlag")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      
      <div>
        <Header/>
        <div className="Hero-Image2">
        <Container>
        
          <div className="container content">
              <div className="login-form-container col-lg-4 col-md-4 col-sm-12 offset-lg-4 offset-md-4 border">
                <div className="login-form-heading input-group pad-top-10 input-group-lg">
                  Enter values to predict!
                </div>
                <hr />
          <div class="form-group">
                  <label class="form-group entry-form-control">Day of the Week </label>
                  <select
                    class="form-control entry-form-control">
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select" color="green">Select</option>
                    <option value="Owner">Sunday</option>
                    <option value="Buyer">Monday</option>
                    <option value="Buyer">Tuesday</option>
                    <option value="Buyer">Wednessday</option>
                    <option value="Buyer">Thursdayday</option>
                    <option value="Buyer">Friday</option>
                    <option value="Buyer">Saturday</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-group entry-form-control">Weather Conditions </label>
                  <select
                    class="form-control entry-form-control">
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select" color="green">Select</option>
                    <option value="Owner">Dark - lights lit</option>
                    <option value="Buyer">Dark</option>
                    <option value="Buyer">Daylight</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-group entry-form-control">Road Class </label>
                  <select
                    class="form-control entry-form-control">
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select" color="green">Select</option>
                    <option value="Owner">Dark - lights lit</option>
                    <option value="Buyer">Dark</option>
                    <option value="Buyer">Daylight</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-group entry-form-control">Junction Control </label>
                  <select
                    class="form-control entry-form-control">
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select" color="green">Select</option>
                    <option value="Owner">Dark - lights lit</option>
                    <option value="Buyer">Dark</option>
                    <option value="Buyer">Daylight</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-group entry-form-control">Junction Details </label>
                  <select
                    class="form-control entry-form-control">
                    onChange={this.profileChangeHandler}
                  >
                    <option value="select" color="green">Select</option>
                    <option value="Owner">Dark - lights lit</option>
                    <option value="Buyer">Dark</option>
                    <option value="Buyer">Daylight</option>
                  </select>
                </div>
                
                
               
        
                <div className="form-group login-form-control">
                  <button
                    className="btn-login col-md-12 col-sm-12"
                    // btn btn-login col-lg-12 col-md-12 col-sm-12
                    onClick={this.submitPredict}
                  >
                    Predict{" "}
                  </button>
                </div>
              </div>
            </div> 
          {/* </div> */}
      </Container>
      
      </div>
      
      </div>
    );
  }
}
//export Home Component
export default Home;
