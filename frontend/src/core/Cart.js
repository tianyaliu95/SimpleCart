import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const getTotal = () => {
        return items.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showItems = (items, setItems) => {
        return (
            <div>
                <div className="row mx-2">
                    {items.map((product, i) => (
                        <div className="col-3 mb-3">
                            <Card 
                                key={i}
                                product={product}
                                showAddToCartButton={false}
                                cartUpdate={true}
                                showRemoveProductButton={true}
                                setRun={setRun}
                                run={run}
                            />
                        </div>
                    ))}
                </div>
                <h2 className="mx-5 mb-5">
                    <Link to="/" className="mt-3 text-white">
                        <button type="button" className="btn btn-secondary">
                            Back to Home Page
                        </button>
                    </Link>
                </h2>
            </div>

        );
    };

    return (
        <Layout
            title="Cart"
            className="container-fluid"
        >
            <h3 className="mx-4 mb-4">You have {`${items.length}`} item(s). Total price is: ${getTotal()}</h3>
            <div className="">{showItems(items)}</div>
        </Layout>
    );
};

export default Cart;
