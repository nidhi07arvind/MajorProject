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
          <Header2/>&nbsp;
          <div className="main chart-wrapper">
            <Severity
            //   data={this.state.data[1].data}
            //   title={this.state.data[1].title}
            //   color="#70CAD1"
            />
          </div>&nbsp;
          <div className="sub chart-wrapper">
            <Days
            //   data={this.state.data[0].data}
            //   title={this.state.data[0].title}
            //   color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <Feature
            //   data={this.state.data[2].data}
            //   title={this.state.data[2].title}
            //   color="#B08EA2"
            />
          </div>

        </div>
      );
    }
}


export default Dashboard;