import React from 'react';
import Planet from './Planet'
import './PlanetList.css'

const PlanetList =  (props) => {
  const {planetList} = props;
  const planets = planetList.map((planet, i) => {
    return (
      <Planet
        key = {i}
        name = {planet.name} 
        terrain = {planet.terrain}
        climate = {planet.climate}
        population = {planet.population}
      />
    );
  });

	return (
		<div class="planetList">
			{planets}
		</div>
	);
}

export default PlanetList