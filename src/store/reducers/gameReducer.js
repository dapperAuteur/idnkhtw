import { combineReducers } from 'redux';
import shuffle from 'shuffle-array';
import {
  CREATE_GAME,
  DELETE_GAME,
  GET_GAME,
  GET_GAMES,
  UPDATE_GAME
} from './../../constants/ActionTypes';

const game = (state, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return [...state.games, game];
      break;
    case GET_GAME:
      return state.games.filter(v => v._id === game._id);
      break;
    default:
      return game;
  }
}
const games = (state, action) => {
  switch (action.type) {
    case DELETE_GAME:
      return state.games.filter(v => v._id !== game._id);
      break;
    case GET_GAMES:
      return state.games;
      break;
    case UPDATE_GAME:
      let games = state.games.map(v => (v._id === game._id) ? {
        ...v,
        ...game } :
      v);
      return games;
      break;
    default:
    return {
      game: game(state.game, action),
      games: games(state.games, action)
    };
  }
}

export default games;
