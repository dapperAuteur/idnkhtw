import * as actionTypes from './actionTypes';
// dev server
const APIURL = '//localhost:8081/api/ver0001/verbos/';
// deployed server on heroku
// const APIURL = '//mbl-express-api.herokuapp.com/api/ver0001/verbos/';

export const randomVerbo = () => {
  return {
    type: actionTypes.RANDOM_VERBO
  }
}
export const requestVerbo = () => {
  return {
    type: actionTypes.REQUEST_VERBO
  }
}

export const requestVerbos = () => {
  return {
    type: actionTypes.REQUEST_VERBOS
  }
}

export const setVerboError = (err) => {
  return {
    type: actionTypes.SET_VERBO_ERROR,
    errorMessage: err
  }
}

export const showEnglish = () => {
  return {
    type: actionTypes.SHOW_ENGLISH
  }
}

export const addVerbo = (verbo) => {
  return {
    type: actionTypes.ADD_VERBO,
    verbo
  };
};

export const deleteVerbo = (verbo) => {
  return {
    type: actionTypes.DELETE_VERBO,
    verbo
  };
};

export const setVerbo = (verbo) => {
  return {
    type: actionTypes.SET_VERBO,
    verbo
  };
};

export const setVerbos = (verbos) => {
  return {
    type: actionTypes.SET_VERBOS,
    verbos
  };
};

// CRUD
export const createVerbo = (obj) => (
  dispatch => (
    fetch(`${APIURL}`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${obj.token}`,
      'Role': `Role ${obj.currentUserRole}`,
      'UserId': `UserId ${obj.currentUserId}`
    }),
    body: JSON.stringify({ ...obj })
  })
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {
            errorMessage: data.message
          }
          return dispatch(setVerboError(err));
          // throw err;
        })
      } else {
        let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
        return dispatch(setVerboError(err));
        // throw err;
      }
    }
    return resp.json();
  })
  .then(verbo => {
    return dispatch(addVerbo(verbo));
  })
  .catch(function (err) {
    return dispatch(setVerboError(err));
    // return err;
  })
  )
)

export const loadVerbo = (obj) => (
  dispatch => (
    fetch(`${APIURL}${obj._id}`)
      .then(resp => {
        dispatch(requestVerbo(obj._id));
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {
                errorMessage: data.message
              }
              return dispatch(setVerboError(err));
              // throw err;
            })
          } else {
            let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
            return dispatch(setVerboError(err));
            // throw err;
          }
        }
        return resp.json();
      })
      .then(verbo => {
        return dispatch(setVerbo(verbo));
      })
      .catch(function (err) {
        return dispatch(setVerboError(err));
        // return err;
      })
  )
)

export const loadVerbos = () => (
  dispatch => (
    fetch(`${APIURL}`)
      .then(resp => {
        dispatch(requestVerbos());
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {
                errorMessage: data.message
              }
              return dispatch(setVerboError(err));
              // throw err;
            })
          } else {
            let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
            return dispatch(setVerboError(err));
            // throw err;
          }
        }
        return resp.json();
      })
      .then(verbos => {
        return dispatch(setVerbos(verbos));
      })
      .catch(function (err) {
        return dispatch(setVerboError(err));
        // return err;
      })
  )
)

export const updateVerbo = (obj) => (
  dispatch => (
    fetch(`${APIURL}${obj._id}`, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${obj.token}`,
        'Role': `Role ${obj.currentUserRole}`,
        'UserId': `UserId ${obj.currentUserId}`
      }),
      body: JSON.stringify({ ...obj })
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            return dispatch(setVerboError(err));
            // return err;
          })
        } else {
          let err = { errorMessage: 'Please Try Again Later, Server Is NOT Responding.' }
          return dispatch(setVerboError(err));
          // return err;
        }
      }
      return resp.json();
    })
    .then(verbo => {
      return dispatch(setVerbo(verbo));
    })
    .catch(function (err) {
      return dispatch(setVerboError(err));
      // return err;
    })
  )
)

export const removeVerbo = (obj) => (
  dispatch => (
    fetch(`${APIURL}${obj._id}`, {
      method: 'delete',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${obj.token}`,
        'Role': `Role ${obj.currentUserRole}`,
        'UserId': `UserId ${obj.currentUserId}`
      }),
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            return dispatch(setVerboError(err));
            // return err;
          })
        } else {
          let err = { errorMessage: 'Please Try Again Later, Server Is NOT Responding.' }
          return dispatch(setVerboError(err));
          // return err;
        }
      }
      return resp.json();
    })
    .then(verbo => {
      return dispatch(deleteVerbo(verbo));
    })
    .catch(function (err) {
      return dispatch(setVerboError(err));
      // return err;
    })
  )
)
