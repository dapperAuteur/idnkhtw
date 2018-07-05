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
  let attempts,
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
      wordToConsiderForLibrary;
  switch (action.type) {
    // case actionTypes.CONFIRM_NEW_GAME:
    //   game = state.game;


    case actionTypes.CREATE_NEW_COWS_AND_BULLS_GAME:
      // let winningWord = action.encryptedWinningWordId;
      if (typeof(Storage) !== "undefined") {
        if (localStorage.hasOwnProperty('fourLetterWord')) {
          winningWord = JSON.parse(localStorage.getItem('fourLetterWord'));
        }
        if (localStorage.hasOwnProperty('currentUser')) {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          currentUserId = currentUser.currentUserId;
        } else {
          currentUserId = state.userId;
        }
        let game = Object.assign({}, state, {
          currentUserId
        });
        localStorage.setItem('game', JSON.stringify(game));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        currentUserId,
        winningWord
      });
    case actionTypes.SET_GUESS:
      guess = action.guess;
      return Object.assign({}, state, {
        guess
      })
    case actionTypes.SET_GAME:
       ({
         attempts,
         bulls,
         cows,
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
       } = { ...action.game });
     let game = { ...action.game };
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('game', JSON.stringify(game));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        attempts,
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
        wordToConsiderForLibrary
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
