import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let definition = props.definition;
  let id = props.id;
  let word = props.word;
  let wordObj = props.fourLetterWord;

  // console.log(fourLetterWord);

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/palabra/',
          hash: '#fourLetterWords',
          state: {
            p: 'fourLetterWords/',
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
