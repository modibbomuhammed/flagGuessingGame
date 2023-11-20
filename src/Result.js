import React from 'react'

const Result = ({ selectedCountry, currentGuess, restartGame }) => {
    const { common: name } = selectedCountry.name
    const isCorrect = currentGuess === name;
    return (
        <p>Your Guess Of {currentGuess} is {isCorrect ? 'Right!! Welldone' : 'Wrong!! Sorry'}, <button onClick={restartGame}>please play again.</button></p>
    )
}

export default Result