import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';
import { API } from "../config";

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const addToCart = () => {
    addItem(product, setRedirect(true));
    };

    //redirect to cart after adding items
    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
                    Add to cart
                </button>
            )
        );
    };

    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    //change quantity
    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mt-2 mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text moment">Change Quantity</span>
                        </div>
                        <input 
                            type="number"  
                            className="form-control col-4 mr-5" 
                            value={count} 
                            onChange={handleChange(product._id)} 
                        />
                    </div>
                </div>
            )
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => {
                        removeItem(product._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                    className="btn btn-sm btn-outline-danger ml-2 mt-3 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    const showImage = item => (
        <div className="product-img">
            <img
                src={`${API}/product/photo/${item._id}`}
                alt={item.name}
                className="mb-3"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
        </div>
    );

    return (
        <div className="card">
            <div className="card-header card-header-1 name text-capitalize">{product.name}</div>
            <div className="card-body">

                {shouldRedirect(redirect)}
                {showImage(product)}

                <div className="card-p mt-2">
                    <div className="mt-2 font-weight-bold price">${product.price}</div>
                    <div className="mt-2 mb-3 moment">Added {moment(product.createdAt).fromNow()}</div>
                </div>

                {showAddToCartBtn(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}
                {showCartUpdateOptions(cartUpdate)}
        
            </div>
        </div>
    );
};

export default Card;
