import React from 'react';
import { Link } from 'react-router-dom';

const DetailsFourLetterWord = (props) => {
  console.log(props);
  const fourLetterWord = props.props.data.props.fourLetterWord;
  console.log(fourLetterWord);
  const onDelete = props.props.data.onDelete;
  const onLoadRandomPalabra = props.props.data.onLoadRandomPalabra;
  // const p = 'fourLetterWords/';
  console.log(fourLetterWord, props);

  return (
    <div>
      <h1>Details of Random Four Letter Word: { fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
        <button
          onClick={ onLoadRandomPalabra }
          className="btn btn-default">
          Next Four Letter Word
        </button>
        <button
          onClick={ onDelete }
          className="btn btn-danger">
          Delete Four Letter Word
        </button>
        { fourLetterWord.word === '' ?
          null
          :
          <Link
            to={ '/words/update/four-letter-word' }
            id="UpdateFourLetterWord"
            className="btn btn-default">
            EDIT
          </Link>
        }
    </div>
  )
}

export default DetailsFourLetterWord;
