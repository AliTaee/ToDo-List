import ADD_TASK from '../Actions/actionTypes';

const tasks = [];

export default function tasksReducer(state = tasks, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload.newTask];
    default:
      return state;
  }
}
