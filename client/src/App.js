import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useForm } from "./hooks/useForm";
import { Card } from 'semantic-ui-react';
import { useLocalStorage } from './useLocalStorage';

function App() {

  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:5000/api/players");

  const getPlayer = () => {
    setUrl(`http://localhost:5000/api/players/${inputValues.dataText}`);
  };
  const [inputValues, handleChanges, handleSubmit] = useStorageHook(
    "data",
    {
      dataText: "3"
    },
    getPlayer
  );

  // UseEffect and axios call, set data to res.data
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [url]);



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValues.dataText}
          onChange={handleChanges}
          name="doggoText"
        />
        <button type="submit">Fetch Player</button>
      </form>
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
