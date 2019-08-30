import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../style/PT-Branch.css"

const GOOGLE_MAP_API_KEY = "AIzaSyCDuiTLVqE09MnjEATJ5s0GylB2OeeOC1s"

const mapStyles = {
    width: '80%',
    height: '30%',
    marginTop : "6%",
    marginLeft : "10%"
};

class PTBranch extends Component {
    render() {
        return (

                <Map
                    google={this.props.google}
                    className="pt-branch"
                    zoom={12}
                    initialCenter={{ lat: 32.087529, lng: 34.888004 }}
                >
                    <Marker position={{ lat: 32.087610, lng: 34.884330 }} />
                </Map>
    

        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAP_API_KEY
})(PTBranch);
