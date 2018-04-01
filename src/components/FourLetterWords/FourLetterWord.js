import React from 'react';
import './../CSS/Palabra.css';

const FourLetterWord = (props) => {
  let definition = props.definition;
  let id = props.id;
  let word = props.word;

  // console.log(fourLetterWord);

  return (
    <div className='palabra'>
      { word } : { definition }
    </div>
  )
}

export default FourLetterWord;
