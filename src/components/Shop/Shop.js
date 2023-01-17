import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import { addToDb, getStoredCart, removeFromCart } from '../Utilities/FakeDb';
import './Shop.css';

const Shop = ({setShow, show , handleAddToFavourite, favourite}) => {

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
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct)
        // console.log(cart)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    const handleRemoveFromCart = (selectedCartProduct) => {
        // console.log("clicked", selectedCartProduct)
        let newCart = [];
        // console.log("cart from remove", cart)
        const exists = cart.find(product => product.id === selectedCartProduct.id)
        console.log("exists from remove", exists)
        if (exists?.quantity === 1) {
            const rest = cart.filter(product => product.id !== selectedCartProduct.id)
            setCart(rest)
        }
        else if (exists?.quantity > 0) {
            const rest = cart.filter(product => product.id !== selectedCartProduct.id)
            // console.log(rest)
            exists.quantity = exists.quantity - 1;
            // console.log(exists)
            newCart = [...rest, exists]
            setCart(newCart);
        }
        const { id } = selectedCartProduct;
        // removeFrom LocalStorage Cart Data 
        removeFromCart(id);
    }

    return (
        <div className="shop-container w-100 py-4 ps-4">

            <div className="products-container ">
                {
                    products.map(product => <Product
                        favourite={favourite}
                        key={product.id}
                        product={product}
                        handleAddToFavourite={handleAddToFavourite}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Product>)
                }
            </div>

                <Cart
                setShow={setShow}
                show={show}
                    cart={cart}
                ></Cart>
        
        </div>
    );
};

export default Shop;