import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
import './../setupTests';

it('renders Main component', () => {
  expect(shallow(<Main />)).toMatchSnapshot();
})