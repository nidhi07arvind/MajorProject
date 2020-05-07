import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
import { Container } from "react-bootstrap";
//var CanvasJSReact = require('../Canvas/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [];
//var updateInterval = 5000;
//var label = dps.label;

class Days extends Component {

	constructor(){
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount(){
		this.updateChart();
		//setInterval(this.updateChart,updateInterval);
	}


	updateChart(){
		var a=0;
		var max=0;
		var min=0;
		var cursum=0;
		var s="";
		var r=[{label: "Friday" },{label: "Saturday" },{label: "Sunday" },{label: "Thursday" },{label: "Wednesday" },{label: "Tuesday" },{label: "Monday" }]
		for(var i=0;i<6;i++){
			switch(i){
				case 0: max=26;
						min=22;
						break;
				case 1: max=22;
						min=18;
						break;
				case 2: max=22;
						min=16;
						break;
				case 3: max=15;
						min=12;
						break;
				case 4: max=12;
						min=10;
						break;
				case 5: max=10;
						min=8;
			
			}
			cursum+=a;
			a=Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
			s=r[i].label;
			dps.push({y:a,label:s})
		}

		a=100-cursum;
		s=r[6].label;
		dps.push(({y:a,label:s}))

		this.chart.render();

	}
	

	// updateChart(max,thecount){
	// 	var a=0;
	// 	var s="";
	// 	var r=[{label: "Friday" },{label: "Saturday" },{label: "Thursday" },{label: "Monday" },{label: "Sunday" },{label: "Tuesday" },{label: "Wednesday" }];
	// 	var currsum =0;
	// 	for(var i=0;i<6;i++){
	// 		//r[i]=Math.floor(Math.random()*(101-(7-i-1)-currsum-1+1)+1);
	// 		a=Math.floor(Math.random()*(101-(7-i-1)-currsum-5+1)+5);
	// 		s=r[i].label;
	// 		console.log(a);
	// 		console.log(s);
	// 		//r[i]= randombetween(1, 100-(7-i-1)-currsum);
	// 		//currsum+=r[i];
	// 		currsum+=a;
	// 		dps.push({y:a,label:s})
	// 	}
	// 	//r[7-1]=100-currsum;
	// 	a=100-currsum;
	// 	s=r[6].label;
	// 	dps.push({y:a,label:s})
	// 	console.log(r);

	// 	//dps.push(r);

	// 	this.chart.render();

	// 	//return r;
	// }

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
            <Container>
			<div style={{width:'500px',paddingLeft:'-20px'}}className="container content col-lg-200">
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
 
export default Days;     
