import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';

const appInitialState = {
  tasksReducer: [],
};

const initializeStore = (initialState = appInitialState) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware()));

export default initializeStore;
