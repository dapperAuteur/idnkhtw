import React from 'react';

const FourLetterWord = (props) => {
  let { fourLetterWord } = { ...props };

  return (
    <h1>Random Four Letter Word: { fourLetterWord.word }</h1>
  )
}

export default FourLetterWord;
