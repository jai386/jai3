import React, {Component} from 'react';
import './todo.css';
import Average from '../avg.js';

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items:[],
			text:'',
			index1: 0
		}
		this.addTodo=this.addTodo.bind(this);
		this.handleAddItem=this.handleAddItem.bind(this);
		this.deleteItem=this.deleteItem.bind(this);
		this.deleteTodo=this.deleteTodo.bind(this);
	}
	addTodo(event) {
		this.setState({
			text:event.target.value
		}
	  );
	}
	deleteTodo(event) {
		this.setState({index1:event.target.value});
	}
	handleAddItem(event) {
    event.preventDefault();
    
    var newItem = {
      text: this.state.text,
    };
    
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }	
  deleteItem(event) {
  	event.preventDefault();
  	var deleteitm=this.state.index1;
  	delete this.state.items[deleteitm];
  	this.setState({text:event.target.value});

  }		

	render(){
		return(
			<div className='body'>
				<h1>Todo Example </h1>
				<h3 className='count'>Number of items Added = {this.state.items.length}</h3>
				<p className='items'>
					{this.state.items.map(function(item,index) {
						return(
								<li key={index}>
									{item.text}
								</li>
							)
					  })	
				  }
				</p>
				<p>
					<input type="text" placeholder='Enter text' value={this.state.text} onChange={this.addTodo} required /><br/>
					<button className="btn" onClick={this.handleAddItem}>Add Item</button><br/> 
					<input type="number" value={this.state.index1} onChange={this.deleteTodo} name="delete" /><br/>
					<button className="btn" onClick={this.deleteItem}>Delete</button>
				</p>
				<Average />
			</div>
			);
	}
}	
export default Todo;	
