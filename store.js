import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';

const exampleInitialState = {
  InitialState: [
    {
      name: 'Vue',
      content: 'Learning Vue.js'
    },
    {
      name: 'React',
      content: 'Learning React.js'
    }
  ]
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
