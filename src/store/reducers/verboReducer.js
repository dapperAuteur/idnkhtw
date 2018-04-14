import { combineReducers } from 'redux';
import shuffle from 'shuffle-array';
import {
  CREATE_VERBO,
  DELETE_VERBO,
  GET_VERBO,
  GET_VERBOS,
  GET_RANDOM_VERBO,
  UPDATE_VERBO
} from './../../constants/ActionTypes';

const verbo = (state = {}, action) => {
  switch (action.type) {
    case CREATE_VERBO:
      return [...state.verbos, verbo];
      break;
    case GET_VERBO:
      return state.verbos.filter(v => v._id === verbo._id);
      break;
    case GET_RANDOM_VERBO:
      let verbo = shuffle.pick(verbos, [{ 'copy': true }, { 'picks': 1 }]);
      return verbo;
      break;
    default:
    return verbo;
  }
}

const verbos = (state = {}, action) => {
  switch (action.type) {
    case DELETE_VERBO:
      return state.verbos.filter(v => v._id !== verbo._id);
      break;
    case GET_VERBOS:
      return state.verbos;
      break;
    case UPDATE_VERBO:
      let verbos = state.verbos.map(v => (v._id === verbo._id) ? {
        ...v,
        ...verbo } :
      v);
      return verbos;
      break;
    default:
      return state;
  }
}

export default verbos;
