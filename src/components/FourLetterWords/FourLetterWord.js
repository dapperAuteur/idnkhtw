import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let { id, definition, onSetObjInState, word } = props;
  let p = 'fourLetterWords/';
  let wordObj = props.fourLetterWord;
  // console.log(wordObj);

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/four-letter-word',
          hash: '#fourLetterWord',
          state: {
            p,
            id,
            wordObj
          }
        }}
        >
        { word } : { definition }
      </Link>
    </div>
  )
}

export default FourLetterWord;
