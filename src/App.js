import React, { Component } from 'react';
import './App.css';
import { observer } from "mobx-react"
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ContactForm from './components/ContactForm';

@observer
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/contact-form' render={() => <ContactForm />} />

        </div>
      </Router>
    )
  }
}

export default App;
