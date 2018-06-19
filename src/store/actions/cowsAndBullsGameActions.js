import * as actionTypes from './actionTypes';
// dev server
const APIURL = '//localhost:8081/api/ver0001/four-letter-words/';
// deployed server on heroku
// const APIURL = '//mbl-express-api.herokuapp.com/api/ver0001/four-letter-words/';

export const createNewCowsAndBullsGame = () => {
  console.log("createNewCowsAndBullsGame");
  return {
    type: actionTypes.CREATE_NEW_COWS_AND_BULLS_GAME
  }
}

export const setGuess = (game) => {
  console.log(game);
  return {
    type: actionTypes.SET_GUESS,
    game
  }
};

export const setGame = (game) => {
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

export const userDidNotWin = (game) => {
  console.log(game);
  return {
    type: actionTypes.USER_DID_NOT_WIN,
    game
  }
};

export const wordNotInGame = (game) => {
  console.log(game);
  return {
    type: actionTypes.WORD_NOT_IN_GAME,
    game
  }
};

export const updateCowsAndBullsGame = (game) => {
  // add currentUser to game object
  console.log(game);
  let {
    attempts,
    bulls,
    cows,
    guess,
    guesses,
    message,
    score,
    winning_word,
    won,
    word_to_consider_for_library
  } = game;
  attempts++;
  bulls = 0;
  cows = 0;
  guess = guesses.slice(-1);
  guess = guess[0].toLowerCase();
  let word = winning_word.word;
  let currentGuess = this.state.fourLetterWords.filter(word => word.word === guess);
  if (currentGuess.length === 0) {
    word_to_consider_for_library.push(guess);
    message = `${guess} is NOT word in our library. We'll consider adding it to the library. You lose 200 points`;
    score -= 200;
    word_to_consider_for_library.concat(guess);
    guesses.concat(guess);
    let userGuessNotInGame = {
      attempts,
      bulls,
      cows,
      guess,
      guesses,
      message,
      score,
      word_to_consider_for_library
    };
    return wordNotInGame(userGuessNotInGame);
  } else if (guess === word) {
    bulls = 4;
    message = 'You Won!!!';
    score += 500;
    won = true;
    guesses.concat(guess);
    let userDidWinGame = {
      attempts,
      bulls,
      cows,
      guess,
      guesses,
      message,
      score,
      won,
    };
    return userDidWin(userDidWinGame);
  } else {
    let arr_guess = guess.split("");
    let arr_word = word.split("");
    message = `${guess} is NOT the Word`;
    for (var i = 0; i < arr_guess.length; i++) {
      for (var j = 0; j < arr_word.length; j++) {
        if (arr_guess[i] === arr_word[j]) {
          if (i === j) {
            bulls++;
            score += 100;
            won = false;
            arr_guess[i] = "0";
            arr_word[j] = "1";
          }
        }
        if (arr_guess[i] === arr_word[j]) {
          cows++;
          score += 50;
          won = false;
          arr_guess[i] = "0";
          arr_word[j] = "1";
        }
      }
    }
    guesses.concat(guess);
    message = `You didn't win yet.`
    won = false;
    let userDidNotWinGame = {
      attempts,
      bulls,
      cows,
      guess,
      guesses,
      message,
      score,
      won
    };
    return userDidNotWin(userDidNotWinGame);
  }
  // return userDidNotWin(userDidNotWinGame);
}

export const setError = (err) => {
  return {
    type: actionTypes.SET_ERROR,
    errorMessage: err
  }
}
