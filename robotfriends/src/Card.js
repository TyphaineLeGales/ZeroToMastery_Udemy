import React from 'react';
import './Card.css';
import 'tachyons';

const Card = (props) => {
		return (
			<div className="br2 ba card ">
				<img src="https://robohash.org/{props.name}?size=200x200" alt="robot illustration"/>
				<div className = "center">
			   	<h1 className="name">{props.name}</h1>
			    <p className="mail">@{props.name}</p>
				</div>
			</div>
		)
}
export default Card