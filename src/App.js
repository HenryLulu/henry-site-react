import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './page/Home';

import './App.less';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <p>header</p>
          <Route path="/" exact component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
