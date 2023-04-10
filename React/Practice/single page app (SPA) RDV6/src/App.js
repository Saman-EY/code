import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Product from './components/Product';
import Blog from './components/Blog';
import AboutUs from './components/About';

function App(props) {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/product/*" element={<Product />}>
                    <Route path="power" element={<h3>hi power</h3>} />
                </Route>
                <Route path="/blog" element={<Blog />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
