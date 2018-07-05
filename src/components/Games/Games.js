import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions/index';
import './Game.css';

const Games = (props) => {
  console.log(props);
  console.log(props.loadCowsAndBullsGame);
  let {
    loadCowsAndBullsGame,
    fourLetterWord,
    guesses
  } = props;

  return (
    <div className="games">
      <h2>Games</h2>
      <Link
        to={{ pathname: "games/four-letter-word-game" }}
        className="btn btn-default"
        onClick={ () => loadCowsAndBullsGame(fourLetterWord, guesses) }>
        Play Cows And Bulls
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    fourLetterWord: state.fourLetterWordReducer.fourLetterWord,
    guesses: state.cowsAndBullsGameReducer.guesses,
    score: state.cowsAndBullsGameReducer.score,
    won: state.cowsAndBullsGameReducer.won,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCowsAndBullsGame: (fourLetterWord, guesses) => dispatch(actions.loadCowsAndBullsGame(fourLetterWord, guesses)),
    // onNewCowsAndBullsGame: () => dispatch(actions.createNewCowsAndBullsGame()),
    randomFourLetterWord: () => dispatch(actions.randomFourLetterWord())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
