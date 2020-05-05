import React, { Component } from "react";
import "../../App.css";

import { Redirect } from "react-router";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: [],
    };
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

  render() {
    //iterate over books to create a table row
    let details = "inside home birches";
    //if not logged in go to login page
    let redirectVar = null;
    let button1 = this.state.button1;
    let button2 = this.state.button2;
    let button3 = this.state.button3;
    let button4 = this.state.button4;
    let button5 = this.state.button5;
    let button6 = this.state.button6;
    let button7 = this.state.button7;
    let button8 = this.state.button8;
    let button9 = this.state.button9;
    let button10 = this.state.button10;
    let button11 = this.state.button11;

    if (!localStorage.getItem("authFlag")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <>
      <div className="Hero-Image">
        {redirectVar}
        <Container>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "center" }}>
              <h2>Enter values to predict</h2>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Day of the week</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="button1"
                  style={{ width: "100px" }}
                >
                  {button1}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button1"
                    name="Monday"
                    onClick={this.handleToggel1}
                  >
                    Monday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Tuesday"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Tuesday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Wednesday"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Wednesday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Thursday"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Thursday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Friday"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Friday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Saturday"
                    onClick={this.handleToggel1}
                    href="#/action-6"
                  >
                    Saturday
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button1"
                    name="Sunday"
                    onClick={this.handleToggel1}
                    href="#/action-7"
                  >
                    Sunday
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Weather conditions</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="button2"
                  style={{ width: "100px" }}
                >
                  {button2}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button2"
                    name="Fine no high winds"
                    onClick={this.handleToggel1}
                  >
                    Fine no high winds
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name="Raining no high winds"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Raining no high winds
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name="Raining + high winds"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Raining + high winds
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name="Fine + high winds"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Fine + high winds
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name="Snowing no high winds"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Snowing no high winds
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name=" Fog or mist"
                    onClick={this.handleToggel1}
                    href="#/action-6"
                  >
                    Fog or mist
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button2"
                    name="Snowing + high winds"
                    onClick={this.handleToggel1}
                    href="#/action-7"
                  >
                    Snowing + high winds
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Road Class</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button3}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button3"
                    name="A"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    A
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button3"
                    name="B"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    B
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button3"
                    name="C"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    C
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button3"
                    name="Motorway"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Motorway
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button3"
                    name="Unclassified"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Unclassified
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Junction Control</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button4}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button4"
                    name="Give way or uncontrolled"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Give way or uncontrolled
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button4"
                    name="Auto traffic signal"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Auto traffic signal
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button4"
                    name="Not at junction or within 20 metres"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Not at junction or within 20 metres
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button4"
                    name="Stop sign"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Stop sign
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Junction Details</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button5}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button5"
                    name="Crossroads"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Crossroads
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="Not at junction or within 20 metres"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Not at junction or within 20 metres
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="T or staggered junction"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    T or staggered junction
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="Mini-roundabout"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Mini-roundabout
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="Roundabout"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Roundabout
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="Private drive or entrance"
                    onClick={this.handleToggel1}
                    href="#/action-6"
                  >
                    Private drive or entrance
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="Other junction"
                    onClick={this.handleToggel1}
                    href="#/action-7"
                  >
                    Other junction
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name=" Slip road"
                    onClick={this.handleToggel1}
                    href="#/action-8"
                  >
                    Slip road
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button5"
                    name="More than 4 arms (not roundabout)"
                    onClick={this.handleToggel1}
                    href="#/action-9"
                  >
                    More than 4 arms (not roundabout)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Light Conditions</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button6}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button6"
                    name="Darkness - lights lit"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Darkness - lights lit
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button6"
                    name="Daylight"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Daylight
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Carriageway Hazards</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button7}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button7"
                    name="Present"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Present
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button7"
                    name="None"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    None
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Special_Conditions_at_Site</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button8}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button8"
                    name="Road sign or marking defective or obscured"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Road sign or marking defective or obscured
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="Auto traffic signal - out"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Auto traffic signal - out
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="Road surface defective"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Road surface defective
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="Mud"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Mud
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="Oily or Greasy"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Oily or Greasy
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="RoadWorks"
                    onClick={this.handleToggel1}
                    href="#/action-6"
                  >
                    RoadWorks
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button8"
                    name="None"
                    onClick={this.handleToggel1}
                    href="#/action-7"
                  >
                    None
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Road surface conditions</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button9}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button9"
                    name="Dry"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Dry
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button9"
                    name="Wet or damp"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Wet or damp
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button9"
                    name="Frost or ice"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Frost or ice
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button9"
                    name="Snow"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Snow
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button9"
                    name="Flood over 3cm. deep"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Flood over 3cm. deep
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Road_Type</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button10}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button10"
                    name="Freeway"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Freeway
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button10"
                    name="Expressway"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    Expressway
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button10"
                    name="Major Highway"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    Major Highway
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button10"
                    name="Minor Highway"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    Minor Highway
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button10"
                    name="Interstate"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Interstate
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button10"
                    name="Primary Street"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Primary Street
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%" }}>
            <Col style={{ textAlign: "right" }}>
              <h4>Speed Limit</h4>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "100px" }}
                >
                  {button11}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    id="button11"
                    name="Less than 10.0"
                    onClick={this.handleToggel1}
                    href="#/action-1"
                  >
                    Less than 10.0
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button11"
                    name="10 - 30"
                    onClick={this.handleToggel1}
                    href="#/action-2"
                  >
                    10 - 30
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button11"
                    name="30 - 50"
                    onClick={this.handleToggel1}
                    href="#/action-3"
                  >
                    30 - 50
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button11"
                    name="50 - 70"
                    onClick={this.handleToggel1}
                    href="#/action-4"
                  >
                    50 - 70
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="button11"
                    name="Greater than 70"
                    onClick={this.handleToggel1}
                    href="#/action-5"
                  >
                    Greater than 70
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ margin: "2%", align: "center" }}>
            <Col style={{ textAlign: "center" }}>
              <Link to="/pie-chart">
                <Button>Submit</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}
//export Home Component
export default Home;
