import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/blog/saman">Blog</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                </ul>
            </>
        );
    }
}

export default Navbar;