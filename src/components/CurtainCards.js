import React, { Component } from 'react';
import "../style/CurtainCards.css"
import CurtainCard from './CurtainCard';

const salonImg = require("../images/salon-01-resize.jpg")
const romanShadeImg = require("../images/romanShade.jpg")
const lightScreenImg = require("../images/lightScreen.jpg")


const cardImages = [
    {
        img: lightScreenImg,
        type: "large-size",
        text1 : "וילון לייט סקרין מודרני",
        text2 : "מראה מרענן ויוקרתי למטבח "
    },
    {
        img: salonImg,
        type: "medium-size",
        text1 : "וילון לסלון ",
        text2 : "מאיר את הבית בצורה שלא צפית"
    },
    {
        img: romanShadeImg,
        type: "large-size",
        text1 : "וילון רומאי",
        text2 : "מראה קלאסי ומגוון לכל חלל"
    },
   
]

class CurtainCards extends Component {
    render() {
        return (
            <div id="curtain-cards">
                {cardImages.map((image, i) => <CurtainCard key={i} image={image.img}
                 type={image.type}
                 text1={image.text1}
                 text2={image.text2} />)}
            </div>
        );
    }
}

export default CurtainCards;