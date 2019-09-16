import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

function App() {

  const [data, setData] = useState([]);

  // UseEffect and axios call, set data to res.data
  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {/* Map data array and return a card for each player  */}
      {data.map((player) => {
        return <Card 
          key={player.id}
          header={player.name}
          meta={player.id}
          description={player.country}
          extra={player.searches}
          />
      })}
    </div>
  );
}

export default App;
