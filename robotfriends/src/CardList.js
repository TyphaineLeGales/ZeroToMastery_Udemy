import React from 'react';
import './cardList.css'
import Card from './Card';

//<Card name={robots[0].name} email={robots[0].email}/>


const CardList = (props) => {
	const {elements} = props;
	const cardComponent = elements.map(el => {
		return <Card name={el.name} email={el.email}/>
	})
	return (
		<div className="cardsContainer">
  			{cardComponent}
  		</div>

	)
}

export default CardList