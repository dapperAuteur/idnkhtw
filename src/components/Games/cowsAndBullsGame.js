import shuffle from 'shuffle-array';

export const checkGuess = (fourLetterWords, guess) => {
  let guessLowerCase = lowerCaseGuess(guess);
  let inGame = isGuessInGame(fourLetterWords, guessLowerCase);
  return inGame;
}

const lowerCaseGuess = (guess) => {
  let guessLowerCase = guess.toLowerCase();
  console.log(guessLowerCase);
  return guessLowerCase;
}

const isGuessInGame = (fourLetterWords, guessLowerCase) => {
  // debugger;
  let currentGuess = fourLetterWords.filter(word => word.word === guessLowerCase);
  if (currentGuess === 0) {
    return false;
  } else {
    return true;
  }
}
