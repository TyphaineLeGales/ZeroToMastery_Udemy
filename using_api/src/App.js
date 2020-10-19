import React, {Component} from 'react';
import './App.css';
import PlanetList from './PlanetList';

class App extends Component {
	constructor () {
		super()
		this.state = {planets: []};
	}

	componentDidMount() {
		fetch('https://swapi.py4e.com/api/planets/')
		.then(response => response.json())
		.then(data => data.results)
		.then(planets => this.setState({planets : planets}))
		.catch(error => console.log('oops something went wrong'))
   
	}

	render () {
		const {planets} = this.state;
		return(
			<div className="App">
			<h1 className="title">STAR WARS PLANET</h1>
				<PlanetList planetList = {planets} ></PlanetList>
			</div>
		)
	}
}

export default App;
