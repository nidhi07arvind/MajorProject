import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
import Header2 from "../Header/Header2";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [];
//var updateInterval = 5000;
//var label = dps.label;

class DaysChart extends Component {

	constructor(){
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount(){
		this.updateChart();
		//setInterval(this.updateChart,updateInterval);
	}

	

	updateChart(max,thecount){
		var a=0;
		var s="";
		var r=[{label: "Friday" },{label: "Saturday" },{label: "Thursday" },{label: "Monday" },{label: "Sunday" },{label: "Tuesday" },{label: "Wednesday" }];
		var currsum =0;
		for(var i=0;i<6;i++){
			//r[i]=Math.floor(Math.random()*(101-(7-i-1)-currsum-1+1)+1);
			a=Math.floor(Math.random()*(101-(7-i-1)-currsum-1+1)+1);
			s=r[i].label;
			console.log(a);
			console.log(s);
			//r[i]= randombetween(1, 100-(7-i-1)-currsum);
			//currsum+=r[i];
			currsum+=a;
			dps.push({y:a,label:s})
		}
		//r[7-1]=100-currsum;
		a=100-currsum;
		s=r[6].label;
		dps.push({y:a,label:s})
		console.log(r);

		//dps.push(r);

		this.chart.render();

		//return r;
	}

	//Function to generate random numbers. 

	// randombetween(min, max) {
	// 	return Math.floor(Math.random()*(max-min+1)+min);
	//   }
	
	// generate(max, thecount) {
	// 	var r = [];
	// 	var currsum = 0;
	// 	for(var i=0; i<thecount-1; i++) {
	// 	   r[i] = randombetween(1, max-(thecount-i-1)-currsum);
	// 	   currsum += r[i];
	// 	}
	// 	r[thecount-1] = max - currsum;
	// 	return r;
	//   }

	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Accident Prediction on different Days"
			},
			data: [{
				type: "pie",
                indexLabel: "{label}: {y}%",
                		
				//startAngle: -90,
				dataPoints: dps
			}]
		}
		
		return (
		<div>
            <Header2/>&nbsp;
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
 
export default DaysChart;     
