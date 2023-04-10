import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from '../redux/number/numberAction';
import { decrease } from '../redux/number/numberAction';

const Number = () => {

    let {number} = useSelector(state => state.numberState)    
    let dispatch = useDispatch();

  return (
    <section className="CounterContainer">
      <p>Number : {number} </p>
      <button onClick={() => dispatch(increase())} >increase</button>
      <button onClick={() => dispatch(decrease())} >decrease</button>
    </section>
  );
};

export default Number;
