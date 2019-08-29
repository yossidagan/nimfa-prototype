import React, { Component } from 'react';
import "../style/Navbar.css"

const logo = require("../images/1-Home.png")

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">

                <img src={logo} className="logo" />
                <div className="navText">Mens</div>
                <div className="navText">Womens</div>
                <div className="navText">Top Brands</div>
                <div className="navText">Local Stores</div>
                <div className="navText">Look Book</div>
                <input type="text" placeholder="Search..." className="search" />

            </div>
        );
    }
}

export default Navbar;