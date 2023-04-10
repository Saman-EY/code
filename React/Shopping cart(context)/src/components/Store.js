import React, { useContext } from 'react';
// Component
import ProductCard from './shared/productCard';
// Context
import { ProductContext } from '../context/ProductContextProvider';
// style
import styles from '../styles/Store.module.css';

const Store = () => {
    let products = useContext(ProductContext);
    return (
        <div className={styles.container}>
            <div>
                {products.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Store;
