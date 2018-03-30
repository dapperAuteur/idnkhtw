import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import * as apiCalls from '../actions/api';
import * as authCalls from './../actions/authApi';
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
    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.handleCheckFourLetterWord = this.handleCheckFourLetterWord.bind(this);
    this.handleDeletePalabra = this.handleDeletePalabra.bind(this);
    this.handleLoadPalabra = this.handleLoadPalabra.bind(this);
    this.handleLoadPalabras = this.handleLoadPalabras.bind(this);
    this.handleLoadRandomPalabra = this.handleLoadRandomPalabra.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.loadRandomPalabras();
  }

  async loadRandomPalabras() {
    this.handleLoadPalabras();
  }

// authentication functions

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

  // CRUD functions
  async handleAddPalabra(p, pObj) {
    let newPalabra = await apiCalls.createPalabra(p, pObj);
    let params = p.slice(0, -1);
    switch (params) {
      case "fourLetterWords":
        this.setState({ fourLetterWord: newPalabra });
        break;
      case "prefixSuffixRoots":
        this.setState({ prefixSuffixRoot: newPalabra });
        break;
      case "verbos":
        this.setState({ verbo: newPalabra });
        break;
      default:

    }
  }

  async handleLoadPalabra(p, pObj) {
    let palabra;
    let params = p.slice(0, -1);
    console.log(p, pObj);
    if (pObj.hasOwnProperty('_id')) {
      console.log(pObj);
      palabra = await apiCalls.getPalabra(p, pObj);
      console.log(palabra);
    } else if (pObj.hasOwnProperty('word')) {
      let word = pObj.word;
      console.log(word);
      let findPalabra = this.state[params].filter(param => param.word === word);
      findPalabra = findPalabra[0];
      console.log(findPalabra);
      if (findPalabra === undefined) {
        let err = { errorMessage: 'Word NOT Found!' };
        return err;
      } else if (findPalabra.hasOwnProperty('_id')) {
        palabra = await apiCalls.getPalabra(p, findPalabra);
      }
      console.log(palabra);
    }
    console.log(palabra);

    switch (params) {
      case "fourLetterWords":
        this.setState({ fourLetterWord: palabra });
        this.props.history.push('/words/four-letter-word');
        break;
      case "prefixSuffixRoots":
        this.setState({ prefixSuffixRoots: palabra });
        this.props.history.push('/words/prefix-suffix-root');
        break;
      case "user":
        this.setState({ user0: palabra });
        break;
      case "verbos":
        this.setState({ verbo: palabra });
        this.props.history.push('/words/verbo');
        break;
      default:

    }
  }

  async handleLoadPalabras() {
    let fourLetterWords = await apiCalls.getPalabras('fourLetterWords');
    let prefixSuffixRoots = await apiCalls.getPalabras('prefixSuffixRoots');
    let verbos = await apiCalls.getPalabras('verbos');

    this.setState({
      fourLetterWords,
      prefixSuffixRoots,
      verbos
    });

    localStorage.setItem('fourLetterWords', JSON.stringify(fourLetterWords));
    localStorage.setItem('prefixSuffixRoots', JSON.stringify(prefixSuffixRoots));
    localStorage.setItem('verbos', JSON.stringify(verbos));
  }


  render() {
    const { showLoginForm, showSignUpForm, user } = this.state;
    return (
      <div className="App">
        <NavBar
          user={ user }
          onLogout={ this.handleLogOut }
          onShowLoginForm={ () => this.setState({
            showLoginForm: true,
            showSignUpForm: false
          }) }
          onShowSignUpForm={ () => this.setState({
            showLoginForm: false,
            showSignUpForm: true
          }) }
          />
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
              showLoginForm: false,
              showSignUpForm: true
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
