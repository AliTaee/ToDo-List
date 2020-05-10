import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../pages/about';

describe('Test for about page', () => {
  it('Should renders about page with About Todo List title', () => {
    render(<About />);
    expect(screen.getByText(/about todo list/i)).toBeTruthy();
  });
});
