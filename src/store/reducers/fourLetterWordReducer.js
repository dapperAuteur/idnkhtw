import { combineReducers } from 'redux';
import shuffle from 'shuffle-array';
import {
  CREATE_FOUR_LETTER_WORD,
  DELETE_FOUR_LETTER_WORD,
  GET_FOUR_LETTER_WORD,
  GET_FOUR_LETTER_WORDS,
  GET_RANDOM_FOUR_LETTER_WORD,
  UPDATE_FOUR_LETTER_WORD
} from './../../constants/ActionTypes';

const fourLetterWord = (state, action) => {
  switch (action.type) {
    case CREATE_FOUR_LETTER_WORD:
      return [...state.fourLetterWords, fourLetterWord];
      break;
    case GET_FOUR_LETTER_WORD:
      return state.fourLetterWords.filter(v => v._id === fourLetterWord._id);
      break;
    case GET_RANDOM_FOUR_LETTER_WORD:
      let fourLetterWord = shuffle.pick(fourLetterWords, [{ 'copy': true }, { 'picks': 1 }]);
      return fourLetterWord;
      break;
    default:
      return fourLetterWord;
  }
}
const fourLetterWords = (state, action) => {
  switch (action.type) {
    case DELETE_FOUR_LETTER_WORD:
      return state.fourLetterWords.filter(v => v._id !== fourLetterWord._id);
      break;
    case GET_FOUR_LETTER_WORDS:
      return state.fourLetterWords;
      break;
    case UPDATE_FOUR_LETTER_WORD:
      let fourLetterWords = state.fourLetterWords.map(f => (f._id === fourLetterWord._id) ? {
        ...f,
        ...fourLetterWord } :
      f);
      return fourLetterWords;
      break;
    default:
    return {
      getFourLetterWord: fourLetterWord(state.fourLetterWord, action),
      getFourLetterWords: fourLetterWords(state.fourLetterWords, action)
    };
  }
}

export const getFourLetterWord = (state, fourLetterWordId) => state.fourLetterWord[fourLetterWordId] || {};

export const getFourLetterWords = (state) => state.fourLetterWords || [];

export default fourLetterWords;
