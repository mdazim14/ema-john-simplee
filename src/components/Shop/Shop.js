import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart, removeFromCart } from '../Utilities/FakeDb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            // console.log(products)
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {

        // const id = product;
        // console.log("product",product);
        // Here is distructure of product 
        const { id } = product;

        const newCart = [...cart, product];
        setCart(newCart);

        // addTo LocalStorage Cart Data 
        addToDb(id);
    }

    const handleRemoveFromCart = (product) => {
        const { id } = product;
        // removeFrom LocalStorage Cart Data 
        removeFromCart(id);
    }

    return (
        <div className="shop-container">

            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
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