import React from 'react';

const PrefixSuffixRoot = (props) => {
  let id = props.id;
  let word = props.word;

  return (
    <h1>
      Random Prefix Root or Suffix: { word }
    </h1>
  )
}

export default PrefixSuffixRoot;
