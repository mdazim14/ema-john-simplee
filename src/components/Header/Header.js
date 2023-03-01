import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from "../../images/Logo.svg";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../SearchBar/SearchBar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = ({ handleCartClick, handleSearch }) => {
    return (
        <Row className="bg-dark py-4">
            <Col md={4} >
                <img className="ps-5" src={logo} alt="" />
            </Col>


            <Col md={5}>
                <div className='linkWrapper'>
                    <Link href="/shop">Shop</Link>
                    <Link href="/orders">Orders</Link>
                    <Link href="/inventory">Inventory</Link>
                    <Link href="/about">About</Link>
                    <Link href="/profile">Profile</Link>
                </div>

                <div>
                    
                </div>

            </Col>
            <Col md={2} className="linkWrapper">
                <div>
                    <Link  className='text-info'> Wish List </Link>
                </div>
                <FontAwesomeIcon onClick={handleCartClick} style={{ fontSize: "1rem", color: "#fff458" }} icon={faShoppingCart} />


            </Col>

        </Row>
    );
};

export default Header;