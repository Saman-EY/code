import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import down from '../images/down.svg';
import up from '../images/up.svg';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            qty: 0
        };
    }

    decrease = () => {
        if (this.state.qty > 0) {
            this.setState((prev) => ({
                qty: prev.qty - 1
            }));
        }
    };

    increase = () => {
        this.setState({
            qty: this.state.qty + 1
        });
    };

    render() {
        let { image, name, price, id } = this.props;
        let { qty } = this.state;
        return (
            <div className={styles.container}>
                <figure>
                    <img src={image} alt="img" />
                </figure>
                <div className={styles.Des}>
                    <p>
                        <Link to={`/products/${id}`}>{name}</Link>
                    </p>
                    <span>
                        {price}
                        {qty > 0 &&
                            `* ${qty} = ${Number(price.split(' ')[0]) * qty} $`}
                    </span>
                </div>
                <div className={styles.qty}>
                    <img
                        src={down}
                        alt="arrow"
                        className={qty || styles.disabled}
                        onClick={this.decrease}
                    />
                    <span> {qty} </span>
                    <img src={up} alt="arrow" onClick={this.increase} />
                </div>
            </div>
        );
    }
}

export default Card;
