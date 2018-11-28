import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import './../setupTests';

it('renders without crashing', () => {
  // console.log(App);
  const div = document.createElement('div');
  expect(shallow(<App />)).toMatchSnapshot();
});
