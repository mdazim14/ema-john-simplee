import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <p className="product-name">{name}</p>

            <div className="product-smallInfo">
                <p className="product-price">Price: ${price}</p>
                <p className="product-Manufacture">Manufacturer: {seller}</p>
                <p className="product-Manufacture">Rating: {ratings}</p>
            </div>

            <button className="btn-cart">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;