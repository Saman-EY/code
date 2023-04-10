import React from 'react';
import styles from './SupportLogo.module.css';
import firstLogo from "../images/l1.png";
import secondLogo from "../images/l2.png";
import thirdLogo from "../images/l3.png";

function SupportLogo() {
    return (
        <section className={styles.container}>
            <p>Who Supports Us?</p>
            <div>
                <img src={firstLogo} alt="logo" />
                <img src={secondLogo} alt="logo" />
                <img src={thirdLogo} alt="logo" />
            </div>
        </section>
    );
}

export default SupportLogo;