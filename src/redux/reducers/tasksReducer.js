import * as type from '../actions/actionTypes';
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
        done: false,
      });

      return [...state, taskWidthData];
    }
    case type.DONE_TASK: {
      let doneTask = [...state];
      doneTask = doneTask.map(item => {
        if (item.id === action.payload.id) {
          item.done = action.payload.isDone;
        }
        return item;
      });

      return doneTask;
    }
    case type.DELETE_TASK: {
      return state.filter(taskItem => taskItem.id !== action.payload.id);
    }
    case type.DELETE_TASKS: {
      let deleteNotes = state;
      for (let i = 0; i < action.payload.ids.length; i++) {
        deleteNotes = deleteNotes.filter(item => item.id !== action.payload.ids[i]);
      }

      return deleteNotes;
    }

    default:
      return state;
  }
}
