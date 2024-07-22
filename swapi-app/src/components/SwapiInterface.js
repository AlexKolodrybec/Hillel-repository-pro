import React from 'react';

const SwapiInterface = () => {
  return (
    <div className="container">
      <h1 className="my-4">SWAPI Interface</h1>
      <div className="card mb-4">
        <div className="card-header">
          <h2>Luke Skywalker</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Height: 172</li>
            <li className="list-group-item">Mass: 77</li>
            <li className="list-group-item">Hair Color: Blond</li>
            <li className="list-group-item">Skin Color: Fair</li>
            <li className="list-group-item">Eye Color: Blue</li>
            <li className="list-group-item">Birth Year: 19BBY</li>
            <li className="list-group-item">Gender: Male</li>
            <li className="list-group-item">Homeworld: Tatooine</li>
            <li className="list-group-item">Films: A New Hope, The Empire Strikes Back, Return of the Jedi, The Force Awakens</li>
            <li className="list-group-item">Vehicles: Snowspeeder, Imperial Speeder Bike</li>
            <li className="list-group-item">Starships: X-wing, Imperial shuttle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SwapiInterface;