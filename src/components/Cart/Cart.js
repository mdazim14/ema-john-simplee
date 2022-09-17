import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    return (
        <div className='Cart'>
            <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total price: </p>
                <p>Total shipping: </p>
                <p>Tax: </p>
                <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;