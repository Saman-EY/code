import React from 'react';
// import {Route, Routes, route, Link} from "react-router-dom"
import { Link, Outlet } from 'react-router-dom';

function product(props) {
    return (
        <div>
            <Outlet />
            <h1>This is product page</h1>

            <Link to="power">show</Link>
            {/* <Routes>
                <Route path="power" element={<h1>hi power</h1>} />
            </Routes> */}
        </div>
    );
}

export default product;
