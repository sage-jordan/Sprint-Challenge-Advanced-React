import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from 'semantic-ui-react';

function App() {

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
