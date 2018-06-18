import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import shuffle from 'shuffle-array';
import * as actions from './../store/actions/index';
import * as apiCalls from './../actions/api';
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
    console.log(props);
    console.log(this.props);
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
    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.handleCheckFourLetterWord = this.handleCheckFourLetterWord.bind(this);
    this.handleDeleteBlog = this.handleDeleteBlog.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.handleLoadBlogPost = this.handleLoadBlogPost.bind(this);
    this.handleLoadTag = this.handleLoadTag.bind(this);
    this.handleLoadBlogPosts = this.handleLoadBlogPosts.bind(this);
    this.handleLoadTags = this.handleLoadTags.bind(this);
    this.handleSavePost = this.handleSavePost.bind(this);
    this.handleSaveTag = this.handleSaveTag.bind(this);
  }

  componentDidMount() {
    // this.handleLoadPalabras();
    // this.handleLoadBlogPosts();
    console.log(this.props);
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
          onCreateGame={ this.handleCreateGame }
          onLoadBlogPosts={ this.handleLoadBlogPosts }
          onLoadRandomPalabra={ this.handleLoadRandomPalabra }
          onLogout={ this.handleLogOut }
          />
        <ErrorMessages
          errorMessage={ errorMessage }
          props={ this.state } />
        { showLoginForm || showSignUpForm ?
          <AuthForm
            onClose={ this.handleOnClose }
            onShowLoginForm={ this.onClickShowLoginForm }
            onShowSignUpForm={ this.onClickShowSignUpForm }
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
          onCheckFourLetterWord = { this.handleCheckFourLetterWord }
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

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    showLoginForm: state.authReducer.showLoginForm,
    showSignUpForm: state.authReducer.showSignUpForm
  }
}

export default withRouter(connect(mapStateToProps)(App));
