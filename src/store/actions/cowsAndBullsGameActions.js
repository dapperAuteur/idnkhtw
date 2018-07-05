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
    console.log("length > 0");
    return currentCowsAndBullsGame();
  } else {
    console.log("length 0");
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

export const updateCowsAndBullsGame = (currentGame, guessChecked) => {
  console.log(currentGame, guessChecked);
  let {
    guessLowerCase,
    inGame
  } = { ...guessChecked };
  if (inGame) {
    return isGuessWinningWord(currentGame, guessLowerCase);
  } else {
    return wordNotInGame(currentGame, guessLowerCase);
  }
}

const isGuessWinningWord = (currentGame, guessLowerCase) => {
  // unhash winningWordId and set to winningWord
  // get ga
  let guess = guessLowerCase;
  console.log(currentGame);

  let winningWord = currentGame.winningWord;
  console.log(winningWord);
  if (guess === winningWord) {
    return userDidWin(currentGame);
  } else {
    return guessNotWinningWord(currentGame, guessLowerCase);
  }
}

export const wordNotInGame = (currentGame, guessLowerCase) => {
  console.log(currentGame);
  return {
    type: actionTypes.WORD_NOT_IN_GAME,
    currentGame,
    guessLowerCase
  }
};

const guessNotWinningWord = (currentGame, guessLowerCase) => {
  console.log(currentGame);
  let bulls = 0;
  let cows = 0;
  let winningWord = currentGame.winningWord;
  let guess = guessLowerCase;
  console.log(guess);
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
    message,
    scored
  };
  console.log(userDidNotWinGame);
  return userDidNotWin(userDidNotWinGame);
}

export const userDidWin = (currentGame) => {
  console.log(currentGame);
  return {
    type: actionTypes.USER_DID_WIN,
    currentGame
  }
};

export const userDidNotWin = (userDidNotWinGame) => {
  console.log(userDidNotWinGame);
  return {
    type: actionTypes.USER_DID_NOT_WIN,
    userDidNotWinGame
  }
};

export const setCowsAndBullsError = (err) => {
  console.log(err);
  return {
    type: actionTypes.SET_COWS_AND_BULLS_ERROR,
    errorMessage: err
  }
}
