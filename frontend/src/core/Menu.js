import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { itemTotal } from "./cartHelpers";

//show current tab
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#00BFFF" };
    } else {
        return { color: "#ffffff" };
    }
};


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-secondary px-3">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/product/create")}
                    to="/product/create"
                >
                    Add Product
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/product/delete")}
                    to="/product/delete"
                >
                    Delete Product
                </Link>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);
