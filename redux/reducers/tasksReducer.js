import ADD_TASK from '../Actions/actionTypes';
const shortid = require('shortid');

const tasks = [];

export default function tasksReducer(state = tasks, action) {
  switch (action.type) {
    case ADD_TASK: {
      let taskWidthData = Object.assign({}, action.payload.newTask, {
        date: new Date()
          .toISOString()
          .replace('-', '/')
          .split('T')[0]
          .replace('-', '/'),
        id: shortid.generate(),
      });

      return [...state, taskWidthData];
    }

    default:
      return state;
  }
}
