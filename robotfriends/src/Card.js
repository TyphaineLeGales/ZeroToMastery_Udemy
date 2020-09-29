import React from 'react';
import './Card.css';
import 'tachyons';

const Card = (props) => {
	const {email, name} = props;
	return (
		<div className="bg-washed-yellow br2 card grow ma2 shadow-5 tc">
			<img src={`https://robohash.org/${name}?size=200x200`} alt='robot ilustration'/>
			<div className = "center">
			  <h1 className="name">{name}</h1>
			  <p className="mail">{email}</p>
			</div>
		</div>
	)
}
export default Card