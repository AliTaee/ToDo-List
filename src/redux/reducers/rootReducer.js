import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  tasksReducer,
  mainReducer,
});

export default rootReducer;
