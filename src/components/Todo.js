import React from 'react';

const ToDo = props => {
	return(
		<button onClick= {() => {alert(props.data);}}>Pokaż zadanie</button>
	);
}

export default ToDo;