import React, { Component } from 'react';
import Navbar from './Navbar';
import "../style/MidHeader.css"

const logo = require("../images/1-Home.png")

class MidHeader extends Component {
    render() {
        return (
            <div id="mid-header">
                <img src={logo} className="logo" />                
                <Navbar />
                {/* <div>Wow</div>
                <div>KK</div> */}
            </div>
        );
    }
}

export default MidHeader;