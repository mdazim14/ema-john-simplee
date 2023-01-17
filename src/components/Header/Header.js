import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from "../../images/Logo.svg";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../SearchBar/SearchBar';
const Header = ({ handleCartClick, handleSearch }) => {
    return (
        <nav className="headerNav">

            <img src={logo} alt="" />

            <div className='d-flex'>
                <div className='w-100'>
                    <SearchBar handleSearch={handleSearch}></SearchBar>
                </div>
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                    <a href="/profile">Profile</a>

                </div>
                <div>

                    <FontAwesomeIcon onClick={handleCartClick} style={{ fontSize: "1rem", color: "#ffffff", marginTop: '10px' }} icon={faShoppingCart} />

                </div>

            </div>
        </nav>
    );
};

export default Header;