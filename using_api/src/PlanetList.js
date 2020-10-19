import React from 'react';
import Planet from './Planet'

const PlanetList =  (props) => {
  const {planetList} = props;
  const planets = planetList.map((planet, i) => {
    return (
      <Planet
        name = {planet.name} 
        terrain = {planet.terrain}
        climate = {planet.climate}
        population = {planet.population}
      />
    );
  });

	return (
		<div>
			{planets}
		</div>
	);
}

export default PlanetList