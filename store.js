import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';

const exampleInitialState = {
  InitialState: [],
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware()));
}
