import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let fourLetterWord = props.fourLetterWord;
  let definition = props.definition;
  let id = props.id;
  let word = props.word;

  // console.log(fourLetterWord);

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/four-letter-word',
          hash: '#fourLetterWords',
          state: {
            p: 'fourLetterWords/',
            fourLetterWord
          }
        }}
        >
        { word } : { definition }
      </Link>
    </div>
  )
}

export default FourLetterWord;
