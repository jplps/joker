import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import api from './services/api';
import './App.css';

interface Joke {
  id: number;
  setup: string;
  punch: string;
}

const App = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [formData, setFormData] = useState({ setup: '', punch: '' });

  async function getAllJokes() {
    const { data } = await api.get('/jokes')
    const jokesDB = data;

    console.log(jokesDB);
    setJokes(jokesDB);
  }

  useEffect(() => {
    getAllJokes();
  }, []);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    // Setting [name] we tell the var to be the same as its value, thus substituting whatever comes
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { setup, punch } = formData;
    const data = { setup, punch };

    await api.post('/jokes', data);
    alert('Hahaha');

    getAllJokes();
  }

  return (
    <>
      <header>
        <h1>Joker</h1>
      </header>

      <main>
        <p>
          This system is built following the study made by <a href="https://stand-upcomedy.com/">Greg Dean's Stand-Up Comedy Classes</a>.
          <br /><br />
          <strong>Do you know how to write a joke?</strong> There, you'll learn more about structures and other cool stuff! Please visit.
        </p>

        <form className="grid" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Joke</legend>

            <input type="text" name="setup" id="setup" title="The setup creates expectation..." placeholder="Setup..." onChange={handleInputChange} required />
            <input type="text" name="punch" id="punch" title="The punch reveals a surprise!" placeholder="Punch!" onChange={handleInputChange} required />
          </fieldset>

          <button type="submit">Tell a joke</button>
        </form>

        {jokes.map(joke => (
          <div key={joke.id}>
            <p>
              <span>{joke.setup}</span>
              <br />
              <span>{joke.punch}</span>
            </p>

            <hr />
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
