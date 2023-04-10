import React, { Component } from 'react';
import { Banner } from './Header';
import Products from './Products';
import Search from './Search';
import SupportLogo from './SupportLogo';

class Landing extends Component {
    render() {
        return (
            <>
                <Banner />
                <Products />
                <Search />
                <SupportLogo />
            </>
        );
    }
}

export default Landing;
