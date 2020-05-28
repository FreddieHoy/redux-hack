import { combineReducers } from 'redux';
import factsReducer from './factsReducer';

const factsApp = combineReducers({
  facts: factsReducer
});

export default factsApp;
