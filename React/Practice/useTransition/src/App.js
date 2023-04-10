import React, { useState, useTransition } from 'react';
import ShowNum from './components/ShowNum';
// style
import styles from './App.module.css';
// function
import { setNumbres } from './numbers';

const App = () => {
  let [data, setdata] = useState(setNumbres());
  let [value, setvalue] = useState('');
  let [isPending, startTransition] = useTransition();

  let changeHandler = (e) => {
    setvalue(e.target.value);
    startTransition(() => {
      setdata(setNumbres(e.target.value));
    });
    // setdata(setNumbres(e.target.value));
  };

  return (
    <div className={styles.container}>
      <input type="text" value={value} onChange={changeHandler} />

      {isPending ? <h3>Loading</h3> : null}
      <ShowNum numbers={data} />
    </div>
  );
};

export default App;
