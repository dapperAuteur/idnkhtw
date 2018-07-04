import * as actionTypes from './../actions/actionTypes';
import shuffle from 'shuffle-array';

const initialState = {
  didInvalidate: false,
  error: false,
  errorMessage: {},
  isFetching: false,
  fourLetterWord: {},
  fourLetterWords: []
}

const fourLetterWordReducer = (state = initialState, action) => {
  let fourLetterWord;
  let fourLetterWords;
  switch (action.type) {
    case actionTypes.INVALIDATE_FORM:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false
      });
    case actionTypes.ADD_FOUR_LETTER_WORD:
      fourLetterWord = action.fourLetterWord;
      fourLetterWords = state.fourLetterWords.map(fourLetterWord => (fourLetterWord._id === action.fourLetterWord._id) ? { ...fourLetterWord, ...action.fourLetterWord._id } : fourLetterWord);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        localStorage.setItem('fourLetterWords', JSON.stringify(fourLetterWords));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord,
        fourLetterWords
      });
    case actionTypes.DELETE_FOUR_LETTER_WORD:
      fourLetterWord = {};
      fourLetterWords = state.fourLetterWords.map(fourLetterWord => (fourLetterWord._id === action.fourLetterWord._id) ? { ...fourLetterWord, ...action.fourLetterWord._id } : fourLetterWord);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        localStorage.setItem('fourLetterWords', JSON.stringify(fourLetterWords));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord: {},
        fourLetterWords
      });
    case actionTypes.LOAD_FOUR_LETTER_WORD:
      fourLetterWord = action.fourLetterWord;
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord
      });
    case actionTypes.LOAD_FOUR_LETTER_WORDS:
      fourLetterWords = state.fourLetterWords.map(fourLetterWord => (fourLetterWord._id === action.fourLetterWord._id) ? { ...fourLetterWord, ...action.fourLetterWord._id } : fourLetterWord);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWords', JSON.stringify(fourLetterWords));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWords
      });
    case actionTypes.RANDOM_FOUR_LETTER_WORD:
      let randomFOUR_LETTER_WORDs = [...state.fourLetterWords];
      fourLetterWord = shuffle.pick(randomFOUR_LETTER_WORDs, [{ 'copy': true }, { 'picks': 1 }]);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord
      })
    case actionTypes.REQUEST_FOUR_LETTER_WORD:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.REQUEST_FOUR_LETTER_WORDS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.SET_FOUR_LETTER_WORD:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord: action.fourLetterWord
      });
    case actionTypes.SET_FOUR_LETTER_WORDS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWords: action.fourLetterWords
      });
    case actionTypes.UPDATE_FOUR_LETTER_WORD:
      fourLetterWord = action.fourLetterWord;
      fourLetterWords = state.fourLetterWords.map(fourLetterWord => (fourLetterWord._id === action.fourLetterWord._id) ? { ...fourLetterWord, ...action.fourLetterWord._id } : fourLetterWord);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('fourLetterWord', JSON.stringify(fourLetterWord));
        localStorage.setItem('fourLetterWords', JSON.stringify(fourLetterWords));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        fourLetterWord,
        fourLetterWords
      });
    case actionTypes.SET_FOUR_LETTER_WORD_ERROR:
      return Object.assign({}, state, {
        error: true,
        errorMessage: action.errorMessage
      })
    default:
      return state
  }
};

export default fourLetterWordReducer;
