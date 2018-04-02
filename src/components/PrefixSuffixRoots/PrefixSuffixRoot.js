import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let prefixSuffixRoot = props.prefixSuffixRoot;
  let id = props.id;
  let word = props.word;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/prefix-suffix-root',
          hash: '#prefixSuffixRoots',
          state: {
            p: 'prefixSuffixRoots/',
            prefixSuffixRoot
          }
        }}
        >
        { word }
      </Link>
    </div>
  )
}

export default PrefixSuffixRoot;
