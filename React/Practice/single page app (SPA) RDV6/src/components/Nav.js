import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav(props) {
    return (
        <>
            <ul className={styles.container}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/aboutUs">About</Link>
                </li>
            </ul>
        </>
    );
}

export default Nav;
