import React, { Component } from 'react';
import Header2 from "../Header/Header2";

class Alert extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: true,
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  render() {

    
    if (this.state.isActive) {
      return (
        <div className="intro">
        <Header2/>&nbsp;
        <div class="background-image"></div>
          <div style={{paddingLeft:'300px',fontSize:'20px',paddingRight:'300px'}}class="alert alert-danger" role="alert">
           <strong>COVID-19 Alert!</strong> Check with the<a href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html" class="alert-link">state or local authorities</a>where you are, along your route, and at your planned destination to learn about local circumstances and any restrictions that may be in place.
          </div>
          <div style={{paddingLeft:'600px',fontSize:'20px'}}class="alert alert-info" role="alert">
           <strong>Coronavirus Response!</strong> Learn more about<a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html" class="alert-link">COVID-19</a>
         </div>
          <div style={{paddingLeft:'600px',fontSize:'20px'}}class="alert alert-warning" role="alert">
           <strong>Danger!</strong> Please follow the instructions<a href="https://www.dmv.ca.gov/portal/dmv/detail/pubs/hdbk/idt_hand_emerg" class="alert-link">here</a>incase of special driving situations.
         </div>
         
          </div>
      );
    }
    return <div/>
  }
}
 
export default Alert;
