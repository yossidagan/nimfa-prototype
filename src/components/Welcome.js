import React, { Component } from 'react';
import "../style/Welcome.css"

const welcomeImage = require("../images/welcome-img.jpg")

class Welcome extends Component {
    render() {
        return (
            <div id="welcome">
                <img className="welcome-img" src={welcomeImage} alt=""/>
                <div className="layer"></div>
                <div className="text1">ברוכים הבאים לוילונות נימפה</div>
                <div className="text2">איכות משנת 2004</div>

            </div>
        );
    }
}

export default Welcome;