import React, { Component } from 'react';
import Card from './Card';
import styles from "./products.module.css"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"


class Products extends Component {

constructor () {
    super();

    this.state = {
        PhoneInfo : [
            {
                id: 1, image: img1, name: "IphoneX", price: "800 $",
            },
            {
                id: 2, image: img2, name: "Galaxy S10", price: "600 $",
            },
            {
                id: 3, image: img3, name: "Galaxy Note20", price: "900 $",
            },
            {
                id: 4, image: img4, name: "Surface", price: "830 $",
            },
        ]
    }
}

    render() {
        return (
            <div className={styles.container}>
                {this.state.PhoneInfo.map(item => <Card key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />)}
            </div>
        );
    }
}

export default Products;

