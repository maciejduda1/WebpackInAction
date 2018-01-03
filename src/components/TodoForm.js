import React from 'react';
const styleOfInput = {
	width: '200px',
	color: 'green'
}

class TodoForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			TodoName : new String
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleKeyUp=this.handleKeyUp.bind(this);
	}
	
	handleChange(event){
		this.setState({TodoName: event.target.value})
	}
	
	handleKeyUp(event) {
	  if (event.key === 'Enter') {
    		this.props.add(this.state.TodoName)
    	}
	}
	
	render(){
		return(
			<label> Wpisz nazwę nowego zadania do wykonania: 
				<input
					id= "inputElement"
        	    	type="text"
            		onChange={this.handleChange}
            		onKeyPress={this.handleKeyUp}
            		placeholder= "Tu wpisz tekst!"
            		value={this.state.TodoName}
            		style={styleOfInput}
            	/>
            </label>
		);
	}
}

export default TodoForm;
