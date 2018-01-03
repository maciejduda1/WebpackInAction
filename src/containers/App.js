import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';
//import ToDo from '../components/ToDo.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
           			 {
						id: 1,
    					text: 'clean room'
					}, 
					{
						id: 2,
    					text: 'wash the dishes'
					},
					{
						id: 3,
    					text: 'feed my cat'
					},
                    {
                        id: 4,
                        text: 'learn React 123'
                    }
			],
            TodoName: new String
        };
        this.removeTodo=this.removeTodo.bind(this);
        this.addTodo=this.addTodo.bind(this);
    }

    addTodo(val){
        const todo = {
            id: uuid.v4(),
            text: val
        };
        const datas = [...this.state.data, todo];
        //console.log(datas);
        this.setState({data: datas});
    }
    
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
	}

	render() {
    	return (
        	<div className={style.TodoApp}>
        		<Title numberOfThingsToDo={this.state.data.length} />
        		<TodoList dataOfThingsToDo={this.state.data} remove={this.removeTodo}/>
                <TodoForm add={this.addTodo} />
            
        	</div>
    	);
	}
}

export default App;
