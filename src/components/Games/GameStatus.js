import React from 'react';
import PropTypes from 'prop-types';
import './GameStatus.css';

const GameStatus = (props) => {
  const { game } = { ...props };
  let {
    attempts,
    bulls,
    cows,
    currentUserId,
    guess,
    message,
    score,
    winningWord,
    won
  } = { ...game };

  if (won) {
    return (
      <div className="gameStatus">
        <span className="gameStat">Message: { message }</span>
        <span className="gameStat">Points { score }</span>
        <span className="gameStat">Guesses { attempts }</span>
        <span className="gameStat">You Won With { winningWord }!</span>
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

export default GameStatus;
