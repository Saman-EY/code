import React, { useState, useEffect } from 'react';
// Get api function
import { getCoins } from '../services/Api';
// style
import styles from '../styles/Landing.module.css';
// component
import Coin from './Coin';
import Loader from './Loader';

const Landing = () => {
    let [data, setData] = useState([]);

    let [search, setSearch] = useState('');

    useEffect(() => {
        let fetchApi = async () => {
            let res = await getCoins();
            setData(res);
        };

        fetchApi();
    }, []);

    let SearchedCoins = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.Maincontainer}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {data.length ? (
                <div className={ (SearchedCoins.length) ? styles.coinsContainer : styles.displayNone }>
                    {SearchedCoins.map((item) => (
                        <Coin
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            symbol={item.symbol}
                            price={item.current_price}
                            marketCap={item.market_cap}
                            priceChange={item.market_cap_change_percentage_24h}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Landing;
