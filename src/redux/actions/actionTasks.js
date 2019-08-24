import * as type from './actionTypes';

export const addTask = newTask => ({
  type: type.ADD_TASK,
  payload: {
    newTask,
  },
});

export const doneTask = (isDone, id) => ({
  type: type.DONE_TASK,
  payload: {
    isDone,
    id,
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
