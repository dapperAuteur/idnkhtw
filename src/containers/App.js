import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={ store }>
    <Router>
      <div>
        <NavBar />
        <Main />
      </div>
    </Router>
  </Provider>
)

// const mapStateToProps = state => ({
//   errorMessage: {},
//   fourLetterWord: {},
//   fourLetterWords: [],
//   game: {},
//   games: [],
//   loggedIn: false,
//   p: '',
//   prefixSuffixRoot: {},
//   prefixSuffixRoots: [],
//   showLoginForm: false,
//   showSignUpForm: false,
//   user: {},
//   currentUser: {},
//   users: [],
//   verbo: {},
//   verbos: []
// });

// const mapDispatchToProps = dispatch => ({
//   onLogout() { dispatch(actions.userLogout())},
// });
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default App;
