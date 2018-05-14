import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/home/Home'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;


