import * as actionTypes from './../actions/actionTypes';
import shuffle from 'shuffle-array';

const initialState = {
  didInvalidate: false,
  error: false,
  errorMessage: {},
  isFetching: false,
  showEnglish: false,
  verbo: {},
  verbos: []
}

const verboReducer = (state = initialState, action) => {
  let verbo;
  let verbos;
  switch (action.type) {
    case actionTypes.INVALIDATE_FORM:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false
      });
    case actionTypes.ADD_VERBO:
      verbo = action.verbo;
      verbos = state.verbos.map(verbo => (verbo._id === action.verbo._id) ? { ...verbo, ...action.verbo._id } : verbo);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbo', JSON.stringify(verbo));
        localStorage.setItem('verbos', JSON.stringify(verbos));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbo,
        verbos
      });
    case actionTypes.DELETE_VERBO:
      verbo = {};
      verbos = state.verbos.map(verbo => (verbo._id === action.verbo._id) ? { ...verbo, ...action.verbo._id } : verbo);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbo', JSON.stringify(verbo));
        localStorage.setItem('verbos', JSON.stringify(verbos));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbo: {},
        verbos
      });
    case actionTypes.LOAD_VERBO:
      verbo = action.verbo;
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbo', JSON.stringify(verbo));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbo
      });
    case actionTypes.LOAD_VERBOS:
      verbos = state.verbos.map(verbo => (verbo._id === action.verbo._id) ? { ...verbo, ...action.verbo._id } : verbo);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbos', JSON.stringify(verbos));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbos
      });
    case actionTypes.RANDOM_VERBO:
      let randomVerbos = [...state.verbos];
      verbo = shuffle.pick(randomVerbos, [{ 'copy': true }, { 'picks': 1 }]);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbo', JSON.stringify(verbo));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        showEnglish: false,
        verbo
      })
    case actionTypes.REQUEST_VERBO:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.REQUEST_VERBOS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.SET_VERBO:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbo: action.verbo
      });
    case actionTypes.SET_VERBOS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbos: action.verbos
      });
    case actionTypes.SHOW_ENGLISH:
      let { showEnglish } = { state };
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('showEnglish', JSON.stringify(showEnglish));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        showEnglish: !showEnglish
      })
    case actionTypes.UPDATE_VERBO:
      verbo = action.verbo;
      verbos = state.verbos.map(verbo => (verbo._id === action.verbo._id) ? { ...verbo, ...action.verbo._id } : verbo);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('verbo', JSON.stringify(verbo));
        localStorage.setItem('verbos', JSON.stringify(verbos));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        verbo,
        verbos
      });
    case actionTypes.SET_ERROR:
      return Object.assign({}, state, {
        error: true,
        errorMessage: action.errorMessage
      })
    default:
      return state
  }
};

export default verboReducer;
