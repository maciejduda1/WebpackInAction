import React from 'react';
import style from '../containers/App.css';

class Title extends React.Component {
	render() {
		return (
			<div className={style.divTitle}>
				<h1>{'Tablica ToDo!'} </h1>
				<h2>{'Liczba zadań do wykonania: ' + this.props.numberOfThingsToDo}</h2>
			</div>
		);
	}

}

export default Title;