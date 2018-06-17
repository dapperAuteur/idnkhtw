import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import shuffle from 'shuffle-array';
import * as apiCalls from './../actions/api';
import * as authCalls from './../actions/authApi';
import AuthForm from './../components/Forms/AuthForm';
import ErrorMessages from './../components/Errors/ErrorMessages';
import GameStatus from './../components/Games/GameStatus';
import Main from './Main';
import NavBar from './../components/NavBar';
import Vision from './../components/Vision/Vision';
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
      post: {},
      posts: [],
      prefixSuffixRoot: {},
      prefixSuffixRoots: [],
      showEnglish: false,
      showLoginForm: false,
      showSignUpForm: false,
      tag: '',
      tags: [],
      user: {},
      user0: {},
      users: [],
      verbo: {},
      verbos: []
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.handleCheckFourLetterWord = this.handleCheckFourLetterWord.bind(this);
    this.handleDeleteBlog = this.handleDeleteBlog.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.handleDeletePalabra = this.handleDeletePalabra.bind(this);
    this.handleLoadBlogPost = this.handleLoadBlogPost.bind(this);
    this.handleLoadTag = this.handleLoadTag.bind(this);
    this.handleLoadBlogPosts = this.handleLoadBlogPosts.bind(this);
    this.handleLoadTags = this.handleLoadTags.bind(this);
    this.handleLoadPalabra = this.handleLoadPalabra.bind(this);
    this.handleLoadPalabras = this.handleLoadPalabras.bind(this);
    this.handleLoadRandomPalabra = this.handleLoadRandomPalabra.bind(this);
    this.handleLoadUser = this.handleLoadUser.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSavePost = this.handleSavePost.bind(this);
    this.handleSaveTag = this.handleSaveTag.bind(this);
  }

  componentDidMount() {
    this.handleLoadPalabras();
    this.handleLoadUser();
    this.handleLoadBlogPosts();
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

  handleLoadUser() {
    let user = {};
    if (typeof(Storage) !== 'undefined') {
      if (localStorage.hasOwnProperty('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        this.setState({
          loggedIn: true,
          user
        });
      }
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

  // Blog Functions
  async handleAddPost(p, pObj) {
    console.log(p, pObj);
    let { token, userId, userRole } = this.state.user;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    console.log(pObj);
    let newPost = await apiCalls.createPalabra(p, pObj);
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('post', JSON.stringify(newPost));
    } else {
      return null;
    }
    this.setState({ post: newPost });
  }

  async handleDeleteBlog(p = 'posts', pObj) {
    console.log("delete blog post");
  }

  async handleLoadBlogPost(p = 'posts', pObj) {
    let text = await apiCalls.getPalabra(p, pObj);
    console.log(text);
    this.setState({ text });
  }

  async handleLoadBlogPosts() {
    let posts = await apiCalls.getPalabras('posts');
    console.log(posts);
    this.setState({ posts });
  }
  handleSavePost=(params) => {
    let { p, pObj } = params;
    console.log(p);
    console.log(pObj);
    if (pObj.hasOwnProperty('_id')) {
      this.handleUpdatePost(p, pObj);
    } else {
      this.handleAddPost(p, pObj);
    }
  }

  async handleUpdatePost(p, pObj) {
    console.log(pObj);
    let posts;
    let { token, userId, userRole } = this.state.user;
    // let userRole = this.state.user.userRole;
    // let token = this.state.user.token;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    let updatedPost = await apiCalls.updatePalabra(p, pObj);
    // let params = p.slice(0, -1);
    const palabras = this.state.posts.map(post => (post._id === updatedPost._id) ? { ...post, ...updatedPost } : post)

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('post', JSON.stringify(updatedPost));
      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      return null;
    }
    this.setState({
      post: updatedPost,
      posts: posts
    });
  }

  // Tag Functions
  async handleAddTag(p, pObj) {
    console.log(p, pObj);
    let { token, userId, userRole } = this.state.user;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    console.log(pObj);
    let newTag = await apiCalls.createPalabra(p, pObj);
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('tag', JSON.stringify(newTag));
    } else {
      return null;
    }
    this.setState({ tag: newTag });
  }

  async handleDeleteTag(p = 'tags', pObj) {
    console.log("delete blog tag");
  }

  async handleLoadTag(p = 'tags', pObj) {
    let text = await apiCalls.getPalabra(p, pObj);
    console.log(text);
    this.setState({ text });
  }

  async handleLoadTags() {
    let tags = await apiCalls.getPalabras('tags');
    console.log(tags);
    this.setState({ tags });
  }
  handleSaveTag=(params) => {
    let { p, pObj } = params;
    console.log(p);
    console.log(pObj);
    // if TAG does NOT exist in db add it to db, else add it to object
    // use filter to determine which tag(s) need to bee added to db
    if (true) {
      if (pObj.hasOwnProperty('_id')) {
        this.handleUpdateTag(p, pObj);
      } else {
        this.handleAddTag(p, pObj);
      }
    }
  }

  async handleUpdateTag(p, pObj) {
    console.log(pObj);
    let tags;
    let { token, userId, userRole } = this.state.user;
    // let userRole = this.state.user.userRole;
    // let token = this.state.user.token;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    let updatedTag = await apiCalls.updatePalabra(p, pObj);
    // let params = p.slice(0, -1);
    const palabras = this.state.tags.map(tag => (tag._id === updatedTag._id) ? { ...tag, ...updatedTag } : tag)

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('tag', JSON.stringify(updatedTag));
      localStorage.setItem('tags', JSON.stringify(tags));
    } else {
      return null;
    }
    this.setState({
      tag: updatedTag,
      tags: tags
    });
  }

  // CRUD Palabras functions
  async handleAddPalabra(p, pObj) {
    let { token, userId, userRole } = this.state.user;
    // let userId = this.state.user.userId;
    // let userRole = this.state.user.userRole;
    // let token = this.state.user.token;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    let newPalabra = await apiCalls.createPalabra(p, pObj);
    let params = p.slice(0, -1);
    switch (params) {
      case "fourLetterWords":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('fourLetterWord', JSON.stringify(newPalabra));
        } else {
          return null;
        }
        this.setState({ fourLetterWord: newPalabra });
        break;
      case "prefixSuffixRoots":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(newPalabra));
        } else {
          return null;
        }
        this.setState({ prefixSuffixRoot: newPalabra });
        break;
      case "verbos":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('verbo', JSON.stringify(newPalabra));
        } else {
          return null;
        }
        this.setState({ verbo: newPalabra });
        break;
      default:

    }
  }

  handleCheckFourLetterWord(game) {
    let { attempts, bulls, cows, guess, guesses, message, score, winning_word, won, word_to_consider_for_library } = { ...game };
    bulls = 0;
    cows = 0;
    guess = guesses.slice(-1);
    guess = guess[0].toLowerCase();
    let word = winning_word.word;
    let currentGuess = this.state.fourLetterWords.filter(word => word.word === guess);
    if (currentGuess.length === 0) {
      word_to_consider_for_library.push(guess);
      message = `${guess} is NOT word in our library. We'll consider adding it to the library. You lose 200 points`;
      score -= 200;
    } else if (guess === word) {
      bulls = 4;
      message = 'You Won!!!';
      score += 500;
      won = true;
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
    this.setState({ game });
    localStorage.setItem("game", JSON.stringify(game));
  }

  handleCreateGame() {
    let winning_word;
    this.handleLoadRandomPalabra();

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
  }

  async handleDeletePalabra() {
    let { token, userId, userRole } = this.state.user;
    // let userRole = this.state.user.userRole;
    // let token = this.state.user.token;
    let pathname = this.props.history.location.pathname;
    let params = pathname.slice(7) + 's';
    if (params === 'words/four-letter-word') {
      params = 'fourLetterWords';
    } else if (params === 'prefix-suffix-roots') {
      params = 'prefixSuffixRoots';
    }
    let p = params + '/';
    let palabra;
    switch (pathname) {
      case '/words/four-letter-word':
        palabra = this.state.fourLetterWord;
        break;
      case '/words/prefix-suffix-root':
        palabra = this.state.prefixSuffixRoot;
        break;
      case '/words/verbo':
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
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem('fourLetterWord', JSON.stringify({}));
          } else {
            return null;
          }
          this.setState({
            fourLetterWord: {},
            fourLetterWords: palabras
          });
          break;
        case 'prefixSuffixRoots':
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem('prefixSuffixRoot', JSON.stringify({}));
          } else {
            return null;
          }
          this.setState({
            prefixSuffixRoot: {},
            prefixSuffixRoots: palabras
          });
          break;
        case 'verbos':
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem('verbo', JSON.stringify({}));
          } else {
            return null;
          }
          this.setState({
            verbo: {},
            verbos: palabras
          });
          break;
        default:

      }
    }
  }

  async handleLoadPalabra(p, wordObj) {
    let palabra = wordObj;
    let params;
    switch (p) {
      case "four-letter-words/":
        params = "fourLetterWord"
        break;
      case "prefix-suffix-roots/":
        params = "prefixSuffixRoot"
        break;
      case "verbos/":
        params = "verbo"
        break;
      default:

    }

    switch (p) {
      case "four-letter-words/":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('fourLetterWord', JSON.stringify(palabra));
        } else {
          return null;
        }
        this.setState({ fourLetterWord: palabra });
        this.props.history.push('/words/four-letter-word');
        break;
      case "prefix-suffix-roots/":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(palabra));
        } else {
          return null;
        }
        this.setState({ prefixSuffixRoot: palabra });
        this.props.history.push('/words/prefix-suffix-root');
        break;
      case "user":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('user0', JSON.stringify(palabra));
        } else {
          return null;
        }
        this.setState({ user0: palabra });
        break;
      case "verbos/":
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('verbo', JSON.stringify(palabra));
        } else {
          return null;
        }
        this.setState({ verbo: palabra });
        this.props.history.push('/words/verbo');
        break;
      default:

    }
  }

  async handleLoadPalabras() {
    let fourLetterWords = await apiCalls.getPalabras('four-letter-words');
    let prefixSuffixRoots = await apiCalls.getPalabras('prefix-suffix-roots');
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
    let fourLetterWord;
    let fourLetterWords;
    let prefixSuffixRoot;
    let prefixSuffixRoots;
    let verbo;
    let verbos;
    let p = this.props.location.pathname;
    // let p = "four-letter-words/";

    switch (p) {
      case '/words/four-letter-word':
        if (this.state.fourLetterWords.length !== 0) {
          fourLetterWords = [...this.state.fourLetterWords];
        } else {
          // this.handleLoadPalabras();
          // this.handleLoadRandomPalabra();
        }
        fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          fourLetterWord
        });
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        } else {
          return null;
        }
        break;
      case '/words/prefix-suffix-root':
        if (this.state.prefixSuffixRoots.length !== 0) {
          prefixSuffixRoots = [...this.state.prefixSuffixRoots];
        } else {
          // this.handleLoadPalabras();
          // this.handleLoadRandomPalabra();
        }
        prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          prefixSuffixRoot
        });
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        } else {
          return null;
        }
        break;
      case '/words/verbo':
        if (this.state.verbos.length !== 0) {
          verbos = [...this.state.verbos];
        } else {
          // this.handleLoadPalabras();
          // this.handleLoadRandomPalabra();
        }
        verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);
        this.setState({
          verbo
        });
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('verbo', JSON.stringify(verbo));
        } else {
          return null;
        }
        break;
      default:
      if (this.state.fourLetterWords) {
        fourLetterWords = [...this.state.fourLetterWords];
      } else {
        // this.handleLoadPalabras();
        // this.handleLoadRandomPalabra();
      }
      fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
      this.setState({
        fourLetterWord
      })
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
      } else {
        return null;
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
    let { token, userId, userRole } = this.state.user;
    // let userId = this.state.user.userId;
    // let userRole = this.state.user.userRole;
    // let token = this.state.user.token;
    pObj.userId = userId;
    pObj.userRole = userRole;
    pObj.token = token;
    let updatedPalabra = await apiCalls.updatePalabra(p, pObj);
    let params = p.slice(0, -1);
    const palabras = this.state[params].map(param => (param._id === updatedPalabra._id) ? { ...param, ...updatedPalabra } : param)

    switch (params) {
      case 'fourLetterWords':
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('fourLetterWord', JSON.stringify(updatedPalabra));
          localStorage.setItem('fourLetterWords', JSON.stringify(palabras));
        } else {
          return null;
        }
        this.setState({
          fourLetterWord: updatedPalabra,
          fourLetterWords: palabras
        });
        break;
      case 'prefixSuffixRoots':
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('prefixSuffixRoot', JSON.stringify(updatedPalabra));
          localStorage.setItem('prefixSuffixRoots', JSON.stringify(palabras));
        } else {
          return null;
        }
        this.setState({
          prefixSuffixRoot: updatedPalabra,
          prefixSuffixRoots: palabras
        });
        break;
      case 'verbos':
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('verbo', JSON.stringify(updatedPalabra));
          localStorage.setItem('verbos', JSON.stringify(palabras));
        } else {
          return null;
        }
        this.setState({
          verbo: updatedPalabra,
          verbos: palabras
        });
        break;
      default:

    }
  }

  render() {
    const {
      errorMessage,
      fourLetterWord,
      fourLetterWords,
      game,
      prefixSuffixRoot,
      prefixSuffixRoots,
      showEnglish,
      showLoginForm,
      showSignUpForm,
      user,
      verbo,
      verbos
    } = this.state;
    let p = this.props.location.pathname;
    return (
      <div className="App">
        <NavBar
          fourLetterWord={ fourLetterWord }
          prefixSuffixRoot={ prefixSuffixRoot }
          onCreateGame={ this.handleCreateGame }
          onLoadBlogPosts={ this.handleLoadBlogPosts }
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
          onDeleteBlog={ this.handleDeleteBlog }
          onLoadBlogPost={ this.handleLoadBlogPost }
          onLoadBlogPosts={ this.handleLoadBlogPosts }
          onSavePost={ this.handleSavePost }
          fourLetterWord={ fourLetterWord }
          fourLetterWords={ fourLetterWords }
          prefixSuffixRoot={ prefixSuffixRoot }
          prefixSuffixRoots={ prefixSuffixRoots }
          verbo={ verbo }
          verbos={ verbos }
          onCheckFourLetterWord = { this.handleCheckFourLetterWord }
          onDelete={ this.handleDeletePalabra }
          onLoadPalabra={ this.handleLoadPalabra }
          onLoadRandomPalabra={ this.handleLoadRandomPalabra }
          showEnglish={ showEnglish }
          onShowEnglish={ () => this.setState({
            showEnglish: !showEnglish
          })}
          onSave={ this.handleSave }
          />
        {
          p === "/" &&
          <Link
            className="btn btn-default"
            to={{ pathname: "/vision" }}>
            My Vision
          </Link>
        }
        <h4 className="App-title">I Do Not Know How this Works</h4>
      </div>
    );
  }
}

export default withRouter(App);
