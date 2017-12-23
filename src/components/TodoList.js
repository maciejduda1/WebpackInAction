import React from 'react';
//import uuid from 'uuid';
//import style from '../containers/App.css';

const TodoList = props => {
	console.log(props.remove);
	const table = props.dataOfThingsToDo.map((item) => <li key={item.id}> {item.text} <button onClick = {props.remove.bind(this, item.id)}> X </button></li>);
	return(
		<div>
			<ul>
				{table}
			</ul>
		</div>
	);
};



export default TodoList;