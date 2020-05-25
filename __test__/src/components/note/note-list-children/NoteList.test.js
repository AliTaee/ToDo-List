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

describe('No notes on list.', () => {
  it('Should having no notes on the list (showing a proper message).', () => {
    render(<NoteList store={store} tasks={[]} />);
    expect(screen.getByText(/No notes yet./i)).toBeTruthy();
  });
});

describe('Having multiple notes on the list.', () => {
  render(<NoteList store={store} tasks={tasks} />);

  it('Should not showing empty massege for note lists', () => {
    expect(screen.queryByText(/No notes yet./i)).toBeNull();
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
    expect(screen.getAllByTestId('note-edit')).toHaveLength(2);
  });

  it('Should Note 1 have a e2e value', () => {
    expect(screen.getByText(tasks[0].title).innerHTML).toEqual(tasks[0].title);
  });

  it('Should Note 1 have a date 2020/03/05 value', () => {
    expect(screen.getByText(tasks[0].date).innerHTML).toEqual(tasks[0].date);
  });

  it('Should Note 2 have a unit value', () => {
    expect(screen.getByText(tasks[1].title).innerHTML).toEqual(tasks[1].title);
  });

  it('Should Note 2 have a date 2020/03/04 value', () => {
    expect(screen.getByText(tasks[1].date).innerHTML).toEqual(tasks[1].date);
  });
});
