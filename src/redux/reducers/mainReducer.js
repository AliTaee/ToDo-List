import * as type from '../actions/actionTypes';

const activeMain = { name: 'create' };

export default function mainReducer(state = activeMain, action) {
  switch (action.type) {
    case type.ACTIVE_MAIN: {
      const newActiveMain = Object.assign({}, state, {
        name: action.payload.activeMain,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
        id: action.payload.id,
        done: action.payload.done,
      });
      return newActiveMain;
    }

    default:
      return state;
  }
}
