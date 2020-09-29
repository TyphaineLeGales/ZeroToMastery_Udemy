import React from 'react';
import CardList from './CardList';
import {robots} from './robots.js'
import 'tachyons'


const App = () => {
	return (
		<div>
			<h1 className="f-headline tc">Robot Friends</h1>
			<CardList elements={robots}/>
		</div>
	);
}

export default App