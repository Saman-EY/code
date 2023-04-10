import React from 'react';

// style
import styles from '../styles/Navbar.module.css';

const Navbar = ({logoutHandler}) => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.name}>Botogram</div>
                <button className={styles.logoutBtn} type="button" onClick={logoutHandler} >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
