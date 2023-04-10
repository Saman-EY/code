import React from 'react';
// gif
import spinner from "../gif/spinner.gif"
import styles from "../styles/Loader.module.css"

const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="gif" />
            <h2>Loding...</h2>
        </div>
    );
};

export default Loader;