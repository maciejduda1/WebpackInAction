import React from 'react';
//import uuid from 'uuid';
import style from '../containers/App.css';

class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{'Tablica ToDo!'} </h1>
				<h2>{'Liczba zadań do wykonania: ' + this.props.numberOfThingsToDo}</h2>
			</div>
		);
	}

}
/*
Title.propTypes = {
	numberOfThingsToDo: React.PropTypes.Number.IsRequired
}
*/
export default Title;