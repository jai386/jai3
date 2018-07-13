import React, {Component} from 'react';


export default class Celsius extends Component {
	constructor() {
		super()
		this.state = {
			temp_in_fahrenheit:98.6
		}
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({temp_in_fahrenheit:e.target.value})
	}
	toConvertFahrenheitToCelsius(f) {
		return ((5/9) * (f-32));
	}
	render() {
		return(
				<div>
					<label>Enter Temprature in Fahrenheit</label><br/>
					<input type = "number" value = {this.state.temp_in_fahrenheit} onChange = {this.handleChange} /><br/><br/>
					<h4>Temprature in Celsius</h4>
					{this.toConvertFahrenheitToCelsius(this.state.temp_in_fahrenheit)}
				</div>
			)
	}
}