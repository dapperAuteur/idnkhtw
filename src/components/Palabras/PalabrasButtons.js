import React from 'react';
import { Link } from 'react-router-dom';

const PalabrasButtons = (props) => {
  // console.log(props);
  let hash;
  let myProps = props.props;
  let myData = myProps.data;
  let pathname;
  // console.log(myData);
  let fourLetterWord = myData.props.fourLetterWord;
  let prefixSuffixRoot = myData.props.prefixSuffixRoot;
  let verbo = myData.props.verbo;
  let loggedIn = myData.props.loggedIn;
  const onDelete = myData.onDelete;
  const onLoadRandomPalabra = myData.onLoadRandomPalabra;
  // console.log(onLoadRandomPalabra);
  let p = myProps.location.pathname;
  let update;
  if ((fourLetterWord === undefined || prefixSuffixRoot === undefined || verbo === undefined) || (!fourLetterWord.hasOwnProperty('_id') || !prefixSuffixRoot.hasOwnProperty('_id') || !verbo.hasOwnProperty('_id'))) {
    fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
    prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
    verbo = JSON.parse(localStorage.getItem("verbo"));
  }
  switch (p) {
    case '/words/four-letter-word':
      hash = '#fourLetterWords'
      pathname = '/words/four-letter-word';
      update = '/words/update/four-letter-word';
      break;
    case '/words/prefix-suffix-root':
      hash = '#prefixSuffixRoots'
      pathname = '/words/prefix-suffix-root';
      update = '/words/update/prefix-suffix-root';
      break;
    case "/words/verbo":
      hash = '#verbos'
      pathname = '/words/verbo';
      update = '/words/update/verbo';
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
          to={ update }
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
