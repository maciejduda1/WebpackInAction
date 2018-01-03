import React from 'react';
import ToDo from './ToDo.js';
//import uuid from 'uuid';
import style from '../containers/App.css';

const TodoList = props => {
	//console.log(props.remove);
	const table = props.dataOfThingsToDo.map((item) => <li key={item.id} className={style.LiItem}> {item.text} <button onClick = {props.remove.bind(this, item.id)}> X </button> <ToDo data={item.text}/> </li>);
	return(
		<div>
			<ul id={style.ListofStuffToDo}>
				{table}
			</ul>
		</div>
	);
};



export default TodoList;

