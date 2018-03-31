import React from 'react';

const PrefixSuffixRoot = (props) => {
  let { prefixSuffixRoot } = { ...props };

  return (
    <h1>Random Prefix Root or Suffix: { prefixSuffixRoot.word }</h1>
  )
}

export default PrefixSuffixRoot;
