import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootState from './root';

const store = createStore(
  rootReducer,
  rootState,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
