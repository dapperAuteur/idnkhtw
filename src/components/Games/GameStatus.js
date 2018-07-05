import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './GameStatus.css';

const GameStatus = (props) => {
  let {
    attempts,
    bulls,
    cows,
    currentUser,
    currentUserId,
    guess,
    message,
    score,
    won
  } = { ...props };

  if (won) {
    return (
      <div className="gameStatus">
        <span className="gameStat">Points { score }</span>
        <span className="gameStat">Cows { cows }</span>
        <span className="gameStat">Bulls { bulls }</span>
        <span className="gameStat">Guesses { attempts }</span>
        <span className="gameStat">You Won With { guess }!</span>
      </div>
    )
  } else {
    return (
      <div className="gameStatus">
        { message.length > 0 ? <span className='gameStat'>Last Guess: { guess }</span> : null }
        { message.length > 0 ? <span className="gameStat">Message: { message }</span> : null }
        <span className="gameStat">Points { score }</span>
        <span className="gameStat">Guesses { attempts }</span>
        <span className="gameStat">Cows { cows }</span>
        <span className="gameStat">Bulls { bulls }</span>
      </div>
    )
  }
}

GameStatus.propTypes = {
  currentUser: PropTypes.object,
  game: PropTypes.shape({
    attempts: PropTypes.number,
    bulls: PropTypes.number,
    cows: PropTypes.number,
    guess: PropTypes.string,
    guesses: PropTypes.arrayOf(PropTypes.string),
    currentUserId: PropTypes.string,
    score: PropTypes.number,
    won: PropTypes.bool,
  })
}

GameStatus.defaultProps = {
  currentUser: {},
  game: {
    attempts: 0,
    bulls: 0,
    cows: 0,
    currentUserId: "Guest",
    guess: "",
    guesses: [],
    score: 0,
    won: false,
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    currentUserId: state.cowsAndBullsGameReducer.currentUserId,
    attempts: state.cowsAndBullsGameReducer.attempts,
    bulls: state.cowsAndBullsGameReducer.bulls,
    cows: state.cowsAndBullsGameReducer.cows,
    guess: state.cowsAndBullsGameReducer.guess,
    message: state.cowsAndBullsGameReducer.message,
    score: state.cowsAndBullsGameReducer.score,
    won: state.cowsAndBullsGameReducer.won,
    wordsToConsiderForLibrary: state.cowsAndBullsGameReducer.wordToConsiderForLibrary
  }
}

export default connect(mapStateToProps)(GameStatus);
