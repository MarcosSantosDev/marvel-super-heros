import React, { Component } from 'react';
import logo from './logo.svg';
import API from './utils/axios';

import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    
  }


  // API.get() CHAMADA DA API


  render() {
    return (
      <div className="App">
        <h1>Component Aqui</h1>
      </div>
    );
  }
}

export default App;
