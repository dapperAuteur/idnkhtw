import React from 'react';
import { Link } from 'react-router-dom';

const PalabrasButtons = (props) => {
  console.log(props);
  let hash;
  let {
    fourLetterWord,
    onClick,
    prefixSuffixRoot,
    verbo
  } = props;
  let pathname = props.location.pathname;
  let loggedIn = false;
  // const onDelete = myData.onDelete;
  // const onLoadRandomPalabra = myData.onLoadRandomPalabra;
  // console.log(onLoadRandomPalabra);
  let p = pathname;
  let update;

  switch (p) {
    case '/words/four-letter-word':
      hash = '#fourLetterWords';
      // nextWord = ;
      pathname = '/words/four-letter-word';
      update = '/words/update/four-letter-word';
      break;
    case '/words/prefix-suffix-root':
      hash = '#prefixSuffixRoots';
      // nextWord = ;
      pathname = '/words/prefix-suffix-root';
      update = '/words/update/prefix-suffix-root';
      break;
    case "/words/verbo":
      hash = '#verbos';
      // nextWord = ;
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
            onClick={ onClick }
            className="btn btn-default">
            Next Word
          </Link>
        </div>
        <button
          onClick={ update }
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
          onClick={ onClick }
          className="btn btn-default">
          Next Word
        </Link>
      </div>
    )
  }
}

export default PalabrasButtons;
