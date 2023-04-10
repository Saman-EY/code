import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import CartContextProvider, {CartContext} from './context/CartContextProvider';
import ShopCart from './components/ShopCart';

const App = () => {
    return (
        <div>
            <ProductContextProvider>
                <CartContextProvider>
                    <Navbar />
                    <Routes>
                        <Route exact
                            path={'/products/:id'}
                            element={<ProductDetails />}
                        />
                        <Route path={'/products'} element={<Store />} /> 
                        <Route path={'/shopcart'} element={<ShopCart />} /> 
                        <Route path={'/*'} element={<Navigate to={"/products"} />} />
                    </Routes>
                </CartContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default App;
