import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.css';

class FourLetterWordGame extends Component {
  constructor(props) {
    super(props);
    // pull game from state and add here;
    let fourLetterWord = props.data.props.fourLetterWord;
    let game = props.data.props.game;
    game.winning_word = fourLetterWord;
    const onLoadRandomPalabra = props.data.onLoadRandomPalabra;
    // const onCheckFourLetterWord = props.data.onCheckFourLetterWord;
    this.state = {
      p: 'games/',
      game,
      letter0: '',
      letter1: '',
      letter2: '',
      letter3: '',
      letters: [
        "Choose A Letter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateGame = this.handleUpdateGame.bind(this);
  }

  async handleUpdateGame(){
    let { attempts, bulls, cows, guess, guesses, message, score, winning_word, won, word_to_consider_for_library } = this.state.game;
    const { letter0, letter1, letter2, letter3 } = this.state;
    guess = letter0 + letter1 + letter2 + letter3;
    // if game has userId, send data to server, else keep in localStorage
    attempts++;
    // check & set cows & bulls, won, word_to_consider_for_library
    guesses.push(guess);
    let game = {
      attempts,
      bulls,
      cows,
      guess,
      guesses,
      message,
      name: 'FourLetterWordGame',
      score,
      winning_word,
      won,
      word_to_consider_for_library
    }

    this.setState({
      game
    })
  }

  handleChange(e){

    let game = [...this.state.game];


    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.handleUpdateGame();
    let p = this.state.p;

    let { ...game } = { ...this.state.game };
    if (this.state.game.winning_word === undefined) {
    }
    this.props.data.onCheckFourLetterWord(game);
  }

  render() {
    const { game, letter0, letter1,letter2, letter3, letters } = this.state;


    return (
      <div className='word-form-container'>
        <form className='form-letters' onSubmit={ this.handleSubmit }>
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
}

FourLetterWordGame.propTypes = {
  _id: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  game: PropTypes.shape({
    attempts: PropTypes.number,
    bulls: PropTypes.number,
    cows: PropTypes.number,
    guess: PropTypes.string,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string,
    userId: PropTypes.string.isRequired,
    score: PropTypes.number,
    winning_word: PropTypes.shape({
      0: PropTypes.string.isRequired,
      1: PropTypes.string.isRequired,
      2: PropTypes.string.isRequired,
      3: PropTypes.string.isRequired
    }),
    won: PropTypes.bool,
    word_to_consider_for_library: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  letter0: PropTypes.string.isRequired,
  letter1: PropTypes.string.isRequired,
  letter2: PropTypes.string.isRequired,
  letter3: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired
}

FourLetterWordGame.defaultProps = {
  onSave() {},
  _id: '',
  p: 'games/',
  game: PropTypes.shape({
    attempts: 0,
    bulls: 0,
    cows: 0,
    guess: '',
    guesses: [],
    name: 'FourLetterWordGame',
    userId: '',
    score: 0,
    winning_word: {},
    won: false,
    word_to_consider_for_library: []
  }),
  letter0: 'F',
  letter1: 'A',
  letter2: 'R',
  letter3: 'T',
  letters: [
    "Choose A Letter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

export default FourLetterWordGame;
