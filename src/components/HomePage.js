import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import image1 from "../../public/img-01.JPG"
// import image1 from "../images/img-01.JPG"
import Slider from "react-slick";

// import button from "../images/button-01.png"

import "../style/HomePage.css"

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const button = require("../images/button-01.png")

const slide01 = require("../images/img-01.JPG")
const slide02 = require("../images/img-02.JPG")
const slideResize = require("../images/rsz_sale-01.png")

const items = [
    {
        src: "https://i.imgur.com/VRkLj85.png",
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: "https://i.imgur.com/jDiYpKY.jpg",
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
];




const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img className="carousel-img" src={item.src} />
                    <CarouselCaption className="text-danger" captionText=
                        {item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div id="home-page">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                <Link to="/contact-form">
                <div className="button">
                    <img src={button} />
                    <h4>LEAVE DETAILS</h4>

                </div>
                </Link>
            </div>
        );
    }
}

export default HomePage;