import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Products extends Component {
    render() {
        return (
            <div>
                <h3>Products:</h3>
                <ul>
                    <li><Link to="/products/1">product1</Link></li>
                    <li><Link to="/products/2">product2</Link></li>
                    <li><Link to="/products/3">product3</Link></li>
                    <li><Link to="/products/4">product4</Link></li>
                </ul>
            </div>
        );
    }
}

export default Products;