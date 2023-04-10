import React, { useState } from 'react';

const Counter = () => {
    let [number, setNumber] = useState(0);

    let [ name, setName ] = useState('saman');

    let numHandler = () => {
        setNumber((prev) => prev + 1);
    };

    let nameHandler = () => {
        setName(
            name += "  reza"
        )
    };

    return (
        <div>
            <h1> {number} </h1>
            <button onClick={numHandler}> increase num </button>

            <h1> {name} </h1>
            <button onClick={nameHandler}> change </button>
        </div>
    );
};

export default Counter;
