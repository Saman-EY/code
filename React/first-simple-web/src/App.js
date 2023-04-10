import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Nav } from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import ApiProducts from './components/ApiProducts';
import DetailProduct from './components/DetailProduct';
import Notfound from './components/Notfound';

class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Apiproducts" element={<ApiProducts  />} />
                    <Route path='/products/:id' element={<DetailProduct />} />
                    <Route path='/Notfound' element={<Notfound />} />
                    <Route path='/*' element={<Navigate to="/Notfound" />} />
                </Routes>
                <Footer />
            </>
        );
    }
}

export default App;
