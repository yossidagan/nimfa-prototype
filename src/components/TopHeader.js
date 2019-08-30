import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import "../style/TopHeader.css"


class TopHeader extends Component {
  render() {
    return (
      <div className="topHeader">
      <span className="register">Register</span>
      <span className="signIn">Sign In</span>
    </div>
    );
  }
}

export default TopHeader;