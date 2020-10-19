import React from 'react'

const Planet = (props) => {
	const {name, terrain, climate, population} = props;
	return (
		<div className = "planet">
			<h1>{name}</h1>
			<p>{terrain}</p>
			<p>{climate}</p>
			<p>{population}</p>
		</div>
	)
}

export default Planet 