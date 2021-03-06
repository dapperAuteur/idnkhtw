import * as actionTypes from './actionTypes';
// import * as apiCalls from './../../actions/apiCalls';

// dev server
// const APIURL = '//localhost:8081/api/ver0001/auth/';
// deployed server on heroku
const APIURL = '//peaceful-waters-22726.herokuapp.com/api/ver0001/auth/';

export const authenticateUser = (currentUser) => {
  return {
    type: actionTypes.AUTHENTICATE_USER,
    currentUser
  }
}

export const closeAuthForm = () => {
  return {
    type: actionTypes.CLOSE_AUTH_FORM
  }
}

export const getCurrentUser = (currentUser) => {
  return {
    type: actionTypes.GET_CURRENT_USER,
    currentUser
  }
}

export const requestAuthentication = (resp) => {
  return {
    type: actionTypes.REQUEST_AUTHENTICATION
  }
}

export const showLoginForm = () => {
  return {
    type: actionTypes.SHOW_LOGIN_FORM
  }
}

export const showSignUpForm = () => {
  return {
    type: actionTypes.SHOW_SIGN_UP_FORM
  }
}

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT
  }
}

export const setAuthError = (err) => {
  return {
    type: actionTypes.SET_AUTH_ERROR,
    errorMessage: err
  }
}

export const signIn = (authInfo) => (
  dispatch => (
    fetch(`${APIURL}signin`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ ...authInfo })
    })
    .then(resp => {
      dispatch(requestAuthentication(resp));
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." }
          throw err;
        }
      }
      return resp.json();
    })
    .then(currentUser => {
      return dispatch(authenticateUser(currentUser));
    })
    .catch(function (err) {
      return dispatch(setAuthError(err));
      // return err;
    })
  )
)

export const signUp = (authInfo) => (
  dispatch => (
    fetch(`${APIURL}signup`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ ...authInfo })
    })
    .then(resp => {
      dispatch(requestAuthentication());
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." }
          throw err;
        }
      }
      return resp.json();
    })
    .then(currentUser => {
      return dispatch(authenticateUser(currentUser));
    })
    .catch(function (err) {
      return dispatch(setAuthError(err));
      // return err;
    })
  )
)
