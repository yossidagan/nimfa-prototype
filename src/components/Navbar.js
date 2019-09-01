import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/Navbar.css"


class Navbar extends Component {
    render() {
        return (
            <div id="navbar">

                <Link to="/">
                    <div className="navText">Home</div>
                </Link>
                <div className="navText">Products</div>
                <div className="navText">Shop</div>
                <div className="navText dropdown">Branches
                <div class="dropdown-content">
                        <Link to="/pt-branch" >
                            <div className="branch">Petach Tikva</div>
                            
                        </Link>
                        <Link to="/oy-branch" >
                        <div className="branch">Or Yehuda</div>
                        </Link>
                    </div>  </div>

                <div className="navText">About Us</div>

            </div>
        );
    }
}

export default Navbar;