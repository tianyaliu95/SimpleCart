import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import AddProduct from './product/AddProduct';
import Cart from './core/Cart';
import DeleteProducts from './product/DeleteProducts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} /> 
                <Route path="/product/create" exact component={AddProduct} />
                <Route path="/product/delete" exact component={DeleteProducts} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
