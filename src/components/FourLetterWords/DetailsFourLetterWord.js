import React from 'react';

const DetailsFourLetterWord = (props) => {
  console.log(props);
  let fourLetterWord = props.fourLetterWord;
  // console.log(fourLetterWord);
  if (fourLetterWord === null || fourLetterWord === undefined) {
    fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
    return null;
  } else {
    return (
      <div>
        <h1>{ fourLetterWord.word }</h1>
        <h3>Tier: { fourLetterWord.tier }</h3>
        <h3>Definition: { fourLetterWord.definition }</h3>
      </div>
    );
  }
}

export default DetailsFourLetterWord;
