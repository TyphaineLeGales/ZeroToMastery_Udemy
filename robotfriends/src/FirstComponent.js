import React, {Component} from 'react';
import './FirstComponent.css';
import 'tachyons';

class FirstComponent extends Component {
	render () {
		return (
			<div className ="tc f1"> 
				<h1>hello world</h1>
				<p>Welcome to React</p>
			</div>
		)
	}
}

export default FirstComponent;