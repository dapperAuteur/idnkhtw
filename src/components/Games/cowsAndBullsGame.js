import shuffle from 'shuffle-array';

export const checkGuess = (fourLetterWords, guess) => {
  let guessLowerCase = lowerCaseGuess(guess);
  let inGame = isGuessInGame(fourLetterWords, guessLowerCase);
  let guessChecked = { guessLowerCase, inGame };
  return guessChecked;
}

const lowerCaseGuess = (guess) => {
  let guessLowerCase = guess.toLowerCase();
  console.log(guessLowerCase);
  return guessLowerCase;
}

const isGuessInGame = (fourLetterWords, guessLowerCase) => {
  console.log("isGuessInGame");
  let currentGuess = fourLetterWords.filter(word => word.word === guessLowerCase);
  console.log(currentGuess);
  if (currentGuess.length === 0) {
    return false;
  } else {
    return true;
  }
}
