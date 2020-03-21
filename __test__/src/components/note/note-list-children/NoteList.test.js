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

describe('Test for Note list component', () => {
  it('Should having no notes on the list (showing a proper message).', () => {
    const noteList = mount(<NoteList store={store} tasks={[]} />);
    expect(noteList.find('[data-test="no-note-yet"]')).toBeTruthy();
  });

  describe('Having multiple notes on the list (showing note title, note date, and edit and delete buttons).', () => {
    const noteList = mount(
      <NoteList
        store={store}
        tasks={[
          {
            title: 'e2e',
            content: 'Learning E2E',
            date: '2020/03/05',
            id: 'evRFE5i5',
            done: false,
          },
          {
            title: 'unit-test',
            content: 'Learning Unit Test',
            date: '2020/03/04',
            id: 'FTSTSrn7',
            done: false,
          },
        ]}
      />,
    );

    it('Should not showing empty massege for note lists', () => {
      expect(noteList.contains('[data-test="no-note-yet"]')).toBe(false);
    });

    it('Should have 2 note on the list', () => {
      expect(noteList.find('[data-test="note-item"]')).toHaveLength(2);
    });

    it('Should have 2 note date on list', () => {
      expect(noteList.find('[data-test="note-date"]')).toHaveLength(2);
    });
  });
});
