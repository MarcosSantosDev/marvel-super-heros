import React, { Component } from 'react';
import API from './utils/axios';
import SearchMarvel from './components/SearchContainer';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    
  }

//  API.get('characters') chamada de function

render() {
    return (
      <div className="App">
        <h1>Component Aqui</h1>
      </div>
    );
  }
}

export default App;
