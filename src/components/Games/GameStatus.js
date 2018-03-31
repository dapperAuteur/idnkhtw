import React from 'react';
import PropTypes from 'prop-types';
import './GameStatus.css';

const GameStatus = (props) => {
  console.log(props);
  const { game } = { ...props };
  let { attempts, bulls, cows, guess, message, score, won } = { ...game };
  console.log(game);

  return (
    <div className="gameStatus">
      <span className='gameStat'>Last Guess: { guess }</span>
      <span className="gameStat">Message: { message }</span>
      <span className="gameStat">Points { score }</span>
      <span className="gameStat">Guesses { attempts }</span>
      <span className="gameStat">Cows { cows }</span>
      <span className="gameStat">Bulls { bulls }</span>
      <span className="gameStat">Won { won }</span>
    </div>
  )
}

GameStatus.propTypes = {
  game: PropTypes.shape({
    attempts: PropTypes.number,
    bulls: PropTypes.number,
    cows: PropTypes.number,
    guess: PropTypes.string,
    guesses: PropTypes.arrayOf(PropTypes.string),
    userId: PropTypes.string,
    score: PropTypes.number,
    won: PropTypes.bool,
  })
}

GameStatus.defaultProps = {
  game: {
    attempts: 0,
    bulls: 0,
    cows: 0,
    guess: '',
    guesses: ["full", "acme", "tool"],
    score: 0,
    won: false,
  }
}

export default GameStatus;
