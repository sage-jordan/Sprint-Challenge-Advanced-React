import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { useStorageHook } from "./useStorageHook";
import { Card } from 'semantic-ui-react';
import { useLocalStorage } from './useLocalStorage';
import { useStorageHook } from './useStorageHook';

function App() {

  const [data, setData] = useState([]);
  const [storedValue, setValue] = useLocalStorage("name", []);

  console.log(storedValue);
  // UseEffect and axios call, set data to res.data
  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
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
          onClick={() => setValue(player.name)}
          />
      })}
    </div> 
  );
}

export default App;
