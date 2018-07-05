import * as actionTypes from './actionTypes';
// import bcrypt from 'bcrypt';
import shuffle from 'shuffle-array';
import fourLetterWordReducer from './../reducers/fourLetterWordReducer';
// dev server
const APIURL = '//localhost:8081/api/ver0001/four-letter-words/';
// deployed server on heroku
// const APIURL = '//mbl-express-api.herokuapp.com/api/ver0001/four-letter-words/';

// let fourLetterWords = getState().fourLetterWords;
// console.log(fourLetterWords);

export const loadCowsAndBullsGame = (fourLetterWord, guesses) => {
  console.log(fourLetterWord);
  console.log(guesses);
  console.log("createNewCowsAndBullsGame");
  // check if guesses has length > 0
  if (guesses.length > 0) {
    return currentCowsAndBullsGame();
  } else {
    return newCowsAndBullsGame(fourLetterWord);
  }
}

export const currentCowsAndBullsGame = () => {
  return {
    type: actionTypes.CURRENT_COWS_AND_BULLS_GAME
  }
}

export const newCowsAndBullsGame = (fourLetterWord) => {
  return {
    type: actionTypes.NEW_COWS_AND_BULLS_GAME,
    fourLetterWord
  }
}

export const userDidWin = (game) => {
  console.log(game);
  return {
    type: actionTypes.USER_DID_WIN,
    game
  }
};

export const userDidNotWin = (userDidNotWinGame) => {
  console.log(userDidNotWinGame);
  return {
    type: actionTypes.USER_DID_NOT_WIN,
    userDidNotWinGame
  }
};

export const wordNotInGame = (currentGame) => {
  console.log(currentGame);
  return {
    type: actionTypes.WORD_NOT_IN_GAME,
    currentGame
  }
};

const isGuessWinningWord = currentGame => {
  // unhash winningWordId and set to winningWord
  // get ga
  let guess = currentGame.guess;

  let winningWord = currentGame.winningWord;
  if (guess === winningWord) {
    userDidWin(currentGame);
  } else {
    return guessNotWinningWord(currentGame);
  }
}

const guessNotWinningWord = (currentGame) => {
  let bulls, cows;
  let winningWord = currentGame.winningWord;
  let guess = currentGame.guess;
  let arr_guess = guess.split("");
  let arr_word = winningWord.split("");
  let message = `${guess} is NOT the Word`;
  let scored = 0;
  for (var i = 0; i < arr_guess.length; i++) {
    for (var j = 0; j < arr_word.length; j++) {
      if (arr_guess[i] === arr_word[j]) {
        if (i === j) {
          bulls++;
          scored += 100;
          arr_guess[i] = "0";
          arr_word[j] = "1";
        }
      }
      if (arr_guess[i] === arr_word[j]) {
        cows++;
        scored += 50;
        arr_guess[i] = "0";
        arr_word[j] = "1";
      }
    }
  }
  let userDidNotWinGame = {
    cows,
    bulls,
    guess,
    scored
  };
  return userDidNotWin(userDidNotWinGame);
}

const updateCowsAndBullsGame = (currentGame, inGame) => {
  if (inGame) {
    return isGuessWinningWord(currentGame);
  } else {
    return wordNotInGame(currentGame);
  }
}

export const setCowsAndBullsError = (err) => {
  return {
    type: actionTypes.SET_COWS_AND_BULLS_ERROR,
    errorMessage: err
  }
}
