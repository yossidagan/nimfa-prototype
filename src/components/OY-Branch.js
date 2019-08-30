import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../style/OY-Branch.css"

const GOOGLE_MAP_API_KEY = "AIzaSyAKkVHS_gBRKyIrhAkoBFR7prnLJ8NeJHU"


const mapStyles = {
    width: '80%',
    height: '30%',
    marginTop : "90%",
    marginLeft : "10%"
};

class OYBranch extends Component {
    render() {
        return (
            
                <Map
                    google={this.props.google}
                    zoom={12}
                    initialCenter={{ lat: 32.025791, lng: 34.858472 }}
                >
                    <Marker position={{ lat: 32.022133, lng: 34.862111 }} />
                </Map>
        
        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
})(OYBranch);
