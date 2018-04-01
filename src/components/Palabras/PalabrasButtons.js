import React from 'react';
import { Link } from 'react-router-dom';

const PalabrasButtons = (props) => {
  console.log(props);
  let myProps = props.props;
  let myData = myProps.data;
  console.log(myProps);
  console.log(myData);
  let fourLetterWord = myData.props.fourLetterWord;
  let prefixSuffixRoot = myData.props.prefixSuffixRoot;
  let verbo = myData.props.verbo;
  console.log(fourLetterWord, prefixSuffixRoot, verbo);
  let loggedIn = myData.props.loggedIn;
  const onDelete = myData.onDelete;
  const onLoadRandomPalabra = myData.onLoadRandomPalabra;
  console.log(onDelete, onLoadRandomPalabra);
  let p = myProps.location.pathname;
  let update;
  console.log(p);
  if ((fourLetterWord === undefined || prefixSuffixRoot === undefined || verbo === undefined) || (!fourLetterWord.hasOwnProperty('_id') || !prefixSuffixRoot.hasOwnProperty('_id') || !verbo.hasOwnProperty('_id'))) {
    console.log("null");
    fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
    prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
    verbo = JSON.parse(localStorage.getItem("verbo"));
  }
  switch (p) {
    case '/words/four-letter-word':
      update = '/words/update/four-letter-word';
      break;
    case '/words/prefix-suffix-root':
      update = '/words/update/prefix-suffix-root';
      break;
    case "/words/verbo":
      update = '/words/update/verbo';
      break;
    default:

  }
  console.log(p, update);
  if (loggedIn) {
    return (
      <div>
        <div>
          <button
            onClick={ onLoadRandomPalabra }
            className="btn btn-default">
            Next Verbo
          </button>
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
        <button
          onClick={ onLoadRandomPalabra }
          className="btn btn-default">
          Next Verbo
        </button>
      </div>
    )
  }
}

export default PalabrasButtons;
