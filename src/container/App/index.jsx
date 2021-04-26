import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store'

import Routes from '../../router'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
