import * as types from './actionTypes';

export const addTask = newTask => ({
  type: types.ADD_TASK,
  payload: {
    newTask,
  },
});
