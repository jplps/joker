import React, { useState, useEffect } from 'react';

import api from './services/api';
import './App.css';

interface Joke {
  id: number;
  text: string;
}

const App = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    api.get('/jokes')
      .then(response => {
        const jokesDB = response.data;
        console.log(jokesDB);
        setJokes(jokesDB);
      });
  }, []);

  return (
    <>
      <h1>JokeR</h1>

      {jokes.map(joke => (
        <p key={joke.id}>{joke.text}</p>
      ))}
    </>
  );
}

export default App;
