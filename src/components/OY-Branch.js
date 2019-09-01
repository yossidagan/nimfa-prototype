import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../style/OY-Branch.css"

const GOOGLE_MAP_API_KEY = "AIzaSyAKkVHS_gBRKyIrhAkoBFR7prnLJ8NeJHU"

const button = require("../images/button-01.png")


const mapStyles = {
    width: '80vw',
    height: '30vh',
    marginTop: "4vh",
    marginLeft: "10vw"
};



class OYBranch extends Component {

    render() {
        return (
            <div className="oy">
                <div className="details">
                    <h2>Or Yehuda Branch</h2>
                    <h3>Address : Ha'Melacha 6</h3>
                    <h3>Telephone : 03-6344234</h3>
                    <h3>Mobile : 054-3084414</h3>
                </div>
                <a href="https://www.waze.com/ul?ll=32.02183300%2C34.86212170&navigate=yes">

                    <div className="button">
                        <img src={button} />
                        <h4>OPEN IN WAZE</h4>
                        <i class="fab fa-waze"></i>

                    </div>

                </a>
                <Map
                    google={this.props.google}
                    className="oy-branch"
                    style={mapStyles}
                    zoom={12}
                    initialCenter={{ lat: 32.025791, lng: 34.858472 }}
                >
                    <Marker position={{ lat: 32.022133, lng: 34.862111 }} />
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
})(OYBranch);
