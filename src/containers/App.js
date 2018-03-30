import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import * as authCalls from './../actions.authApi';
import avocado from './../images/costa_rica/IMG_8076_avocado.png';
import AuthForm from '../components/Forms/AuthForm';
import NavBar from './../components/NavBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fourLetterWord: {},
      fourLetterWords: [],
      game: {},
      games: [],
      p: '',
      prefixSuffixRoot: {},
      prefixSuffixRoots: [],
      showLoginForm: false,
      showSignUpForm: false,
      user: {},
      user0: {},
      users: [],
      verbo: {},
      verbos: []
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  async handleAuth(user) {
    let currentUser;
    if (user.username !== '') {
      currentUser = await authCalls.signUp(user);
    } else {
      currentUser = await authCalls.signIn(user);
    }
    this.setState({
      showLoginForm: false,
      showSignUpForm: false,
      user: currentUser
    });
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      console.log('no localStorage');
    }
  }

  handleLogOut() {
    let user = {};
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.setState({
      user
    });
    this.props.history.push('/');
  }
  render() {
    const { showLoginForm, showSignUpForm, user } = this.state;
    return (
      <div className="App">
        <NavBar />
        { showLoginForm || showSignUpForm ?
          <AuthForm
            onAuth={ this.handleAuth }
            onClose={ () => this.setState({
              showLoginForm: false,
              showSignUpForm: false
            })}
            onShowLoginForm={ () => this.setState({
              showLoginForm: true,
              showSignUpForm: false
            })}
            onShowSignUpForm={ () => this.setState({
              showLoginForm: true,
              showSignUpForm: false
            })}
            showLoginForm={ showLoginForm }
            showSignUpForm={ showSignUpForm }
            /> : null
        }
        <img src={avocado} className="App-logo" alt="logo" />
        <h1 className="App-title">I Do Not Know How this Works</h1>
      </div>
    );
  }
}

export default App;
