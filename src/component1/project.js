import React, {Component} from 'react';
import App from './App';

class Project extends Component {
	constructor() {
		super()
		this.state = {
			projects: [
				{
					title:'javaScript',
					role: 'Web Development'
				},
				{
					title:'java',
					role: 'Backend Development'
				},
				{
					title:'Swift',
					role: 'Mobile App Development'
				},
				{
					title:'React',
					role: 'Frontend Development'
				}
			]
		}
	}
	render() {
		return(
			<div>
					<App data={this.state.projects} />
			</div>
		)
	}
}
export default Project;