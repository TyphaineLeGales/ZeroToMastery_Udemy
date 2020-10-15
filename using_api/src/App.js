import React from 'react';
import './App.css';

function App() {
  const getPlanets = async function() {
    try {
      const resp = await fetch('https://swapi.py4e.com/api/planets/');
      const planets = await resp.json();
      console.log(planets);

    } catch (error) {
      console.log('something went wrong', error);
    }
  }

  return (
    <div className="App">
    {console.log(getPlanets())}
    </div>
  );
}

export default App;
