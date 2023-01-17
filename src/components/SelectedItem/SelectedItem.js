import React from 'react';
import { Button } from 'react-bootstrap';

const SelectedItem = ({ item }) => {
    // const {item} = props;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '5px'
        }}>

            <img style={{ width: "100px", height: "100px" }} src={item.img} alt="" />
            <div style={{ marginLeft: "5px", width: "200px" }}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>price: {item.price * item.quantity}</p>
            </div>
            <div>
                <Button variant="danger">Delete</Button>
            </div>

        </div>
    );
};

export default SelectedItem;