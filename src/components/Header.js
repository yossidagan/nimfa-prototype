import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import "../style/Header.css"

export default class Example extends React.Component {
  render() {
    return (
      <div className="topHeader">
        <div></div>
        <span className="register">Register</span>
        <span className="signIn">Sign In</span>
        <div></div>
      </div>

    );
  }
}