import * as actionTypes from './actionTypes';
// dev server
const APIURL = '//localhost:8081/api/ver0001/four-letter-words/';
// deployed server on heroku
// const APIURL = '//mbl-express-api.herokuapp.com/api/ver0001/four-letter-words/';

export const randomFourLetterWord = () => {
  console.log("randomFourLetterWord");
  return {
    type: actionTypes.RANDOM_FOUR_LETTER_WORD
  }
}
export const requestFourLetterWord = () => {
  console.log("requestFourLetterWord");
  return {
    type: actionTypes.REQUEST_FOUR_LETTER_WORD
  }
}

export const requestFourLetterWords = () => {
  console.log("requestFourLetterWords");
  return {
    type: actionTypes.REQUEST_FOUR_LETTER_WORDS
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

export const addFourLetterWord = (fourLetterWord) => {
  console.log("addFourLetterWord");
  return {
    type: actionTypes.ADD_FOUR_LETTER_WORD,
    fourLetterWord
  };
};

export const deleteFourLetterWord = (fourLetterWord) => {
  console.log("deleteFourLetterWord");
  console.log(fourLetterWord);
  return {
    type: actionTypes.DELETE_FOUR_LETTER_WORD,
    fourLetterWord
  };
};

export const setFourLetterWord = (fourLetterWord) => {
  console.log("setFourLetterWord");
  return {
    type: actionTypes.SET_FOUR_LETTER_WORD,
    fourLetterWord
  };
};

export const setFourLetterWords = (fourLetterWords) => {
  console.log("setFourLetterWords");
  return {
    type: actionTypes.SET_FOUR_LETTER_WORDS,
    fourLetterWords
  };
};

// CRUD
export const createFourLetterWord = (obj) => (
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
  .then(fourLetterWord => {
    console.log(fourLetterWord);
    return dispatch(addFourLetterWord(fourLetterWord));
  })
  .catch(function (err) {
    return dispatch(setError(err));
    // return err;
  })
  )
)

export const loadFourLetterWord = (obj) => (
  dispatch => (
    fetch(`${APIURL}${obj._id}`)
      .then(resp => {
        console.log(resp);
        dispatch(requestFourLetterWord(obj._id));
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
      .then(fourLetterWord => {
        console.log(fourLetterWord);
        return dispatch(setFourLetterWord(fourLetterWord));
      })
      .catch(function (err) {
        return dispatch(setError(err));
        // return err;
      })
  )
)

export const loadFourLetterWords = () => (
  dispatch => (
    fetch(`${APIURL}`)
      .then(resp => {
        console.log(resp);
        dispatch(requestFourLetterWords());
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
      .then(fourLetterWords => {
        console.log(fourLetterWords);
        return dispatch(setFourLetterWords(fourLetterWords));
      })
      .catch(function (err) {
        return dispatch(setError(err));
        // return err;
      })
  )
)

export const updateFourLetterWord = (obj) => (
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
    .then(fourLetterWord => {
      console.log(fourLetterWord);
      return dispatch(setFourLetterWord(fourLetterWord));
    })
    .catch(function (err) {
      return dispatch(setError(err));
      // return err;
    })
  )
)

export const removeFourLetterWord = (obj) => (
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
    .then(fourLetterWord => {
      console.log(fourLetterWord);
      return dispatch(deleteFourLetterWord(fourLetterWord));
    })
    .catch(function (err) {
      return dispatch(setError(err));
      // return err;
    })
  )
)