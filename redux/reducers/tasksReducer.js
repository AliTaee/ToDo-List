import * as types from '../Actions/actionTypes';

const tasks = [];

export default function tasksReducer(state = tasks, action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [...state, action.payload.newTask];
    default:
      return state;
  }
}
