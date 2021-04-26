import { combineReducers } from 'redux';

import caracters from '../caracters'

const rootReducer = combineReducers({
  caracters: caracters.reducer
});

export default rootReducer;
