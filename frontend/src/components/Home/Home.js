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

  submitPredict = (e) => {
    window.location = "/severity-chart";
  };

  render() {
    let redirectVar = null;

    if (!localStorage.getItem("authFlag")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        <Header />
        <div style={{ height: "860px" }} className="Hero-Image2">
          <Container>
            <Row>
              <Col>
                <div
                  style={{
                    paddingTop: "130px",
                  }}
                  className="container content"
                >
                  <div
                    style={{ height: "450px" }}
                    className="login-form-container col-lg-12 col-md-4 col-sm-12 border"
                  >
                    <div className="login-form-heading input-group pad-top-10 input-group-lg"></div>

                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Day of the Week{" "}
                      </label>
                      <select
                        style={{ paddingLeft: "-50" }}
                        class="form-control entry-form-control"
                      >
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
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
                      <label class="form-group entry-form-control">
                        Weather Conditions{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Fine + no high winds</option>
                        <option value="Buyer">Fine + high winds</option>
                        <option value="Buyer">Raining + no high winds</option>
                        <option value="Buyer">Raining + high winds</option>
                        <option value="Buyer">Snowing no high winds</option>
                        <option value="Buyer">Snowing + high winds</option>
                        <option value="Buyer">Fog or mist</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Road Class{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">A</option>
                        <option value="Buyer">B</option>
                        <option value="Buyer">C</option>
                        <option value="Buyer">Motorway</option>
                        <option value="Buyer">Unclassified</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Junction Control{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Give way or uncontrolled</option>
                        <option value="Buyer">Auto traffic signal</option>
                        <option value="Buyer">
                          Not at junction or within 20 metres
                        </option>
                        <option value="Buyer">Stop sign</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <div
                  style={{ paddingTop: "110px" }}
                  className="container content"
                >
                  <div
                    style={{ height: "470px" }}
                    className="login-form-container col-lg-12 col-md-4 col-sm-12 border"
                  >
                    <div className="login-form-heading input-group pad-top-10 input-group-lg">
                      Enter values to predict!
                    </div>
                    <hr />
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Junction Details{" "}
                      </label>
                      <select
                        style={{ paddingLeft: "-50" }}
                        class="form-control entry-form-control"
                      >
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Crossroads</option>
                        <option value="Buyer">
                          Not at junction or within 20 metres
                        </option>
                        <option value="Buyer">T or staggered junction</option>
                        <option value="Buyer">Mini-roundabout</option>
                        <option value="Buyer">Roundabout</option>
                        <option value="Buyer">Private drive or entrance</option>
                        <option value="Buyer">Other junction</option>
                        <option value="Buyer">Slip road</option>
                        <option value="Buyer">
                          More than 4 arms (not roundabout)
                        </option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Light Conditions{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Dark - lights lit</option>
                        <option value="Buyer">Dark</option>
                        <option value="Buyer">Daylight</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Carriageway Hazards{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Present</option>
                        <option value="Buyer">None</option>
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
              </Col>
              <Col sm="4">
                <div
                  style={{
                    paddingTop: "130px",
                  }}
                  className="container content"
                >
                  <div
                    style={{ height: "450px" }}
                    className="login-form-container col-lg-12 col-md-4 col-sm-12 border"
                  >
                    <div className="login-form-heading input-group pad-top-10 input-group-lg"></div>

                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Special_Conditions_at_Site{" "}
                      </label>
                      <select
                        style={{ paddingLeft: "-50" }}
                        class="form-control entry-form-control"
                      >
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">
                          Road sign or marking defective or obscured
                        </option>
                        <option value="Buyer">Auto traffic signal - out</option>
                        <option value="Buyer">Road surface defective</option>
                        <option value="Buyer">Mud</option>
                        <option value="Buyer">Oily or Greasy</option>
                        <option value="Buyer">RoadWorks</option>
                        <option value="Buyer">None</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Road surface conditions{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Dry</option>
                        <option value="Buyer">Wet or damp</option>
                        <option value="Buyer">Frost or ice</option>
                        <option value="Buyer">Snow</option>
                        <option value="Buyer">Flood over 3cm. deep</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Road_Type{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Single carriageway</option>
                        <option value="Buyer">Dual carriageway</option>
                        <option value="Buyer">Roundabout</option>
                        <option value="Buyer">One way street</option>
                        <option value="Buyer">Slip road</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-group entry-form-control">
                        Speed Limit{" "}
                      </label>
                      <select class="form-control entry-form-control">
                        onChange={this.profileChangeHandler}>
                        <option value="select" color="green">
                          Select
                        </option>
                        <option value="Owner">Less than 10.0</option>
                        <option value="Buyer">10 - 30</option>
                        <option value="Buyer">30 - 50</option>
                        <option value="Buyer">50 - 70</option>
                        <option value="Buyer">Greater than 70</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* </div> */}
          </Container>
        </div>
      </div>
    );
  }
}
//export Home Component
export default Home;
