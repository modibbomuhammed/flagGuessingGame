import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import worldImg from './world.jpg';
import CountryGuess from './CountryGuess';


function App() {
  const url = `https://restcountries.com/v3.1/all`;
  const [state, setState] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const { data: countries } = await axios.get(url);
      setState(countries);
    }
    getCountries()
  }, []);

  return (
    <div className="flag-app">
      <header className='title-header' style={{ backgroundImage: `url(${worldImg})` }}>
        <h1 className='title-text'>Guess The Country!</h1>
      </header>
      <CountryGuess countries={state} />
    </div>
  );
}

export default App;
