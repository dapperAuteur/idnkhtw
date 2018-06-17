import * as actionTypes from './actionTypes';
// dev server
const APIURL = '//localhost:8081/api/ver0001/prefix-suffix-roots/';
// deployed server on heroku
// const APIURL = '//mbl-express-api.herokuapp.com/api/ver0001/prefix-suffix-roots/';

export const randomPrefixSuffixRoot = () => {
  console.log("randomPrefixSuffixRoot");
  return {
    type: actionTypes.RANDOM_PREFIX_SUFFIX_ROOT
  }
}
export const requestPrefixSuffixRoot = () => {
  console.log("requestPrefixSuffixRoot");
  return {
    type: actionTypes.REQUEST_PREFIX_SUFFIX_ROOT
  }
}

export const requestPrefixSuffixRoots = () => {
  console.log("requestPrefixSuffixRoots");
  return {
    type: actionTypes.REQUEST_PREFIX_SUFFIX_ROOTS
  }
}

export const setError = (err) => {
  return {
    type: actionTypes.SET_ERROR,
    errorMessage: err
  }
}

export const showEnglish = () => {
  console.log("showEnglish");
  return {
    type: actionTypes.SHOW_ENGLISH
  }
}

export const addPrefixSuffixRoot = (prefixSuffixRoot) => {
  console.log("addPrefixSuffixRoot");
  return {
    type: actionTypes.ADD_PREFIX_SUFFIX_ROOT,
    prefixSuffixRoot
  };
};

export const deletePrefixSuffixRoot = (prefixSuffixRoot) => {
  console.log("deletePrefixSuffixRoot");
  console.log(prefixSuffixRoot);
  return {
    type: actionTypes.DELETE_PREFIX_SUFFIX_ROOT,
    prefixSuffixRoot
  };
};

export const setPrefixSuffixRoot = (prefixSuffixRoot) => {
  console.log("setPrefixSuffixRoot");
  return {
    type: actionTypes.SET_PREFIX_SUFFIX_ROOT,
    prefixSuffixRoot
  };
};

export const setPrefixSuffixRoots = (prefixSuffixRoots) => {
  console.log("setPrefixSuffixRoots");
  return {
    type: actionTypes.SET_PREFIX_SUFFIX_ROOTS,
    prefixSuffixRoots
  };
};

// CRUD
export const createPrefixSuffixRoot = (obj) => (
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
    console.log(resp);
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {
            errorMessage: data.message
          }
          return dispatch(setError(err));
          // throw err;
        })
      } else {
        let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
        return dispatch(setError(err));
        // throw err;
      }
    }
    return resp.json();
  })
  .then(prefixSuffixRoot => {
    console.log(prefixSuffixRoot);
    return dispatch(addPrefixSuffixRoot(prefixSuffixRoot));
  })
  .catch(function (err) {
    return dispatch(setError(err));
    // return err;
  })
  )
)

export const loadPrefixSuffixRoot = (obj) => (
  dispatch => (
    fetch(`${APIURL}${obj._id}`)
      .then(resp => {
        console.log(resp);
        dispatch(requestPrefixSuffixRoot(obj._id));
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {
                errorMessage: data.message
              }
              return dispatch(setError(err));
              // throw err;
            })
          } else {
            let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
            return dispatch(setError(err));
            // throw err;
          }
        }
        return resp.json();
      })
      .then(prefixSuffixRoot => {
        console.log(prefixSuffixRoot);
        return dispatch(setPrefixSuffixRoot(prefixSuffixRoot));
      })
      .catch(function (err) {
        return dispatch(setError(err));
        // return err;
      })
  )
)

export const loadPrefixSuffixRoots = () => (
  dispatch => (
    fetch(`${APIURL}`)
      .then(resp => {
        console.log(resp);
        dispatch(requestPrefixSuffixRoots());
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {
                errorMessage: data.message
              }
              return dispatch(setError(err));
              // throw err;
            })
          } else {
            let err = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' };
            return dispatch(setError(err));
            // throw err;
          }
        }
        return resp.json();
      })
      .then(prefixSuffixRoots => {
        console.log(prefixSuffixRoots);
        return dispatch(setPrefixSuffixRoots(prefixSuffixRoots));
      })
      .catch(function (err) {
        return dispatch(setError(err));
        // return err;
      })
  )
)

export const updatePrefixSuffixRoot = (obj) => (
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
            return dispatch(setError(err));
            // return err;
          })
        } else {
          let err = { errorMessage: 'Please Try Again Later, Server Is NOT Responding.' }
          return dispatch(setError(err));
          // return err;
        }
      }
      return resp.json();
    })
    .then(prefixSuffixRoot => {
      console.log(prefixSuffixRoot);
      return dispatch(setPrefixSuffixRoot(prefixSuffixRoot));
    })
    .catch(function (err) {
      return dispatch(setError(err));
      // return err;
    })
  )
)

export const removePrefixSuffixRoot = (obj) => (
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
            return dispatch(setError(err));
            // return err;
          })
        } else {
          let err = { errorMessage: 'Please Try Again Later, Server Is NOT Responding.' }
          return dispatch(setError(err));
          // return err;
        }
      }
      return resp.json();
    })
    .then(prefixSuffixRoot => {
      console.log(prefixSuffixRoot);
      return dispatch(deletePrefixSuffixRoot(prefixSuffixRoot));
    })
    .catch(function (err) {
      return dispatch(setError(err));
      // return err;
    })
  )
)
