/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import About from '../../pages/about';

describe('React render testing', () => {
  it('renders about page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
