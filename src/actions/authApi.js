// dev server
// const APIURL = '//localhost:8081/api/ver0001/';
// deployed server on heroku
const APIURL = '//peaceful-waters-22726.herokuapp.com/api/ver0001/';

export async function signIn(authInfo) {
  return fetch(`${APIURL}auth/signin`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ ...authInfo })
  })
    .then(resp => {
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
}

export async function signUp(authInfo) {
  return fetch(`${APIURL}auth/signup`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ ...authInfo })
  })
    .then(resp => {
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
}
