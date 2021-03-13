import { combineReducers } from 'redux';
import phoneBookReducer from './phoneBook.reduser';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

export default rootReducer;
