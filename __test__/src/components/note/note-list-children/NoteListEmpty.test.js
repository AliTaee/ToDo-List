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

describe('No notes on list.', () => {
  it('Should having no notes on the list (showing a proper message).', () => {
    render(<NoteList store={store} tasks={[]} />);
    expect(screen.getByText(/No notes yet./gi)).toBeTruthy();
  });
});
