import * as type from './actionTypes';

export const addTask = newTask => ({
  type: type.ADD_TASK,
  payload: {
    newTask,
  },
});

export const deleteTask = id => ({
  type: type.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteTasks = ids => ({
  type: type.DELETE_TASKS,
  payload: {
    ids,
  },
});

export const editTask = item => ({
  type: type.EDIT_TASK,
  payload: {
    item,
  },
});

export const doneTask = (isDone, id) => ({
  type: type.DONE_TASK,
  payload: {
    isDone,
    id,
  },
});
