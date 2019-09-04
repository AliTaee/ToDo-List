import * as type from './actionTypes';

export const activeMain = (activeMain, title, content, date, id, done) => ({
  type: type.ACTIVE_MAIN,
  payload: {
    activeMain,
    title,
    content,
    date,
    id,
    done,
  },
});
