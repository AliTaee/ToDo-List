import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import CreateNotes from '../../../../src/components/note/CreateNote';

const mockStore = configureStore();
const initialState = {
  tasksReducer: [],
  mainReducer: {},
};
const store = mockStore(initialState);

describe('Testing create a note.', () => {
  it('Should having add note title.', () => {
    render(<CreateNotes store={store} />);
    expect(screen.getByText(/add note/gi)).toBeTruthy();
  });
});
