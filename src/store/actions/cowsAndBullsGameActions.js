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


const getFourLetterWords = () => {
  return (dispatch, getState) => {
    let fourLetterWords = getState().fourLetterWordReducer.fourLetterWords;
  }
}

const FOUR_LETTER_WORDS = getFourLetterWords();
// console.log(FOUR_LETTER_WORDS);

export const createNewCowsAndBullsGame = (fourLetterWords) => {
  console.log(fourLetterWords);
  console.log("createNewCowsAndBullsGame");
  // let randomWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
  // let winningWordId = randomWord._id;
  // console.log(winningWordId);
  // let encryptedWinningWordId = winningWordId;
  // // let salt = bcrypt.genSaltSync(10);
  // // let encryptedWinningWordId = bcrypt.hashSync(winningWordId, salt);
  // // console.log(encryptedWinningWordId);
  //
  // return {
  //   type: actionTypes.CREATE_NEW_COWS_AND_BULLS_GAME,
  //   encryptedWinningWordId
  // }
}

const getWinningWord = game => {
  let winningWord = FOUR_LETTER_WORDS.filter(word => word._id === game.winningWordId);
  return winningWord;
}

export const setGuess = (guess) => {
  return {
    type: actionTypes.SET_GUESS,
    guess
  }
};

export const setGame = (game) => {
  // use bcrypt to encrypt random word from list on current game level;
  // store in state, game, and localStorage
  console.log(game);
  return {
    type: actionTypes.SET_GAME,
    game
  }
};

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

export const wordNotInGame = (guess) => {
  console.log(guess);
  return {
    type: actionTypes.WORD_NOT_IN_GAME,
    guess
  }
};

const isGuessInGame = (guess) => {
  let guessLowerCase = guess.toLowerCase();
  console.log(guessLowerCase);
  let currentGuess = FOUR_LETTER_WORDS.filter(word => word.word === guessLowerCase);
  if (currentGuess === 0) {
    return wordNotInGame(guess);
  } else {
    isGuessWinningWord(guess);
  }
}

const isGuessWinningWord = game => {
  // unhash winningWordId and set to winningWord
  // get ga
  let guess = game.guess;

  let winningWord = getWinningWord(game);
  if (guess === winningWord.word) {
    let bulls = 4;
    let message = 'You Won!!!';
    let score = 500;
    let won = true;
    let userDidWinGame = {
      bulls,
      cows: 0,
      guess,
      message,
      won,
    };
    return userDidWin(userDidWinGame);
  } else {
    return guessNotWinningWord(guess);
  }
}

const guessNotWinningWord = (game) => {
  let bulls, cows;
  let winningWord = getWinningWord(game);
  let guess = game.guess;
  let arr_guess = guess.split("");
  let arr_word = winningWord.word.split("");
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

// const updateCowsAndBullsGame = (guess) => {
//   // add currentUser to game object
//   console.log(guess);
//   let bulls = 0;
//   let cows = 0;
//   setGuess(guess);
//   isGuessInGame(guess);
//
//
//
//
//
//   {
//     let arr_guess = guess.split("");
//     let arr_word = word.split("");
//     message = `${guess} is NOT the Word`;
//     for (var i = 0; i < arr_guess.length; i++) {
//       for (var j = 0; j < arr_word.length; j++) {
//         if (arr_guess[i] === arr_word[j]) {
//           if (i === j) {
//             bulls++;
//             score += 100;
//             won = false;
//             arr_guess[i] = "0";
//             arr_word[j] = "1";
//           }
//         }
//         if (arr_guess[i] === arr_word[j]) {
//           cows++;
//           score += 50;
//           won = false;
//           arr_guess[i] = "0";
//           arr_word[j] = "1";
//         }
//       }
//     }
//     guesses.concat(guess);
//     message = `You didn't win yet.`
//     won = false;
//     let userDidNotWinGame = {
//       attempts,
//       bulls,
//       cows,
//       guess,
//       guesses,
//       message,
//       score,
//       won
//     };
//     return userDidNotWin(userDidNotWinGame);
//   }
//   // return userDidNotWin(userDidNotWinGame);
// }

export const setError = (err) => {
  return {
    type: actionTypes.SET_ERROR,
    errorMessage: err
  }
}
