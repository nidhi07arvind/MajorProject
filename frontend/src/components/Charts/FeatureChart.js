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
            <div className="intro">
				<Header2/>
				<div class="background-image"></div>
					<div className="container chart-body">
						<div style={{paddingTop:'200px'}} className="row" id="bg">
							<div className="col-2"></div>
							<div className="col-8">
								 <CanvasJSChart options = {options} 	
						 		onRef={ref => this.chart = ref} />
							</div>
							<div className="col-2"></div>
					</div>
				</div>
			</div>
        );

    }
}

export default FeatureChart;