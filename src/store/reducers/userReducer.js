import { combineReducers } from 'redux';
import shuffle from 'shuffle-array';
import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  GET_USERS,
  GET_RANDOM_USER,
  UPDATE_USER
} from './../../constants/ActionTypes';

const initialState = {
  errorMessage: {},
  fourLetterWord: {},
  fourLetterWords: [],
  game: {},
  games: [],
  loggedIn: false,
  p: '',
  prefixSuffixRoot: {},
  prefixSuffixRoots: [],
  showLoginForm: false,
  showSignUpForm: false,
  currentUser: {},
  user: {},
  users: [],
  verbo: {},
  verbos: []
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, user];
      break;
    case GET_USER:
      return state.filter(v => v._id === user._id);
      break;
    case GET_RANDOM_USER:
      let user = shuffle.pick(users, [{ 'copy': true }, { 'picks': 1 }]);
      return state;
      break;
    default:
      return state;
  }
}
const users = (state = initialState.users, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter(v => v._id !== user._id);
      break;
    case GET_USERS:
      return state;
      break;
    case UPDATE_USER:
      let users = state.map(v => (v._id === user._id) ? {
        ...v,
        ...user } :
      v);
      return users;
      break;
    default:
      return {
        getUser: user(state.user, action),
        getUsers: users(state.users, action)
      };
  }
}

export const getUser = (state, userId) => state.user[userId] || {};

export const getUsers = (state) => state.users || [];

export default users;
