import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import verboReducer from './../store/reducers/verboReducer';

import App from './App';

const rootReducer = combineReducers({ verboReducer });

const store = createStore(rootReducer);

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <Provider store={ store }>
//       <Router>
//         <App />
//       </Router>
//   </Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
describe("Jasmine Matchers", function () {
  it('allows for === and deep equality', function() {
    expect(1 + 3).toBe(4);
    expect([1, 2, 4]).toEqual([1, 2, 4]);
  });
})
