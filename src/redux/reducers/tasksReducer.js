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
    case type.EDIT_TASK: {
      let editTask = [...state];
      editTask = editTask.map(item => {
        if (item.id === action.payload.item.id) {
          item = Object.assign({}, action.payload.item, {
            id: action.payload.item.id,
            title: action.payload.item.title,
            content: action.payload.item.content,
            done: action.payload.item.done,
            date: new Date()
              .toISOString()
              .replace('-', '/')
              .split('T')[0]
              .replace('-', '/'),
          });
        }
        return item;
      });

      return editTask;
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

    default:
      return state;
  }
}
