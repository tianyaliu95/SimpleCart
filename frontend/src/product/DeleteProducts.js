import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiProduct";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const remove = productId => {
        deleteProduct(productId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Delete Products"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12 height-full">
                    <h2 className="text-center mb-4">
                        Total {products.length} products
                    </h2>
                    
                    <ul className="list-group container col-md-4 offset-md-4">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex align-items-center"
                            >
                                <strong>{p.name}</strong>
                                <Link className="ml-auto" to="/product/delete">
                                    <span
                                        onClick={() => remove(p._id)}
                                        className="badge text-danger"
                                    >
                                        Delete Item
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
