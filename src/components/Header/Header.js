import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from "../../images/Logo.svg";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../SearchBar/SearchBar';
import { Col, Row } from 'react-bootstrap';
const Header = ({ handleCartClick, handleSearch }) => {
    return (
        <Row className="bg-dark py-4 w-100">
            <Col md={2} >
                <img className="ps-5" src={logo} alt="" />
            </Col>
            <Col md={4} >
                {/* <SearchBar handleSearch={handleSearch}></SearchBar> */}
            </Col>
            
            <Col md={5}>
                <div className='linkWrapper h-100'>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                    <a href="/profile">Profile</a>
                    <div className='linkWrapper border'>
                        <p className='text-white border'> Wish List </p>
                    </div>
                </div>

            </Col>
            <Col md={1} className="d-flex align-items-center justify-content-center">

                <FontAwesomeIcon onClick={handleCartClick} style={{ fontSize: "1rem", color: "#ffffff", marginTop: '10px' }} icon={faShoppingCart} />

            </Col>

        </Row>
    );
};

export default Header;