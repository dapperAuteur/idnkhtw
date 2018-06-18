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
  winning_word: {},
  won: false,
  word_to_consider_for_library: []
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
      winning_word,
      won,
      word_to_consider_for_library;
  switch (action.type) {
    case actionTypes.CREATE_NEW_COWS_AND_BULLS_GAME:
      let randomFourLetterWords = [...state.fourLetterWords];
      winning_word = shuffle.pick(randomFOUR_LETTER_WORDs, [{ 'copy': true }, { 'picks': 1 }]);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
      } else {
        return null;
      }
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
        winning_word,
        won: false,
        word_to_consider_for_library: []
      })
    case actionTypes.SET_GUESS:
    case actionTypes.SET_GAME:
    case actionTypes.SET_ERROR:
    case actionTypes.USER_DID_WIN:
      let userDidWinGame = action.userDidWinGame;
      let {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        won
      } = userDidWinGame;
      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        won
      });
    case actionTypes.USER_DID_NOT_WIN:
      let userDidNotWinGame = action.userDidNotWinGame;
      let {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        won
      } = userDidNotWinGame;
      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        won
      });
    case actionTypes.WORD_NOT_IN_GAME:
      let userGuessNotInGame = action.userGuessNotInGame;
      let {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        word_to_consider_for_library
      } = userGuessNotInGame;
      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses,
        message,
        score,
        word_to_consider_for_library
      })
    default:
    return state;

  }
}

export default cowsAndBullsGameReducer
