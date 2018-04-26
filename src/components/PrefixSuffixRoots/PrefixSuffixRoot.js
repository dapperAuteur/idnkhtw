import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let { id, word } = props;
  let wordObj = props.prefixSuffixRoot;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/prefix-suffix-root',
          hash: '#prefixSuffixRoot',
          state: {
            p: 'prefix-suffix-roots/',
            wordObj
          }
        }}
        >
        { word } : { wordObj.meaning }
      </Link>
    </div>
  )
}

export default PrefixSuffixRoot;
