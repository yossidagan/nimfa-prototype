import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import "../style/TopHeader.css"


class TopHeader extends Component {
  render() {
    return (
      <div className="topHeader">
      <span className="topText">Register</span>
      <span className="topText">Sign In</span>
    </div>
    );
  }
}

export default TopHeader;