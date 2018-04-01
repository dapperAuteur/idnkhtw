import React from 'react';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let id = props.id;
  let word = props.word;

  return (
    <div className='palabra'>
      Random Prefix Root or Suffix: { word }
    </div>
  )
}

export default PrefixSuffixRoot;
