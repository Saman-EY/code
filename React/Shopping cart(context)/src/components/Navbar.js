import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// img
import CartImg from '../assets/icons/shop.svg';
// style
import styles from '../styles/Navbar.module.css';
// context
import { CartContext } from '../context/CartContextProvider';

const Navbar = () => {
    let { state } = useContext(CartContext);

    return (
        <nav>
            <div className={styles.container}>
                <Link to="/products">Products</Link>
                <figure>
                    <Link to="/shopcart">
                        <img src={CartImg} alt="icon" />
                        <span>{state.itemsCounter}</span>
                    </Link>
                </figure>
            </div>
        </nav>
    );
};

export default Navbar;
