import { combineReducers } from 'redux';
import shuffle from 'shuffle-array';
import {
  CREATE_PREFIX_SUFFIX_ROOT,
  DELETE_PREFIX_SUFFIX_ROOT,
  GET_PREFIX_SUFFIX_ROOT,
  GET_PREFIX_SUFFIX_ROOTS,
  GET_RANDOM_PREFIX_SUFFIX_ROOT,
  UPDATE_PREFIX_SUFFIX_ROOT
} from './../../constants/ActionTypes';

const prefixSuffixRoot = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PREFIX_SUFFIX_ROOT:
      return [...state.prefixSuffixRoots, prefixSuffixRoot];
      break;
    case GET_PREFIX_SUFFIX_ROOT:
      return state.prefixSuffixRoots.filter(v => v._id === prefixSuffixRoot._id);
      break;
    case GET_RANDOM_PREFIX_SUFFIX_ROOT:
      let prefixSuffixRoot = shuffle.pick(prefixSuffixRoots, [{ 'copy': true }, { 'picks': 1 }]);
      return prefixSuffixRoot;
      break;
    default:
      return prefixSuffixRoot;
  }
}
const prefixSuffixRoots = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PREFIX_SUFFIX_ROOT:
      return state.prefixSuffixRoots.filter(v => v._id !== prefixSuffixRoot._id);
      break;
    case GET_PREFIX_SUFFIX_ROOTS:
      return state.prefixSuffixRoots;
      break;
    case UPDATE_PREFIX_SUFFIX_ROOT:
      let prefixSuffixRoots = state.prefixSuffixRoots.map(v => (v._id === prefixSuffixRoot._id) ? {
        ...v,
        ...prefixSuffixRoot } :
      v);
      return prefixSuffixRoots;
      break;
    default:
    return state;
  }
}

export default prefixSuffixRoots;
