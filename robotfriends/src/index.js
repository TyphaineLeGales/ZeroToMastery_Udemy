import React from 'react';
import ReactDOM from 'react-dom'; //renders for the web
import './index.css';
import FirstComponent from './FirstComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <FirstComponent />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
