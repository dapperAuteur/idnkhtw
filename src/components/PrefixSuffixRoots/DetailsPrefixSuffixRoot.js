import React from 'react';
import { Link } from 'react-router-dom';

const DetailsPrefixSuffixRoot = (props) => {
  console.log(props);
  let prefixSuffixRoot = props.props.data.prefixSuffixRoot;
  const onDelete = props.props.data.onDelete;
  const onLoadRandomPalabra = props.props.data.onLoadRandomPalabra;
  console.log(prefixSuffixRoot, props);
  if (prefixSuffixRoot === undefined) {
    prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
  }

  return (
    <div>
      <h1>Details of Random Prefix Root or Suffix: { prefixSuffixRoot.word }</h1>
      <h3>Type: { prefixSuffixRoot.type }</h3>
      <h3>Meaning: { prefixSuffixRoot.meaning }</h3>
      <h3>Examples: { prefixSuffixRoot.examples }</h3>
        <button
          onClick={ onLoadRandomPalabra }
          className="btn btn-default">
          Next Prefix Suffix or Root
        </button>
        <button
          onClick={ onDelete }
          className="btn btn-danger">
          Delete Prefix Suffix or Root
        </button>
        { prefixSuffixRoot.word === '' ?
          null
          :
          <Link
            to={ '/words/update/prefix-suffix-root' }
            id="UpdatePrefixSuffixRoot"
            className="btn btn-default">
            EDIT
          </Link>
        }
    </div>
  )
}

export default DetailsPrefixSuffixRoot;
