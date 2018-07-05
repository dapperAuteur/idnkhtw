import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
import { checkGuess } from './cowsAndBullsGame';
import GameStatus from './GameStatus';
import PropTypes from 'prop-types';
import './Game.css';

class CowsAndBulls extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    fourLetterWords: PropTypes.arrayOf(PropTypes.object),
    game: PropTypes.shape({
      attempts: PropTypes.number,
      bulls: PropTypes.number,
      cows: PropTypes.number,
      guess: PropTypes.string,
      guesses: PropTypes.arrayOf(PropTypes.string),
      message: PropTypes.string,
      score: PropTypes.number,
      userId: PropTypes.string,
      winningWord: PropTypes.string,
      won: PropTypes.bool,
      wordsToConsiderForLibrary: PropTypes.arrayOf(PropTypes.string),
    }),
    letter0: PropTypes.string,
    letter1: PropTypes.string,
    letter2: PropTypes.string,
    letter3: PropTypes.string,
    letters: PropTypes.arrayOf(PropTypes.string),
    onUpdateGame: PropTypes.func,
    randomFourLetterWord: PropTypes.func,
    saveGame: PropTypes.func
  };
  static defaultProps = {
    currentUser: {},
    fourLetterWords: [],
    game: {
      attempts: 0,
      bulls: 0,
      cows: 0,
      guess: "",
      guesses: [],
      message: "",
      score: 0,
      userId: "Guest",
      winningWord: "",
      won: false,
      wordsToConsiderForLibrary: [],
    },
    letter0: "Choose A Letter",
    letter1: "Choose A Letter",
    letter2: "Choose A Letter",
    letter3: "Choose A Letter",
    letters: [
      "Choose A Letter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentUser: props.currentUser,
      fourLetterWords: props.fourLetterWords,
      game: {
        attempts: props.attempts,
        bulls: props.bulls,
        cows: props.cows,
        guess: props.guess,
        guesses: props.guesses,
        message: props.message,
        score: props.score,
        userId: props.currentUser || "Guest",
        winningWord: props.winningWord,
        won: props.won,
        wordsToConsiderForLibrary: props.wordsToConsiderForLibrary,
      },
      letter0: "Choose A Letter",
      letter1: "Choose A Letter",
      letter2: "Choose A Letter",
      letter3: "Choose A Letter",
      letters: [
        "Choose A Letter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ],
      onUpdateGame: props.onUpdateGame,
      randomFourLetterWord: props.randomFourLetterWord,
      saveGame: props.saveGame
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let {
      fourLetterWords,
      game,
      letter0,
      letter1,
      letter2,
      letter3,
      onUpdateGame
    } = { ...this.state };
    console.log(game);
    let guess = letter0 + letter1 + letter2 + letter3;
    let currentGame = Object.assign({}, game, {
      guess
    });
    let inGame = checkGuess(fourLetterWords, guess);
    console.log(game);
    console.log(currentGame);
    onUpdateGame(currentGame, inGame);
  };

  render() {
    const {
      game,
      letter0,
      letter1,
      letter2,
      letter3,
      letters
    } = this.state;
    return (
      <div className='game'>
      <GameStatus
        game={ game } />
        <form
          className='form-letters'
          onSubmit={ this.handleSubmit }>
          <span className='form-letter'>
            <label htmlFor='letter0'>0</label>
            <select
              id='letter0'
              className='letterSpan'
              key='letter0'
              name='letter0'
              value={ letter0 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter1'>1</label>
            <select
              id='letter1'
              className='letterSpan'
              key='letter1'
              name='letter1'
              value={ letter1 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter2'>2</label>
            <select
              id='letter2'
              className='letterSpan'
              key='letter2'
              name='letter2'
              value={ letter2 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <span className='form-letter'>
            <label htmlFor='letter3'>3</label>
            <select
              id='letter3'
              className='letterSpan'
              key='letter3'
              name='letter3'
              value={ letter3 }
              onChange={ this.handleChange }>
              { letters.map((( letter, i ) => (
                <option key={ i } value={ letter }>{ letter }</option>
              )))}
            </select>
          </span>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    attempts: state.cowsAndBullsGameReducer.attempts,
    bulls: state.cowsAndBullsGameReducer.bulls,
    cows: state.cowsAndBullsGameReducer.cows,
    fourLetterWords: state.fourLetterWordReducer.fourLetterWords,
    guess: state.cowsAndBullsGameReducer.guess,
    guesses: state.cowsAndBullsGameReducer.guesses,
    message: state.cowsAndBullsGameReducer.message,
    score: state.cowsAndBullsGameReducer.score,
    winningWord: state.cowsAndBullsGameReducer.winningWord,
    won: state.cowsAndBullsGameReducer.won,
    wordsToConsiderForLibrary: state.cowsAndBullsGameReducer.wordToConsiderForLibrary
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewCowsAndBullsGame: () => dispatch(actions.createNewCowsAndBullsGame()),
    onUpdateGame: (currentGame, inGame) => dispatch(actions.updateCowsAndBullsGame(currentGame, inGame)),
    randomFourLetterWord: () => dispatch(actions.randomFourLetterWord())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CowsAndBulls);
