import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import "../style/TopHeader.css"


class TopHeader extends Component {
  render() {
    return (
      <div className="topHeader">
      <span className="topText">הרשמה</span>
      <span className="topText">כניסה</span>
    </div>
    );
  }
}

export default TopHeader;