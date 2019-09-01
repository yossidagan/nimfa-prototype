import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../style/PT-Branch.css"

const GOOGLE_MAP_API_KEY = "AIzaSyCDuiTLVqE09MnjEATJ5s0GylB2OeeOC1s"

const button = require("../images/button-01.png")


const mapStyles = {
    width: '80vw',
    height: '30vh',
    marginTop: "4vh",
    marginLeft: "10vw"
};

class PTBranch extends Component {
    render() {
        return (
            <div id="pt">
                <div className="details">
                    <h2>Petach Tikva Branch</h2>
                    <h3>Address : Ichilov 14</h3>
                    <h3>Telephone : 03-9342799</h3>
                    <h3>Mobile : 054-7764414</h3>
                </div>

                <a href="https://www.waze.com/ul?ll=32.08725560%2C34.88392260&navigate=yes">

                    <div className="button">
                        <img src={button} />
                        <h4>OPEN IN WAZE</h4>
                        <i class="fab fa-waze"></i>
                    </div>
                    </a>

                <Map
                    google={this.props.google}
                    className="pt-branch"
                    style={mapStyles}
                    zoom={12}
                    initialCenter={{ lat: 32.087529, lng: 34.888004 }}
                >
                    <Marker position={{ lat: 32.087610, lng: 34.884330 }} />

                </Map>

            </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
})(PTBranch);
