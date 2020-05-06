import React, {Component} from "react";
import './Dashboard.css';
import Days from "../Charts/Days";
import Severity from "../Charts/Severity";
import Feature from "../Charts/Feature";
import { Link } from "react-router-dom";

class Dashboard extends Component{

render(){
    return (
        <div className="App">
          <div className="main chart-wrapper">
            <Days
            //   data={this.state.data[0].data}
            //   title={this.state.data[0].title}
            //   color="#3E517A"
            />
            <Link to={"/days"}>
            <a href="/days">Click Here</a>
          </Link>
            
          </div>
          <div className="sub chart-wrapper">
            <Severity
            //   data={this.state.data[1].data}
            //   title={this.state.data[1].title}
            //   color="#70CAD1"
            />
            <Link to={"/severity"}>
            <a href="/days">Click Here</a>
          </Link>
          </div>
          <div className="sub chart-wrapper">
            <Feature
            //   data={this.state.data[2].data}
            //   title={this.state.data[2].title}
            //   color="#B08EA2"
            />
            <Link to={"/feature"}>
            <a href="/days">Click Here</a>
          </Link>
          </div>

        </div>
      );
    }
}


export default Dashboard;