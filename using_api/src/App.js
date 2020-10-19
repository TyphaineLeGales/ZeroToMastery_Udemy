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
		.then(planets => this.setState({planets : planets}))
		.catch(error => console.log('error'))
   
	}

	render () {
		const {planets} = this.state;
		return(
			 <PlanetList planetList = {planets} ></PlanetList>
		)
	}
}

export default App;
