import React, { useState } from 'react'

const Options = ({ countriesOptions, checkAnswer }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswer(selectedOption);
        console.log('Selected option:', selectedOption);
    };

    console.log({ countriesOptions, checkAnswer })
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                {countriesOptions.length && countriesOptions.map(({ name: { common } }, index) => {
                    return (
                        <label key={index} style={{ marginLeft: `${index * 45}px` }}>
                            <input
                                type="radio"
                                value={common}
                                checked={selectedOption === common}
                                onChange={handleOptionChange}
                            />
                            {common}
                        </label>
                    )
                })}
                <button type="submit" style={{ marginLeft: "55px" }}>Guess</button>
            </div>
        </form>
    )
}

export default Options