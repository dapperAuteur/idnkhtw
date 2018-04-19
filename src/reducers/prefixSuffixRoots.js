// action creators
import shuffle from 'shuffle-array';
import prefix_suffix_roots from './../data/prefix_suffix_roots';

export const prefixSuffixRoot = (state = prefix_suffix_roots, action) => {
  switch (action.type) {
    case 'GET_RANDOM_PREFIX_SUFFIX_ROOT':
      return shuffle.pick(prefix_suffix_roots, [{ 'copy': true }, { 'picks': 1 }]);
    default:
      return shuffle.pick(prefix_suffix_roots, [{ 'copy': true }, { 'picks': 1 }]);
      // return state;
  }
}

export const prefixSuffixRoots = (state = prefix_suffix_roots, action) => {
  switch (action.type) {
    case 'GET_PREFIX_SUFFIX_ROOTS':
      return [...state];
    default:
      return state;
  }
}
