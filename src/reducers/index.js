import { combineReducers } from 'redux';
import writeFactReducer from './writeFactReducer';

export default combineReducers({
  facts: writeFactReducer
});
