import { combineReducers } from 'redux';
import user from './user';
import coach from './coach';
import booking from './booking';
const rootReducer = combineReducers({
   user,
   coach,
   booking
})
  
export default rootReducer;