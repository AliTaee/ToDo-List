import * as type from './actionTypes';

export const activeMain = (activeMain, title, content, date) => ({
  type: type.ACTIVE_MAIN,
  payload: {
    activeMain,
    title,
    content,
    date,
  },
});
