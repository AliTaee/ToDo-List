import React from 'react';
import { mount } from 'enzyme';
import About from '../../pages/about';

describe('Test for about page', () => {
  it('Should renders about page without crashing', () => {
    const app = mount(<About />);
    expect(app.find('[data-test="about-title"]').text()).toEqual('About Todo List');
  });
});
