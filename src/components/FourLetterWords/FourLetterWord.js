import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let { definition, id, onLoadPalabra, word } = props;
  let p = 'four-letter-words/';
  let wordObj = props.fourLetterWord;

  return (
    <div className='palabra'>
      <Link
        to={{
          // pathname: '/words/four-letter-word',
          hash: '#fourLetterWord',
          state: {
            p: 'four-letter-words/',
            // randomWord: false,
            // wordObj
          }
        }}
        onClick={ e => onLoadPalabra(p, wordObj) }
        >
        { word } : { definition }
      </Link>
    </div>
  )
}

export default FourLetterWord;
