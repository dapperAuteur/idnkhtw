import * as actionTypes from './../actions/actionTypes';
import shuffle from 'shuffle-array';

const initialState = {
  attempts: 0,
  bulls: 0,
  cows: 0,
  error: false,
  errorMessage: {},
  guess: "",
  guesses: [],
  isFetching: true,
  message: "",
  score: 0,
  winningWord: {},
  won: false,
  wordToConsiderForLibrary: []
}

const cowsAndBullsGameReducer = (state = initialState, action) => {
  let attempts,
      bulls,
      cows,
      error,
      errorMessage,
      game,
      guess,
      guesses,
      isFetching,
      message,
      score,
      winningWord,
      won,
      wordToConsiderForLibrary;
  switch (action.type) {
    // case actionTypes.CONFIRM_NEW_GAME:
    //   game = state.game;


    case actionTypes.CREATE_NEW_COWS_AND_BULLS_GAME:
      let winningWord = action.encryptedWinningWordId
      return Object.assign({}, state, {
        attempts: 0,
        bulls: 0,
        cows: 0,
        error: false,
        errorMessage: {},
        guess: '',
        guesses: [],
        message: '',
        score: 0,
        winningWord,
        won: false,
        wordToConsiderForLibrary: []
      })
    case actionTypes.SET_GUESS:
      guess = action.guess;
      return Object.assign({}, state, {
        guess
      })
    case actionTypes.SET_GAME:
      game = { ...action.game };
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('game', JSON.stringify(game));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        attempts: action.attempts,
        bulls: action.bulls,
        cows: action.cows,
        error: action.error,
        errorMessage: action.errorMessage,
        game: action.game,
        guess: action.guess,
        guesses: action.guesses,
        isFetching: action.isFetching,
        message: action.message,
        score: action.score,
        winningWord: action.winningWord,
        won: action.won,
        wordToConsiderForLibrary: action.wordToConsiderForLibrary
      });
    case actionTypes.SET_COWS_AND_BULLS_ERROR:
      let errorMessage = action.errorMessage;
      console.log(errorMessage);
      console.log(action);
      return Object.assign({}, state, {
        error: true,
        errorMessage,
        isFetching: false
      })
    case actionTypes.USER_DID_WIN:
      let userDidWinGame = action.userDidWinGame;
      attempts = state.attempts++;
      ({
        bulls,
        cows,
        guess,
        message,
        won
      } = { userDidWinGame });
      ({
        guesses,
        score
      } = { state });
      guesses.concat(guess);
      return Object.assign({}, state, {
        attempts,
        bulls,
        guess,
        guesses,
        message,
        score,
        won
      });
    case actionTypes.USER_DID_NOT_WIN:
      let {
        cows,
        bulls,
        guess,
        scored
      } = action.userDidNotWinGame;
      ({
        attempts,
        guesses,
        score
      } = { state });
      guesses.concat(guess);
      let newScore = score + scored;

      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score: newScore
      });
    case actionTypes.WORD_NOT_IN_GAME:
      attempts = state.attempts++;
      guess = action.guess;
      guesses = state.guesses;
      guesses.concat(guess);
      message = `${guess} is NOT in our library. We'll consider adding it to the library. You lose 200 points`;
      score = state.score - 200;
      wordToConsiderForLibrary.concat(guess);

      return Object.assign({}, state, {
        attempts,
        guess,
        guesses,
        message,
        score,
        wordToConsiderForLibrary
      })
    default:
    return state;

  }
}

export default cowsAndBullsGameReducer;
