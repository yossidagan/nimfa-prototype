import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "../style/ContactForm.css"

const button = require("../images/button-01.png")

@inject("generalStore")
@observer

class ContactForm extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            surName: "",
            city: "",
            phone: null
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendDetails = () => {
        let generalStore = this.props.generalStore
        let clientDetails = {
            name: this.state.name,
            surName: this.state.surName,
            city: this.state.city,
            phone: this.state.phone
        }
        console.log(clientDetails)
        generalStore.sendDetails(clientDetails)
    }

    render() {
        return (
            <div id="contact-form">
                <div className="headline">YOUR DETAILS</div>
                <input type="text" name="name" placeholder="Name" onChange={this.handleInput} />
                <input type="text" name="surName" placeholder="Surname" onChange={this.handleInput} />
                <input type="text" name="city" placeholder="City" onChange={this.handleInput} />
                <input type="number" name="phone" placeholder="Mobile Number" onChange={this.handleInput} />
                <div className="button" onClick={this.sendDetails}>
                    <img src={button} />
                    <h4>LEAVE DETAILS</h4>

                </div>


            </div>
        );
    }
}

export default ContactForm;