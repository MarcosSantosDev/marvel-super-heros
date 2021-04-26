import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Heros from '../pages/Heros';
import Details from '../pages/Heros/Details';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Heros} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </Router>
);

export default App;
