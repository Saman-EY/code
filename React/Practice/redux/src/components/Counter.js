import React, {useState} from 'react';
import increase from '../redux/counter/counterAction';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {
  let {counter} = useSelector(state => state.counterState)
  let dispatch = useDispatch();

  let [value, setValue] = useState(1);

  // let {increase , counter} = props;



  return (
    <section className="CounterContainer">
      <p>Counter : {counter} </p>
      <input type="text" value={value} onChange={({target: {value} }) => setValue(value)} />
      <button onClick={() => dispatch(increase(+value))}>increase</button>
    </section>
  );
};


// let mapReducerToProps = (dispatch) => {
//     return {
//         increase: () => dispatch(increase())
//     }
// };

// let mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };


// export default connect(mapStateToProps, mapReducerToProps)(Counter);
export default Counter;
