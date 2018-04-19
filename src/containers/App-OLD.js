import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import shuffle from 'shuffle-array';
import * as apiCalls from '../actions/api';
import * as authCalls from './../actions/authApi';
import AuthForm from './../components/Forms/AuthForm';
import ErrorMessages from './../components/Errors/ErrorMessages'
import GameStatus from './../components/Games/GameStatus';
import Main from './Main';
import NavBar from './../components/NavBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: {},
      fourLetterWord: {},
      fourLetterWords: [],
      game: {},
      games: [],
      loggedIn: false,
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
    let errorMessage;
    if (user.username !== '') {
      currentUser = await authCalls.signUp(user);
    } else {
      currentUser = await authCalls.signIn(user);
    }
    console.log(currentUser);
    if (currentUser.hasOwnProperty('errorMessage')) {
      errorMessage = currentUser;
      this.setState({
        errorMessage
      });
    } else {
      this.setState({
        loggedIn: true,
        showLoginForm: false,
        showSignUpForm: false,
        user: currentUser
      });
    }
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      return null;
    }
  }

  handleLogOut() {
    let user = {};
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.setState({
      loggedIn: false,
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

  handleCheckFourLetterWord(game) {
    let { attempts, bulls, cows, guess, guesses, message, score, winning_word, won, word_to_consider_for_library } = { ...game };
    bulls = 0;
    cows = 0;
    console.log(guess);
    console.log(game);
    console.log(guesses);
    guess = guesses.slice(-1);
    guess = guess[0].toLowerCase();
    console.log(guess);
    let word = winning_word.word;
    console.log(word);
    let currentGuess = this.state.fourLetterWords.filter(word => word.word === guess);
    console.log(currentGuess);
    if (currentGuess.length === 0) {
      word_to_consider_for_library.push(guess);
      message = `${guess} is NOT word in our library. We'll consider adding it to the library. You lose 200 points`;
      score -= 200;
      console.log(`message: ${message}, score: ${score}`);
    } else if (guess === word) {
      bulls = 4;
      message = 'You Won!!!';
      score += 500;
      won = true;
      console.log(`bulls: ${bulls}, message: ${message}, score: ${score}, won: ${won}`);
    } else {
      let arr_guess = guess.split("");
      let arr_word = word.split("");
      message = `${guess} is NOT the Word`;
      for (var i = 0; i < arr_guess.length; i++) {
        for (var j = 0; j < arr_word.length; j++) {
          if (arr_guess[i] === arr_word[j]) {
            if (i === j) {
              bulls++;
              score += 100;
              won = false;
              arr_guess[i] = "0";
              arr_word[j] = "1";
            }
          }
          if (arr_guess[i] === arr_word[j]) {
            cows++;
            score += 50;
            won = false;
            arr_guess[i] = "0";
            arr_word[j] = "1";
          }
        }
      }
      message = `You didn't win yet.`
      won = false;
      console.log(`cows: ${cows}, bulls: ${bulls}, message: ${message}, score: ${score}, won: ${won}`);
    }
    game = {
      attempts,
      bulls,
      cows,
      guess,
      guesses,
      message,
      score,
      winning_word,
      won,
      word_to_consider_for_library
    }
    console.log(game);
    this.setState({ game });
    localStorage.setItem("game", JSON.stringify(game));
  }

  handleCreateGame() {
    let winning_word;
    this.handleLoadRandomPalabra();

    console.log(winning_word);
    let user;

    let game = {
      attempts: 0,
      bulls: 0,
      cows: 0,
      guess: '',
      guesses: [],
      message: '',
      score: 0,
      winning_word,
      won: false,
      word_to_consider_for_library: []
    }
    this.setState({ game });
    console.log(game, user, winning_word);
  }

  async handleDeletePalabra() {
    let userRole = this.state.user.userRole;
    let token = this.state.user.token;
    let pathname = this.props.history.location.pathname;
    let params = pathname.slice(7) + 's';
    if (params === 'four-letter-words') {
      params = 'fourLetterWords';
    } else if (params === 'prefix-suffix-roots') {
      params = 'prefixSuffixRoots';
    }
    let p = params + '/';
    let palabra;
    switch (params) {
      case 'fourLetterWords':
        palabra = this.state.fourLetterWord;
        break;
      case 'prefixSuffixRoots':
        palabra = this.state.prefixSuffixRoot;
        break;
      case 'verbos':
        palabra = this.state.verbo;
        break;
      default:

    }
    let pObj = {
      _id: palabra._id,
      p,
      palabra,
      token,
      userRole
    }
    if (pObj.hasOwnProperty('_id')) {
      let deletedPalabra = await apiCalls.removePalabra(p, pObj);
      const palabras = this.state[params].filter(param => param._id === pObj._id);
      switch (params) {
        case 'fourLetterWords':
          this.setState({
            fourLetterWord: {},
            fourLetterWords: palabras
          });
          break;
        case 'prefixSuffixRoots':
          this.setState({
            prefixSuffixRoot: {},
            prefixSuffixRoots: palabras
          });
          break;
        case 'verbos':
          this.setState({
            verbo: {},
            verbos: palabras
          });
          break;
        default:

      }
    }
  }

  async handleLoadPalabra(p, pObj) {
    let palabra;
    let params = p.slice(0, -1);
    if (pObj.hasOwnProperty('_id')) {
      palabra = await apiCalls.getPalabra(p, pObj);
    } else if (pObj.hasOwnProperty('word')) {
      let word = pObj.word;
      let findPalabra = this.state[params].filter(param => param.word === word);
      findPalabra = findPalabra[0];
      if (findPalabra === undefined) {
        let err = { errorMessage: 'Word NOT Found!' };
        return err;
      } else if (findPalabra.hasOwnProperty('_id')) {
        palabra = await apiCalls.getPalabra(p, findPalabra);
      }
    }

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

  async handleLoadRandomPalabra() {
    console.log(this.state);
    let fourLetterWord;
    let fourLetterWords;
    let prefixSuffixRoot;
    let prefixSuffixRoots;
    let verbo;
    let verbos;
    let palabraHash = this.props.location.hash;
    let palabra = palabraHash.slice(1);
    switch (palabra) {
      case 'fourLetterWord':
        console.log(palabra);
        if (this.state.fourLetterWords.length !== 0) {
          fourLetterWords = [...this.state.fourLetterWords];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          fourLetterWord
        });
        if (fourLetterWord !== undefined) {
          localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        }
        break;
      case 'fourLetterWords':
        if (this.state.fourLetterWords.length !== 0) {
          fourLetterWords = [...this.state.fourLetterWords];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          fourLetterWord
        });
        if (fourLetterWord !== undefined) {
          localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        }
        break;
      case 'prefixSuffixRoot':
        if (this.state.prefixSuffixRoots.length !== 0) {
          prefixSuffixRoots = [...this.state.prefixSuffixRoots];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          prefixSuffixRoot
        });
        if (prefixSuffixRoot !== undefined) {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        }
        break;
      case 'prefixSuffixRoots':
        if (this.state.prefixSuffixRoots.length !== 0) {
          prefixSuffixRoots = [...this.state.prefixSuffixRoots];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          prefixSuffixRoot
        });
        if (prefixSuffixRoot !== undefined) {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        }
        break;
      case 'verbo':
        if (this.state.verbos.length !== 0) {
          verbos = [...this.state.verbos];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          verbo
        });
        if (verbo !== undefined) {
          localStorage.setItem('verbo', JSON.stringify(verbo));
        }
        console.log(verbo);
        break;
      case 'verbos':
        if (this.state.verbos.length !== 0) {
          verbos = [...this.state.verbos];
        } else {
          this.handleLoadPalabras();
          this.handleLoadRandomPalabra();
        }
        verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          verbo
        });
        if (verbo !== undefined) {
          localStorage.setItem('verbo', JSON.stringify(verbo));
        }
        // console.log(verbo);
        break;
      default:
      if (this.state.fourLetterWords !== 0) {
        fourLetterWords = [...this.state.fourLetterWords];
      } else {
        this.handleLoadPalabras();
        this.handleLoadRandomPalabra();
      }
      fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
      this.setState({
        fourLetterWord
      });
      console.log(this.state.fourLetterWord);
      if (fourLetterWord !== undefined) {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
      }
      break
    }
  }

  handleSave=(p, pObj) => {
    if (pObj.hasOwnProperty('_id')) {
      this.handleUpdatePalabra(p, pObj);
    } else {
      this.handleAddPalabra(p, pObj);
    }
  }

  async handleUpdatePalabra(p, pObj) {
    let userRole = this.state.user.userRole;
    let token = this.state.user.token;
    pObj.userRole = userRole;
    pObj.token = token;
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state[params].map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)

    switch (params) {
      case 'fourLetterWords':
        this.setState({
          fourLetterWord: updatedPalabra,
          fourLetterWords: palabras
        });
        break;
      case 'prefixSuffixRoots':
        this.setState({
          prefixSuffixRoot: updatedPalabra,
          prefixSuffixRoots: palabras
        });
        break;
      case 'verbos':
        this.setState({
          verbo: updatedPalabra,
          verbos: palabras
        });
        break;
      default:

    }
  }

  render() {
    const { errorMessage, fourLetterWord, game, prefixSuffixRoot, showLoginForm, showSignUpForm, user, verbo } = this.state;
    let p = this.props.location.pathname;
    return (
      <div className="App">
        <NavBar
          fourLetterWord={ fourLetterWord }
          prefixSuffixRoot={ prefixSuffixRoot }
          onCreateGame={ this.handleCreateGame }
          onLoadRandomPalabra={ this.handleLoadRandomPalabra }
          onLogout={ this.handleLogOut }
          verbo={ verbo }
          user={ user }
          onShowLoginForm={ () => this.setState({
            showLoginForm: true,
            showSignUpForm: false
          }) }
          onShowSignUpForm={ () => this.setState({
            showLoginForm: false,
            showSignUpForm: true
          }) }
          />
        <ErrorMessages
          errorMessage={ errorMessage }
          props={ this.state } />
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
        {
          p === '/games/four-letter-word' &&
          <GameStatus game={ game } onCreateGame={ this.handleCreateGame } />
        }
        <Main
          props={ this.state }
          onCheckFourLetterWord = { this.handleCheckFourLetterWord }
          onDelete={ this.handleDeletePalabra }
          onLoadPalabra={ this.handleLoadPalabra }
          onLoadRandomPalabra={ this.handleLoadRandomPalabra }
          onSave={ this.handleSave }
          />
        <h1 className="App-title">I Do Not Know How this Works</h1>
      </div>
    );
  }
}

export default withRouter(App);