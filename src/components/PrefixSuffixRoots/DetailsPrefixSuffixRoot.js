import React from 'react';

const DetailsPrefixSuffixRoot = (props) => {
  let prefixSuffixRoot = props.prefixSuffixRoot;

  console.log(props, prefixSuffixRoot);
  if (prefixSuffixRoot === null || prefixSuffixRoot === undefined) {
    prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
    return null;
  } else {
    return (
      <div>
        <h1>{ prefixSuffixRoot.word }</h1>
        <h3>Type: { prefixSuffixRoot.type }</h3>
        <h3>Meaning: { prefixSuffixRoot.meaning }</h3>
        <h3>Examples: { prefixSuffixRoot.examples }</h3>
      </div>
    )
  }
}

export default DetailsPrefixSuffixRoot;
