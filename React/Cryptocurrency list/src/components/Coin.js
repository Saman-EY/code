import React from 'react';
// style
import styles from '../styles/Coin.module.css';

const Coin = (props) => {
    let { image, name, symbol, price, marketCap, priceChange } = props;

    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt="img" />
                <span className={styles.name}>{name}</span>
            </div>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={ (priceChange > 0) ? styles.redPriceChange : styles.greenPriceChange}>{priceChange.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
