import { combineReducers } from 'redux';

import todos from './todos';
import modal from './modal';

export default combineReducers({
  todos,
  modal,
});
