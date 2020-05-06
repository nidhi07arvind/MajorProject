import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
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
                <CanvasJSChart options = {options}
                onRef={ref => this.chart = ref}
                />
            </div>
        );

    }
}

export default Feature;