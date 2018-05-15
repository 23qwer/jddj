import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/home/Home'
import Footer from './components/public/Footer'
import Classify from './components/classify/Classify'
import Shoppingcurt from './components/shoppingcurt/Shoppingcurt'
import Order from './components/order/Order'
import Me from './components/me/Me'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/classify" component={Classify}></Route>
          <Route path="/shoppingcurt" component={Shoppingcurt}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/me" component={Me}></Route>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;


