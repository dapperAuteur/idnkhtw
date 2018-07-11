import * as actionTypes from './../actions/actionTypes';

const initialState = {
  authenticated: false,
  currentUser: {},
  didInvalidate: false,
  error: false,
  errorMessage: {},
  isFetching: false,
  showLoginForm: false,
  showSignUpForm: false
}

const authReducer = (state = initialState, action) => {
  let currentUser;
  switch (action.type) {
    case actionTypes.AUTHENTICATE_USER:
      currentUser = action.currentUser;
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        authenticated: true,
        currentUser,
        didInvalidate: false,
        error: false,
        errorMessage: {},
        isFetching: false,
        showLoginForm: false,
        showSignUpForm: false
      })
    case actionTypes.CLOSE_AUTH_FORM:
      return Object.assign({}, state, {
        showLoginForm: false,
        showSignUpForm: false
      })
    case actionTypes.SHOW_LOGIN_FORM:
      return Object.assign({}, state, {
        showLoginForm: true,
        showSignUpForm: false
      })
    case actionTypes.SHOW_SIGN_UP_FORM:
      return Object.assign({}, state, {
        showLoginForm: false,
        showSignUpForm: true
      })
    case actionTypes.GET_CURRENT_USER:
      if (typeof(Storage) !== "undefined") {
        if (localStorage.hasOwnProperty('currentUser')) {
          currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
      } else {
        return null;
      }
      return Object.assign({}, state, {
        authenticated: true,
        currentUser,
        didInvalidate: false,
        error: false,
        errorMessage: {},
        isFetching: false,
        showLoginForm: false,
        showSignUpForm: false
      })
    case actionTypes.SET_AUTH_ERROR:
      let errorMessage = action.errorMessage;
      // console.log(errorMessage);
      // console.log(action);
      return Object.assign({}, state, {
        authenticated: false,
        currentUser: {},
        error: true,
        errorMessage,
        isFetching: false
      })
    case actionTypes.REQUEST_AUTHENTICATION:
      return Object.assign({}, state, {
        authenticated: false,
        error: false,
        errorMessage: {},
        isFetching: true
      })
    case actionTypes.USER_LOGOUT:
      currentUser = {};
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      } else {
        return null;
      }
      return Object.assign({}, state, {
        authenticated: false,
        currentUser,
        didInvalidate: false,
        error: false,
        errorMessage: {},
        isFetching: false,
      })
    default:
      return state;
  }
}

export default authReducer;
