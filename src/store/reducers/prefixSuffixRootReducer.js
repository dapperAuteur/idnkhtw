import * as actionTypes from './../actions/actionTypes';
import shuffle from 'shuffle-array';

const initialState = {
  didInvalidate: false,
  error: false,
  errorMessage: {},
  isFetching: false,
  showEnglish: false,
  prefixSuffixRoot: {},
  prefixSuffixRoots: []
}

const prefixSuffixRootReducer = (state = initialState, action) => {
  let prefixSuffixRoot;
  let prefixSuffixRoots;
  switch (action.type) {
    case actionTypes.INVALIDATE_FORM:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false
      });
    case actionTypes.ADD_PREFIX_SUFFIX_ROOT:
      prefixSuffixRoot = action.prefixSuffixRoot;
      prefixSuffixRoots = state.prefixSuffixRoots.map(prefixSuffixRoot => (prefixSuffixRoot._id === action.prefixSuffixRoot._id) ? { ...prefixSuffixRoot, ...action.prefixSuffixRoot._id } : prefixSuffixRoot);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        localStorage.setItem('prefixSuffixRoots', JSON.stringify(prefixSuffixRoots));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoot,
        prefixSuffixRoots
      });
    case actionTypes.DELETE_PREFIX_SUFFIX_ROOT:
      prefixSuffixRoot = {};
      prefixSuffixRoots = state.prefixSuffixRoots.map(prefixSuffixRoot => (prefixSuffixRoot._id === action.prefixSuffixRoot._id) ? { ...prefixSuffixRoot, ...action.prefixSuffixRoot._id } : prefixSuffixRoot);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        localStorage.setItem('prefixSuffixRoots', JSON.stringify(prefixSuffixRoots));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoot: {},
        prefixSuffixRoots
      });
    case actionTypes.LOAD_PREFIX_SUFFIX_ROOT:
      prefixSuffixRoot = action.prefixSuffixRoot;
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoot
      });
    case actionTypes.LOAD_PREFIX_SUFFIX_ROOTS:
      prefixSuffixRoots = state.prefixSuffixRoots.map(prefixSuffixRoot => (prefixSuffixRoot._id === action.prefixSuffixRoot._id) ? { ...prefixSuffixRoot, ...action.prefixSuffixRoot._id } : prefixSuffixRoot);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoots', JSON.stringify(prefixSuffixRoots));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoots
      });
    case actionTypes.RANDOM_PREFIX_SUFFIX_ROOT:
      let randomPREFIX_SUFFIX_ROOTs = [...state.prefixSuffixRoots];
      prefixSuffixRoot = shuffle.pick(randomPREFIX_SUFFIX_ROOTs, [{ 'copy': true }, { 'picks': 1 }]);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        showEnglish: false,
        prefixSuffixRoot
      })
    case actionTypes.REQUEST_PREFIX_SUFFIX_ROOT:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.REQUEST_PREFIX_SUFFIX_ROOTS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: true,
        didInvalidate: false
      });
    case actionTypes.SET_PREFIX_SUFFIX_ROOT:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoot: action.prefixSuffixRoot
      });
    case actionTypes.SET_PREFIX_SUFFIX_ROOTS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoots: action.prefixSuffixRoots
      });
    case actionTypes.SHOW_ENGLISH:
      let { showEnglish } = state;
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('showEnglish', JSON.stringify(showEnglish));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        showEnglish: !showEnglish
      })
    case actionTypes.UPDATE_PREFIX_SUFFIX_ROOT:
      prefixSuffixRoot = action.prefixSuffixRoot;
      prefixSuffixRoots = state.prefixSuffixRoots.map(prefixSuffixRoot => (prefixSuffixRoot._id === action.prefixSuffixRoot._id) ? { ...prefixSuffixRoot, ...action.prefixSuffixRoot._id } : prefixSuffixRoot);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('prefixSuffixRoot', JSON.stringify(prefixSuffixRoot));
        localStorage.setItem('prefixSuffixRoots', JSON.stringify(prefixSuffixRoots));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        error: false,
        errorMessage: {},
        isFetching: false,
        prefixSuffixRoot,
        prefixSuffixRoots
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

export default prefixSuffixRootReducer;
