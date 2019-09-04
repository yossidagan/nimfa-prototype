import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/Navbar.css"


class Navbar extends Component {
    render() {
        return (
            <div id="navbar">

                <Link to="/">
                    <div className="navText">בית</div>
                </Link>
                <Link to="/our-curtains" >
                    <div className="navText">הוילונות שלנו</div>
                </Link>
                <div className="navText">חנות</div>
                <div className="navText dropdown">סניפים
                <div class="dropdown-content">
                        <Link to="/pt-branch" >
                            <div className="branch">פתח תקווה</div>

                        </Link>
                        <Link to="/oy-branch" >
                            <div className="branch">אור יהודה</div>
                        </Link>
                    </div>  </div>

                <div className="navText">אודותינו</div>

            </div>
        );
    }
}

export default Navbar;