import React, {Component} from 'react';

export default class Average extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Total:0,
			obtain:0,
		}
		this.number=this.number.bind(this);
	}
	number(event) {
		this.setState({[event.target.name]:event.target.value});
	}
	avgfun(num1,num2) {
		return(
				(num1 * 100) / num2
			)
	}

	render() {
		return(
			<div>
				<h1>Enter Number</h1>
				<form>
					<input type = "number" className="obtain" value = {this.state.obtain} name = "obtain" placeholder = "Enter Obtain Marks" onChange = {this.number} /><br/>
					<input type = "number" value = {this.state.Total} name = "Total" placeholder = "Enter Total Marks" onChange = {this.number} />
				</form>
				<h2 className="perhead">Percentage of Obtain marks is</h2>
				<h3 className="per">{this.avgfun(this.state.obtain, this.state.Total)}%</h3>
			</div>	
		)
	}
}