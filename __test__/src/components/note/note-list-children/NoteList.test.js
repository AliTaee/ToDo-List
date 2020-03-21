import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import NoteList from '../../../../../src/components/note/note-list-children/NoteList';

const mockStore = configureStore();
const initialState = {
  tasksReducer: [],
  mainReducer: {},
};
const store = mockStore(initialState);

const tasks = [
  {
    title: 'e2e',
    content: 'Learning E2E',
    date: '2020/03/05',
    id: 'evRFE5i5',
    done: false,
  },
  {
    title: 'unit',
    content: 'Learning Unit Test',
    date: '2020/03/04',
    id: 'FTSTSrn7',
    done: false,
  },
];

describe('Test for Note list component', () => {
  it('Should having no notes on the list (showing a proper message).', () => {
    const noteList = mount(<NoteList store={store} tasks={[]} />);
    expect(noteList.find('[data-test="no-note-yet"]')).toBeTruthy();
  });

  describe('Having multiple notes on the list (showing note title, note date, and edit and delete buttons).', () => {
    const noteList = mount(<NoteList store={store} tasks={tasks} />);

    it('Should not showing empty massege for note lists', () => {
      expect(noteList.contains('[data-test="no-note-yet"]')).toBe(false);
    });

    it('Should have 2 note on the list', () => {
      expect(noteList.find('[data-test="note-item"]')).toHaveLength(2);
    });

    it('Should have 2 note date on list', () => {
      expect(noteList.find('[data-test="note-date"]')).toHaveLength(2);
    });

    it('Should have 2 note edit button on list', () => {
      expect(noteList.find('svg[data-test="note-edit"]')).toHaveLength(2);
    });

    it('Should have 2 note delete button on list', () => {
      expect(noteList.find('svg[data-test="note-delete"]')).toHaveLength(2);
    });

    it('Should Note 1 have a e2e value', () => {
      expect(
        noteList
          .find('[data-test="note-title"]')
          .at(0)
          .text(),
      ).toEqual(tasks[0].title);
    });

    it('Should Note 1 have a date 2020/03/05 value', () => {
      expect(
        noteList
          .find('[data-test="note-date"]')
          .at(0)
          .text(),
      ).toEqual(tasks[0].date);
    });

    it('Should Note 2 have a unit value', () => {
      expect(
        noteList
          .find('[data-test="note-title"]')
          .at(1)
          .text(),
      ).toEqual(tasks[1].title);
    });

    it('Should Note 2 have a date 2020/03/04 value', () => {
      expect(
        noteList
          .find('[data-test="note-date"]')
          .at(1)
          .text(),
      ).toEqual(tasks[1].date);
    });
  });
});
