import React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
// import SelectedItem from '../SelectedItem/SelectedItem';
import { addToDb, getStoredCart, removeFromCart } from '../Utilities/FakeDb';
import './Shop.css';

const Shop = ({ setShow, show, favourite }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    // const [category, setCategory] = useState([]);

    useEffect(() => {
        getFavoriteProducts()
    }, [products])
    const getFavoriteProducts = () => {
        if (products.length > 0) {
            const newFavoriteProducts = [...products].filter((product) => product.isFavorite === true);
            setFavoriteProducts(newFavoriteProducts);
            // console.log(favoriteProducts);
        }
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                const newData = [...data].map((item) => {
                    return {
                        ...item,
                        isFavorite: false
                    }
                })
                setProducts(newData);
                setSearchItems(newData);
            })
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

    const handleAddToFavourite = (product, index) => {
        // console.log(product, index)
        const newData = [...searchItems];
        if (newData[index].isFavorite === true) {
            newData[index].isFavorite = false
        }
        else {
            newData[index].isFavorite = true
        }
        setSearchItems(newData)
    }
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
        // console.log("exists from remove", exists)
        if (exists?.quantity === 1) {
            const rest = cart.filter(product => product.id !== selectedCartProduct.id);
            setCart(rest)
        }
        else if (exists?.quantity > 0) {
            const rest = cart.filter(product => product.id !== selectedCartProduct.id);
            // console.log(rest)
            exists.quantity = exists.quantity - 1;
            // console.log(exists)
            newCart = [...rest, exists];
            setCart(newCart);
        }
        const { id } = selectedCartProduct;
        // removeFrom LocalStorage Cart Data 
        removeFromCart(id);
    }

    const handleSearch = (event) => {
        // console.log("abc", event.target.value)
        const targetValue = event.target.value;

        const searchItems = products.filter((item) => item.name.toLowerCase().includes(targetValue.toLowerCase()))
        // setSearch(searchItems)
        setSearchItems(searchItems)
        // console.log("line 117",searchItems)
    }

    const productName = ['Shoe', 'Pant', 'T-Shirt', 'Bag', 'Hat', 'Bottle', 'Headphone', '- all items'];

    // console.log(category)
    const handleClick = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <div className="shop-container w-100">

            <div className=''>
                <div className='m-1 border d-flex justify-content-center'>
                    {
                        // eslint-disable-next-line array-callback-return
                        productName.map((name, index) => {
                            return <Link to={name === '- all items'?'/':name} onClick={(e) => handleClick(e)} className='categoryName' >{name}</Link>
                        })
                    }
                </div>
                <div className='w-50 m-auto'>
                    <SearchBar handleSearch={handleSearch}></SearchBar>
                </div>

            </div>

            <div className="products-container ">
                {
                    searchItems.map((product, index) => <Product
                        favourite={favourite}
                        key={product.id}
                        product={product}
                        index={index}
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