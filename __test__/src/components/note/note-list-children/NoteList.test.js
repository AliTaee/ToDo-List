import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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

describe('Having multiple notes on the list.', () => {
  render(<NoteList store={store} tasks={tasks} />);

  it('Should not showing empty massege for note lists', () => {
    expect(screen.queryByText(/No notes yet./gi)).toBeNull();
  });
});
