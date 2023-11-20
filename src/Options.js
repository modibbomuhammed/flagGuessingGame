import React, { useState } from 'react'

const Options = ({ countriesOptions }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected option:', selectedOption);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
                hello
                {countriesOptions.length && countriesOptions.map(({ name: { common } }, index) => {
                    <label key={index} style={{ transform: `rotate(${index * 45}deg)` }}>
                        <input
                            type="radio"
                            value={common}
                            checked={selectedOption === common}
                            onChange={handleOptionChange}
                        />
                        {common}
                    </label>
                })}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Options