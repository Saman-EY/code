import React, { useReducer } from 'react';

let initialValue = 0;
let reducer = (state, action) => {
    switch (action) {
        case 'up':
            return ++state;
        case 'down':
            return --state;
        case 'reset':
            return (state = initialValue);
        default:
            return state;
    }
};

const Reducer = () => {
    let [number, dispatch] = useReducer(reducer, initialValue);
    let [number2, dispatch2] = useReducer(reducer, initialValue);

    return (
        <>
            <div>
                <h1>{number}</h1>

                <button onClick={() => dispatch('up')}>Increase</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
                <button onClick={() => dispatch('down')}>Decrease</button>
            </div>
            <div>
                <h1>{number2}</h1>

                <button onClick={() => dispatch2('up')}>Increase</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
                <button onClick={() => dispatch2('down')}>Decrease</button>
            </div>
        </>
    );
};

export default Reducer;
