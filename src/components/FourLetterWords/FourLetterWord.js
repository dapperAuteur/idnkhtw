import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let { definition, id, word } = props;
  let wordObj = props.fourLetterWord;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/four-letter-word',
          hash: '#fourLetterWord',
          state: {
            p: 'four-letter-words/',
            randomWord: false,
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
