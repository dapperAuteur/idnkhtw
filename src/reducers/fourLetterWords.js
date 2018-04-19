// action creators
import shuffle from 'shuffle-array';
import four_letter_words from './../data/four_letter_words';

export const fourLetterWord = (state = four_letter_words, action) => {
  switch (action.type) {
    case 'GET_RANDOM_FOUR_LETTER_WORD':
      console.log("GET_RANDOM_FOUR_LETTER_WORD");
      console.log(state);
      console.log(four_letter_words);
      return shuffle.pick(four_letter_words, [{ 'copy': true }, { 'picks': 1 }]);
    default:
      return shuffle.pick(four_letter_words, [{ 'copy': true }, { 'picks': 1 }]);
      // return state;
  }
}

export const fourLetterWords = (state = four_letter_words, action) => {
  switch (action.type) {
    case 'GET_FOUR_LETTER_WORDS':
      console.log("GET_FOUR_LETTER_WORDS");
      return [...state];
    default:
      return state;
  }
}
