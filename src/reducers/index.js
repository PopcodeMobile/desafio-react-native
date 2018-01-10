import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';

export default combineReducers({
  tasks: TasksReducer
});
