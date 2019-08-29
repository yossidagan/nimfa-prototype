import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../style/Navbar.css"

const logo = require("../images/1-Home.png")

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">

                <img src={logo} className="logo" />
                <Link to="/">
                    <div className="navText">Home</div>
                </Link>
                <div className="navText">Products</div>
                <div className="navText">Shop</div>
                <div className="navText">Stores</div>
                <div className="navText">About Us</div>
                <input type="text" placeholder="Search..." className="search" />

            </div>
        );
    }
}

export default Navbar;