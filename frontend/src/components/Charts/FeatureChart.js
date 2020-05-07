import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
import Header2 from "../Header/Header2";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps=[];


class FeatureChart extends Component{

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
					{ y:  Math.random(), label: "Junction_Detail" },
					{ y:  Math.random(), label: "Speed_Limit" },
					{ y:  Math.random(), label: "Weather_Conditions" },
					{ y:  Math.random(), label: "Road_Type" },
					{ y:  Math.random(), label: "Urban_Rural" },
					{ y:  Math.random(), label: "Light_Conditions" },
					{ y:  Math.random(), label: "Time" }
				]
			}]
		}
        return(
            <div>
                <Header2/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Container>
				<div className="container content col-lg-200">
				<div className=" chart-container col-lg-200 col-lg-400 col-lg-600 ">
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

export default FeatureChart;