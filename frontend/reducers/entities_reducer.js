import {combineReducers} from 'redux';
import users from './users_reducer'
import pictures from './picture_reducer'
import follows from './follows_reducer'


export default combineReducers({
  users,
  pictures,
  follows
});
