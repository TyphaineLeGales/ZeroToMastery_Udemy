import React, {Component, useState, useEffect} from 'react';
import CardList from '../Components//CardList';
// import {robots} from './robots.js';
import Scroll from '../Components/Scroll'
import SearchBar from '../Components/SearchBar';
import ErrorBoundary from '../Components/ErrorBoundary'
import 'tachyons';


// class App extends Component {
// 	constructor () {
// 		super()
// 		this.state = {
// 			robots:[],
// 			searchfield:''
// 		}
// 		console.log("constructor");
// 	}

// 	componentDidMount() { //lifecycle method that comes with any react component 
// 		//fetch data
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then(users => this.setState({robots:users}));

// 		console.log("didMount");
// 	}

// 	onSearchChange = (event) => {
// 		this.setState({searchfield: event.target.value});
// 	}

// 	render () {
// 		console.log("render");
// 		const {robots, searchfield} = this.state;
// 		const filteredRobots = robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(searchfield);
// 		})
// 		if(!robots.length) {
// 			return <h1 className='tc'>Loading ...</h1>
// 		} else {
// 			return(
// 				<div className="tc ">
// 					<h1 className="f1">Robot Friends</h1>
// 					<SearchBar searchChange={this.onSearchChange}/>
// 					<Scroll>
// 						<ErrorBoundary>
// 							<CardList elements={filteredRobots}/>
// 						</ErrorBoundary>
// 					</Scroll>
// 				</div>
// 			)
// 		}
// 	}
// }

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => setRobots({robots:users}));
	});

	const onSearchChange = (event) => {
		setSearchfield({searchfield: event.target.value});
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield);
	})

	if(!robots.length) {
		return <h1 className='tc'>Loading ...</h1>
	} else {
		return(
			<div className="tc ">
				<h1 className="f1">Robot Friends</h1>
				<SearchBar searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList elements={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App