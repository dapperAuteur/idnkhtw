import React from 'react';

const FourLetterWord = (props) => {
  let definition = props.definition;
  let id = props.id;
  let word = props.word;

  // console.log(fourLetterWord);

  return (
    <h1>
      { word } : { definition }
    </h1>
  )
}

export default FourLetterWord;
