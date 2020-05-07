import React, {Component} from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
import Header2 from "../Header/Header2";
import { Button, Dropdown, Row, Col, Container } from "react-bootstrap";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var dps=[];


class SeverityChart extends Component{

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
		var r=[{label: "Mild" },{label: "Serious" },{label: "Fatal" }];
		var currsum =0;
		for(var i=0;i<2;i++){
			//r[i]=Math.floor(Math.random()*(101-(7-i-1)-currsum-1+1)+1);
			a=Math.floor(Math.random()*(101-(3-i-1)-currsum-1+1)+1);
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
		s=r[2].label;
		dps.push({y:a,label:s})
		console.log(r);

		//dps.push(r);

		this.chart.render();

		//return r;
	}

    render(){

        const options = {
			animationEnabled: true,
			theme:"dark2",
            title: {
                text: "Severity of Accident"
            },
            data:[
                {
                    type:"column",
                    //indexLabel: "{label}: {y}",
                    dataPoints: dps
                }
            ]
        }
        return(
            <div>
				<Header2/>
				<div style={{height:'900px'}}className="Hero-Image2">
				<Container>
				<div style={{paddingTop: '200px'}}className="container content">
				<div style={{paddingBottom: '0px'}}className=" chart-container col-lg-200 col-lg-200 col-lg-200 ">
                <CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
                />
				</div>
				</div>
				</Container>
				</div>
             </div>
        );

    }
}

export default SeverityChart;