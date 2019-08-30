import React, { Component } from 'react';
import './App.css';
import { observer } from "mobx-react"
import TopHeader from './components/TopHeader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from './components/HomePage';
import ContactForm from './components/ContactForm';
import MidHeader from './components/MidHeader';

@observer
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <TopHeader />
          <MidHeader />
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/contact-form' render={() => <ContactForm />} />

        </div>
      </Router>
    )
  }
}

export default App;
