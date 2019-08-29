import React, { Component } from 'react';
import './App.css';
import { observer } from "mobx-react"
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

@observer
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <HomePage />
        </div>
      </Router>
    )
  }
}

export default App;
