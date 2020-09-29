import React from 'react';
import './Card.css';
import 'tachyons';

const Card = (props) => {
		return (
			<div className="bg-washed-yellow br2 card grow ma2 shadow-5">
				<img src="https://robohash.org/{props.name}?size=200x200" alt="robot illustration"/>
				<div className = "center">
			   	<h1 className="name">{props.name}</h1>
			    <p className="mail">{props.email}</p>
				</div>
			</div>
		)
}
export default Card