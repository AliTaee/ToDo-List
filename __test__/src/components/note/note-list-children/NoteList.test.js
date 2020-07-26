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

  it('Should have 2 note on the list', () => {
    expect(screen.getAllByTestId('note-item')).toHaveLength(2);
  });

  it('Should have 2 note date on list', () => {
    expect(screen.getAllByTestId('note-date')).toHaveLength(2);
  });

  it('Should have 2 note edit button on list', () => {
    expect(screen.getAllByTestId('note-edit')).toHaveLength(2);
  });

  it('Should have 2 note delete button on list', () => {
    expect(screen.getAllByTestId('note-delete')).toHaveLength(2);
  });
});
