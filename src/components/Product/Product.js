import { faShoppingCart, faHeart as solidFaHeart  } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    // const [change, setChange] = useState(false);
    const { handleAddToCart, handleRemoveFromCart, product, handleAddToFavourite, index} = props;
    const { name, img, price, seller, ratings, isFavorite} = product;

    return (
        <div className="product">
            <div className=" w-100 position-relative">
                <img src={img} alt="" />
            </div>
            <p className='mt-2 mb-0' style={{ fontWeight: 500, fontSize: "15px" }}>{name}</p>

            <div className="my-3 d-flex justify-content-between w-100">
                <span>
                    <p className='mb-0'>Price: ${price}</p>
                    <p className='mb-0'>Manufacturer: {seller}</p>
                </span>
                <span>
                    <p >Rating: {ratings}</p>
                </span>

            </div>
            <div className=" w-100 d-flex justify-content-between">
                <Button onClick={() => handleAddToCart(product)}>
                    Add to cart
                    <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faShoppingCart}></FontAwesomeIcon>
                </Button>
               {
                isFavorite ?  <FontAwesomeIcon onClick={() => handleAddToFavourite(product, index)} style={ { color:"red", fontSize: "2rem" }} icon={solidFaHeart} /> :  <FontAwesomeIcon onClick={() => handleAddToFavourite(product, index)} style={ { color: "green", fontSize: "2rem" }} icon={faHeart} />
               }

                <Button variant="danger" onClick={() => handleRemoveFromCart(product)}>
                    Remove from cart
                </Button>
            </div>


        </div>
    );
};

export default Product;