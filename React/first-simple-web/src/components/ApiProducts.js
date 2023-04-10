import React, { Component } from 'react';
import styles from './ApiProducts.module.css';
import ApiCard from './ApiCard';
import axios from 'axios';

class ApiProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then((res) =>
            this.setState({
                products: res.data
            })
        );
    }

    render() {
        const { products } = this.state;
        return (
            <div className={styles.container}>
                {products.length ? (
                    products.map((item) => (
                        <ApiCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={`${item.price} $`}
                        />
                    ))
                ) : (
                    <h1>Wait, its loading....</h1>
                )}
            </div>
        );
    }
}

export default ApiProducts;
