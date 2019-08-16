import * as types from './actionTypes';

const addTask = newTask => ({
  type: types.ADD_TASK,
  payload: {
    newTask,
  },
});

export default addTask;
