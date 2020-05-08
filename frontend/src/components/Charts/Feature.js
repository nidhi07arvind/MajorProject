import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
import { Container } from "react-bootstrap";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps=[];


class Feature extends Component{

    addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "dark2",
			title:{
				text: "Importance of each feature"
			},
			axisX: {
				title: "Features",
				reversed: true,
			},
			axisY: {
				title: "Importance of feature",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  (Math.random()*(0.8-0.6)+0.6), label: "Junction_Detail" },
					{ y:  (Math.random()*(1-0.8)+0.8), label: "Speed_Limit" },
					{ y:  (Math.random()*(0.5-0.7)+0.7), label: "Weather_Conditions" },
					{ y:  (Math.random()*(0.4-0.6)+0.6), label: "Road_Type" },
					{ y:  (Math.random()*(0.3-0.6)+0.6), label: "Urban_Rural" },
					{ y:  (Math.random()*(0.3-0.7)+0.7), label: "Light_Conditions" },
					{ y:  (Math.random()*(0.2-0.5)+0.5), label: "Time" }
				]
			}]
		}
        return(
            <div>
				<Container>
			<div style= {{width:'500px',paddingLeft:'-20px'}} className="container content col-lg-200">
				<div className=" login-form-container col-lg-50 col-lg-50 col-lg-50">
                <CanvasJSChart options = {options}
                onRef={ref => this.chart = ref}
                />
            </div>
			</div>
			</Container>
			</div>

        );

    }
}

export default Feature;