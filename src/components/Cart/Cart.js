import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import SelectedItem from '../SelectedItem/SelectedItem';
// import SelectedItem from '../SelectedItem/SelectedItem';
import './Cart.css';

const Cart = (props) => {

    const { cart, setShow, show } = props;
    // console.log(cart)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Order Summary</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Selected Items: {quantity}</p>
                <p>Total price: ${total}</p>
                <p>Total shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
                <div className='border border-info'>
                    <h2>Selected Items:</h2>
                    {
                        cart.map(item => <SelectedItem
                            key={item.id}
                            item={item}
                        ></SelectedItem>)
                    }
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};
export default Cart;