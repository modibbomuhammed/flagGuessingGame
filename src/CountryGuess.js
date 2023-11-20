import React from 'react';
import Options from './Options';
import Flag from './Flag';

const CountryGuess = ({ countries }) => {
    let selectedCountries = [];
    if (countries.length) {
        for (let country of new Array(4)) {
            const randomCountry = countries[Math.floor(Math.random() * 250)];
            selectedCountries.push(randomCountry);
        }
    }

    return (
        <>
            <Options countriesOptions={selectedCountries} />
            <Flag answer={selectedCountries[Math.floor(Math.random() * 4)]} />
        </>
    )
}

export default CountryGuess