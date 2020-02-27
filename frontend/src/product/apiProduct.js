import { API } from '../config';


export const createProduct = (product) => {
    return fetch(`${API}/product/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};