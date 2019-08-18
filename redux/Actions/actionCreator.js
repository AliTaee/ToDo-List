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

export const deleteTasks = () => ({
  type: type.DELETE_TASKS,
});
