import React from 'react';
import PropTypes from "prop-types";


import Styles from './Home.module.css';


const Strings = {
  WELCOME: 'Willkom.',
  TASK: 'Bitte bearbeitet Aufgabe 1 und mindestens 3 der Aufgaben 2 bis 7. Erweitert die Aufgaben-Sammlung außerdem um eine eigene geeignete Aufgabe.',
  SUB_TASK: ' شمامیتوانید پروژه را ب هر شکلی ک خواستید تغییر دهید مهم نمایش پاسخ صحیح می باشد.'
}

const Home = ({ onStart }) => {
  return (
    <div className={Styles.root}>
      <div>{Strings.WELCOME}</div>
      <div>{Strings.TASK}</div>
      <div>{Strings.SUB_TASK}</div>
      <button onClick={onStart}>Los geht's</button>
      
      <a
        className={Styles.link}
        
        target="_blank"
        rel="noopener noreferrer"
      >
        
      </a>
    </div>
  );
};

Home.defaultProps = {};

Home.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Home;
