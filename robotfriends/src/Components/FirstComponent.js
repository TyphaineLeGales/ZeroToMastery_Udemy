import React, {Component} from 'react';
import './FirstComponent.css';
import 'tachyons';

class FirstComponent extends Component {
	render () {
		return (
			<div className ="tc f1"> 
				<h1>hello world</h1>
				<p>{this.props.welcome}</p>
			</div>
		)
	}
}

// const FirstComponent = (props) => {
// 	return (
// 		<div className ="tc f1"> 
// 			<h1>hello world</h1>
// 			<p>{props.welcome}</p>
// 		</div>
// 	)
// }

export default FirstComponent;

