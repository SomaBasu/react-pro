import { combineReducers } from 'redux';
import coach from './coach';
import user from './user';

const rootReducer = combineReducers({
  coach,
  user
})

export default rootReducer;