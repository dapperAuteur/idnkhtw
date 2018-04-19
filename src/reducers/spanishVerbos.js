// action creators
import shuffle from 'shuffle-array';
import spanish_words from './../data/spanish_words';

export const verbo = (state = spanish_words, action) => {
  switch (action.type) {
    case 'GET_RANDOM_VERBO':
      return shuffle.pick(spanish_words, [{ 'copy': true }, { 'picks': 1 }]);
    default:
      return shuffle.pick(spanish_words, [{ 'copy': true }, { 'picks': 1 }]);
  }
}

export const verbos = (state = spanish_words, action) => {
  switch (action.type) {
    case 'GET_VERBOS':
      return [...state];
    default:
      return state;
  }
}
