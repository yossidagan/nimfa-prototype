import React, { Component } from 'react';
import "../style/OurCurtains.css"
import CurtainCard from './CurtainCard';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

const photos = [
    {
      src: "https://i.imgur.com/kSTpbVo.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/3xlRMzN.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://i.imgur.com/67s7rOl.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/WNIAQpA.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/y2gfMbW.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/OIBdJeh.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/EkfUxsX.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/h4eoeV4.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/MXmlIFj.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/LdTeOQA.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/DGEGJbP.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/3inGEYV.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/0wggHxX.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/PvXkHp7.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/BffBLvi.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/w80yokf.jpg",
      width: 4,
      height: 3
    }
  ];



class OurCurtains extends Component {
    render() {
        return (
            <div>
                {/* <CurtainCard image={image}/> */}
                <Gallery photos={photos} direction={"column"} />
            </div>
        );
    }
}

export default OurCurtains;