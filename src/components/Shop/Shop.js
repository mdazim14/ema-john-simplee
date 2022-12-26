import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../Utilities/FakeDb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        
        // const id = product;
        // console.log("product",product);
        // Here is distructure of product 
        const {id} = product;

        const newCart = [...cart, product];
        setCart(newCart);
        
        // addTo LocalStorage Cart Data 
        addToDb(id);
    }

    return (
        <div className="shop-container">

            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="card-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;