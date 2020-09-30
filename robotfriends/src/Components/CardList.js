import React from 'react';
import './cardList.css'
import Card from './Card';

const CardList = ({elements}) => {
	const cardComponent = elements.map((el, i) => {
		return( 
			<Card 
				key={i} 
				name={el.name} 
				email={el.email}
			/>
		)
	})
	return (
		<div className="cardsContainer">
  		{cardComponent}
  	</div>
	)
}

export default CardList