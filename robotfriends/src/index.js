import React from 'react';
import ReactDOM from 'react-dom'; //renders for the web
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import {robots} from './robots.js'

ReactDOM.render(

  <div className="cardsContainer">
  	<Card name={robots[0].name} email={robots[0].email}/>
  	<Card name={robots[1].name} email={robots[1].email}/>
  	<Card name={robots[2].name} email={robots[2].email}/>
  	<Card name={robots[3].name} email={robots[3].email}/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
