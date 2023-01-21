import { combineReducers } from 'redux';
import coach from './coach';
import user from './user';
import login from './loginstate';

const rootReducer = combineReducers({
  coach,
  user,
  login
})

export default rootReducer;