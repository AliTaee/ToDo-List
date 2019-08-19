import * as type from '../Actions/actionTypes';

const activeMain = { name: 'create' };

export default function mainReducer(state = activeMain, action) {
  switch (action.type) {
    case type.ACTIVE_MAIN: {
      const newActiveMain = Object.assign({}, state, {
        name: action.payload.activeMain,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
      });
      return newActiveMain;
    }

    default:
      return state;
  }
}
