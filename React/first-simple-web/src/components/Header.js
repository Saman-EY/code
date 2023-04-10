import React from 'react';
import styles from '../components/header.module.css';
import logo from '../images/Logo.png';
import banner from '../images/mount.png';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/Apiproducts">Product</Link>
                    </li>
                    <li>
                        <Link to="">About us</Link>
                    </li>
                </ul>

                <figure>
                    <img src={logo} alt="logo" />
                </figure>
            </div>
        </header>
    );
}

let Banner = () => {
    return (
        <div className={styles.BannerContainer}>
            <figure>
                <img src={banner} alt="banner" />
            </figure>
            <div className={styles.BannerDescription}>
                <p>Botostart</p>
                <p>
                    We're learning <span>React.js</span>
                </p>
            </div>
        </div>
    );
};

export { Nav, Banner };
