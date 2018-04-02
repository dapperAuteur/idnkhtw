import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let id = props.id;
  let word = props.word;
  let wordObj = props.prefixSuffixRoot;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/palabra/',
          hash: '#prefixSuffixRoots',
          state: {
            p: 'prefixSuffixRoots/',
            wordObj
          }
        }}
        >
        { word }
      </Link>
    </div>
  )
}

export default PrefixSuffixRoot;
