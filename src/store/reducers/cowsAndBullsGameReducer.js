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
  currentUserId: "Guest",
  winningWord: {},
  won: false,
  wordToConsiderForLibrary: []
}

const cowsAndBullsGameReducer = (state = initialState, action) => {
  // console.log(state);
  let {
    attempts,
    bulls,
    cows,
    currentUserId,
    error,
    errorMessage,
    guess,
    guesses,
    isFetching,
    message,
    score,
    winningWord,
    won,
    wordToConsiderForLibrary
  } = { ...state };
  let newGuesses = [];
  // console.log(newGuesses);
  switch (action.type) {
    // case actionTypes.CONFIRM_NEW_GAME:
    //   game = state.game;


    case actionTypes.NEW_COWS_AND_BULLS_GAME:
      let winningWord = action.fourLetterWord.word;
      if (typeof(Storage) !== "undefined") {
        // if (localStorage.hasOwnProperty('fourLetterWord')) {
        //   winningWord = JSON.parse(localStorage.getItem('fourLetterWord'));
        // }
        if (localStorage.hasOwnProperty('currentUser')) {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          currentUserId = currentUser.currentUserId;
        } else {
          currentUserId = state.userId;
        }
        let game = Object.assign({}, state, {
          currentUserId,
          winningWord
        });
        localStorage.setItem('game', JSON.stringify(game));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        currentUserId,
        winningWord
      });
    case actionTypes.SET_COWS_AND_BULLS_ERROR:
      let errorMessage = action.errorMessage;
      // console.log(errorMessage);
      // console.log(action);
      return Object.assign({}, state, {
        error: true,
        errorMessage,
        isFetching: false
      })
    case actionTypes.USER_DID_WIN:
      let currentGame = action.currentGame;
      attempts = state.attempts++;
      bulls = 4;
      cows = 0;
      guess = currentGame.guess;
      message = 'You Won!!!';
      score = score + 500;
      won = true;
      let newGuesses = guesses.concat(guess);
      // console.log(guesses);
      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses: newGuesses,
        message,
        score,
        won
      });
    case actionTypes.USER_DID_NOT_WIN:
      // console.log(action);
      let {
        cows,
        bulls,
        guess,
        message,
        scored
      } = action.userDidNotWinGame;
      // console.log(message);
      ({
        attempts,
        guesses,
        score
      } = { ...state });
      // console.log(state);
      attempts = state.attempts++;
      newGuesses = guesses.concat(guess);
      let newScore = score + scored;

      return Object.assign({}, state, {
        attempts,
        bulls,
        cows,
        guess,
        guesses: newGuesses,
        message,
        score: newScore
      });
    case actionTypes.WORD_NOT_IN_GAME:

      attempts = state.attempts++;
      guess = action.guessLowerCase;
      guesses = state.guesses;
      newGuesses = guesses.concat(guess);
      message = `${guess} is NOT in our library. We'll consider adding it to the library. You lose 200 points`;
      score = state.score - 200;
      let considerWords = wordToConsiderForLibrary.concat(guess);

      return Object.assign({}, state, {
        attempts,
        bulls: 0,
        cows: 0,
        guess,
        guesses: newGuesses,
        message,
        score,
        wordToConsiderForLibrary: considerWords
      })
    default:
    return state;

  }
}

export default cowsAndBullsGameReducer;
