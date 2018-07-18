import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PalabrasContainer from './PalabrasContainer';

const rootReducer = combineReducers({ verboReducer });

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PalabrasContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
