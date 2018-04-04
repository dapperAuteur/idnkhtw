import React from 'react';
import { Link } from 'react-router-dom';

const PalabrasButtons = (props) => {
  console.log(props);
  let fourLetterWord, hash, prefixSuffixRoot, update, verbo;
  let myProps = props.props;
  let myData = myProps.data;
  let pathname = myData.location.pathname;
  console.log(pathname);
  let wordObj = myData.location.state.wordObj;
  console.log(wordObj);
  console.log(myData.props);
  console.log(myData.props.fourLetterWord);
  if (wordObj === undefined && pathname === '/words/four-letter-word') {
    wordObj = myData.props.fourLetterWord;
    console.log(wordObj);
  } else if (wordObj === undefined && pathname === '/words/prefix-suffix-root') {
    wordObj = myData.props.prefixSuffixRoot;
  } else if (wordObj === undefined && pathname === '/users/user') {
    wordObj = myData.props.user;
  } else if (wordObj === undefined && pathname === '/words/verbo') {
    wordObj = myData.props.verbo;
  }
  console.log(myData);
  console.log(wordObj);
  // let fourLetterWord = myData.props.fourLetterWord;
  // let prefixSuffixRoot = myData.props.prefixSuffixRoot;
  // let verbo = myData.props.verbo;
  let loggedIn = myData.props.loggedIn;
  const onDelete = myData.onDelete;
  const onLoadRandomPalabra = myData.onLoadRandomPalabra;
  console.log(onLoadRandomPalabra);
  let p = myProps.location.pathname;
  // let update;
  // if ((fourLetterWord === undefined || prefixSuffixRoot === undefined || verbo === undefined) || (!fourLetterWord.hasOwnProperty('_id') || !prefixSuffixRoot.hasOwnProperty('_id') || !verbo.hasOwnProperty('_id'))) {
  //   fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
  //   prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
  //   verbo = JSON.parse(localStorage.getItem("verbo"));
  // }
  switch (p) {
    case '/words/four-letter-word':
      hash = '#fourLetterWords'
      pathname = '/words/four-letter-word';
      update = '/words/update/four-letter-word';
      fourLetterWord = wordObj;
      break;
    case '/words/prefix-suffix-root':
      hash = '#prefixSuffixRoots'
      pathname = '/words/prefix-suffix-root';
      update = '/words/update/prefix-suffix-root';
      prefixSuffixRoot = wordObj;
      break;
    case "/words/verbo":
      hash = '#verbos'
      pathname = '/words/verbo';
      update = '/words/update/verbo';
      verbo = wordObj;
      break;
    default:

  }
  if (loggedIn) {
    return (
      <div>
        <div>
          <Link
            to={{
              pathname,
              hash
            }}
            onClick={ onLoadRandomPalabra }
            className="btn btn-default">
            Next Word
          </Link>
        </div>
        <button
          onClick={ onDelete }
          className="btn btn-danger">
          Delete Word
        </button>
        <Link
          to={{
            pathname: update,
            hash,
            state: {
              fourLetterWord,
              prefixSuffixRoot,
              verbo,
              wordObj
            }
          }}
          id="UpdateFourLetterWord"
          className="btn btn-default">
          EDIT
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link
          to={{
            pathname,
            hash
          }}
          onClick={ onLoadRandomPalabra }
          className="btn btn-default">
          Next Word
        </Link>
      </div>
    )
  }
}

export default PalabrasButtons;
