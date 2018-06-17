import * as actionTypes from './actionTypes';
// import * as apiCalls from './../../actions/apiCalls';

// dev server
const APIURL = '//localhost:8081/api/ver0001/';
// deployed server on heroku
// const APIURL = '//peaceful-waters-22726.herokuapp.com/api/ver0001/';

export const authenticateUser = (currentUser) => {
  console.log("signup");
  console.log(currentUser);
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
  console.log(resp);
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
  console.log("requestSignOut");
  return {
    type: actionTypes.USER_LOGOUT
  }
}

export const setError = (err) => {
  return {
    type: actionTypes.SET_ERROR,
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
      console.log(resp);
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
      console.log(currentUser);
      return dispatch(authenticateUser(currentUser));
    })
    .catch(function (err) {
      return dispatch(setError(err));
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
      return dispatch(setError(err));
      // return err;
    })
  )
)
