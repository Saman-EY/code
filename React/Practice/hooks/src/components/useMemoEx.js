import React, { useState, useMemo } from 'react';

const useMemoEx = () => {
    let [isShown, setIsShown] = useState(true);
    let [number, setNumber] = useState(0);

    let Slow =  useMemo(() => {
        for (let i = 0; i < 1000000000; i++) {}
        return isShown;
    }, [isShown]);

    let showHandler = () => {
        setIsShown(!isShown);
    };

    let numHandler = () => {
        setNumber((prev) => prev + 1);
    };

    return (
        <div>
            <button onClick={showHandler}>show-hide</button>
            <span> {Slow ? 'Show' : 'Hide'} </span>
            <br />
            <button onClick={numHandler}>+</button>
            <span>{number}</span>
        </div>
    );
};

export default useMemoEx;
