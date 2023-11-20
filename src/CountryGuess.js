import React, { useState, useEffect } from 'react';
import Options from './Options';
import Flag from './Flag';
import Result from './Result';

const CountryGuess = ({ countries }) => {
    const [selectedCountries, setselectedCountries] = useState([]);
    const [selectedCountry, setselectedCountry] = useState(null);
    const [checking, setChecking] = useState(false);
    const [currentGuess, setCurrentGuess] = useState('');

    const makeSelection = () => {
        const selected = [];
        if (countries.length) {
            for (let country of new Array(4)) {
                const randomCountry = countries[Math.floor(Math.random() * 250)];
                selected.push(randomCountry);
            }
            setselectedCountries(selected);
            setselectedCountry(selectedCountries[Math.floor(Math.random() * 4)]);
        }
    }

    useEffect(() => {
        makeSelection();
    }, [countries]);

    const checkAnswer = (guess) => {
        setChecking(!checking);
        setCurrentGuess(guess);
    }

    const restartGame = () => {
        setChecking(!checking);
        makeSelection();
    }

    return (
        <>
            {!checking ? (<>
                <Options countriesOptions={selectedCountries} checkAnswer={checkAnswer} />
                <Flag answer={selectedCountry} />
            </>) : <Result selectedCountry={selectedCountry} restartGame={restartGame} currentGuess={currentGuess} />}

        </>
    )
}

export default CountryGuess