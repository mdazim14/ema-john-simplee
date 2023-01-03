import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { handleAddToCart, handleRemoveFromCart, product } = props;
    const { name, img, price, seller, ratings } = product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <p className="product-name">{name}</p>

            <div className="product-smallInfo">
                <p className="product-price">Price: ${price}</p>
                <p className="product-Manufacture">Manufacturer: {seller}</p>
                <p className="product-Manufacture">Rating: {ratings}</p>
            </div>
            <div className="btn-cart">
                <button onClick={() => handleAddToCart(product)}>
                    <p className="btn-text">Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

                <button onClick={() => handleRemoveFromCart(product)}>
                    <p>Remove from cart</p>
                </button>
            </div>


        </div>
    );
};

export default Product;