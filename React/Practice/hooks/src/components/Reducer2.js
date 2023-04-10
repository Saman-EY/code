import React, { useReducer } from 'react';

let initialState = {
    num1: 0,
    num2: 0,
};
let reducer = (state, action) => {
    switch (action.type) {
        case 'up':
            return {...state, num1: state.num1 + action.amount };
        case 'down':
            return {...state, num1: state.num1 - action.amount };
        case 'up2':
            return {...state, num2: state.num2 + action.amount };
        case 'down2':
            return {...state, num2: state.num2 - action.amount };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const Reducer2 = () => {
    let [data, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <h1>num1: {data.num1}</h1>
                <button onClick={() => dispatch({type: "up", amount: 5})}>Increse</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
                <button onClick={() => dispatch({type: "down", amount: 3})}>Decrease</button>
            </div>
            <div>
                <h1>num2: {data.num2}</h1>
                <button onClick={() => dispatch({type: "up2", amount: 1})}>Increse</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
                <button onClick={() => dispatch({type: "down2", amount: 1})}>Decrease</button>
            </div>
        </>
        
    );
};

export default Reducer2;
