import * as type from '../Actions/actionTypes';
const shortid = require('shortid');

const tasks = [];

export default function tasksReducer(state = tasks, action) {
  switch (action.type) {
    case type.ADD_TASK: {
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
    case type.DELETE_TASK: {
      return state.filter(taskItem => taskItem.id !== action.payload.id);
    }
    case type.DELETE_TASKS: {
      const emptyState = [];
      return emptyState;
    }

    default:
      return state;
  }
}
