import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from "../../images/Logo.svg";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = ({handleCartClick}) => {
    return (
        <nav className="headerNav">

            <img src={logo} alt="" />

            <div>
                
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
                <FontAwesomeIcon onClick={handleCartClick} style={{fontSize:"1rem", color:"#ffffff"}} icon={faShoppingCart} />
s
            </div>
        </nav>
    );
};

export default Header;