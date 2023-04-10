import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Product from './components/product';
import Notfound from './components/Notfound';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/products" component={Products} />
                    <Route path="/aboutUs" component={AboutUs} />
                </div> */}
                {/* or */}
                <Switch>
                    <Route path="/products/:id" component={Product} />
                    <Route path="/blog/:author?" component={Blog} />
                    <Route
                        path="/products"
                        render={(props) => <Products name="saman" {...props} />}
                    />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/notfound" component={Notfound} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect from="/articles" to="/blog" />
                    <Redirect to="/notfound" />
                </Switch>
            </>
        );
    }
}

export default App;
