import React, { Component } from 'react';
import SearchMarvel from './components/SearchContainer';
import DetailsCardContainer from './components/DetailsCardContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={SearchMarvel} />
            <Route path="/details/:id" component={DetailsCardContainer}/>
        </div>
     </Router>
    );
  }
}

export default App;
