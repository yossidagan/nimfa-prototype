import React, { Component } from 'react';
import "../style/CurtainCard.css"

class CurtainCard extends Component {
    render() {

        let image = this.props.image
        let type = this.props.type
        let text1 = this.props.text1
        let text2 = this.props.text2

        return (
            <div>
                <div className={type === "large-size" ? "product-card-large" : "product-card-medium"}>
                    {/* <img className="card-background" src={cardBg} /> */}
                    <img className="product-image" src={image} />
                    <div className="product-desc"><div className="text-1">{text1}</div>
                        <div className="text-2">{text2}</div>
                             </div>

                </div>
            </div>
        );
    }
}

export default CurtainCard;