import React, {Component} from "react";
import './Dashboard.css';
import Days from "../Charts/Days";
import Severity from "../Charts/Severity";
import Feature from "../Charts/Feature";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";

class Dashboard extends Component{

render(){
    return (
        <div className="App">
          <Header2/>
          <div style={{height:'900px'}}className="Hero-Image2">
          <div className="main chart-wrapper">
            <Severity
            />
          </div>&nbsp;
          <div className="sub chart-wrapper">
            <Days
            />
          </div>
          <div className="sub chart-wrapper">
            <Feature
            />
          </div>
          </div>
        </div>
      );
    }
}


export default Dashboard;