import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots.js';
import SearchBar from './SearchBar';
import 'tachyons';


class App extends Component {
	constructor () {
		super()
		this.state = {
			robots:[],
			searchfield:''
		}
		console.log("constructor");
	}

	componentDidMount() { //lifecycle method that comes with any react component 
		//fetch data
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}));

		console.log("didMount");
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render () {
		console.log("render");
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield);
		})
		return(
			<div className="tc ">
				<h1 className="f1">Robot Friends</h1>
				<SearchBar searchChange={this.onSearchChange}/>
				<CardList elements={filteredRobots}/>
			</div>
		)
	}
}

export default App