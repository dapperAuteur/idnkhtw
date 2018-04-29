import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let { id, onLoadPalabra, word } = props;
  let p = 'prefix-suffix-roots/';
  let wordObj = props.prefixSuffixRoot;

  return (
    <div className='palabra'>
      <Link
        to={{
          // pathname: '/words/prefix-suffix-root',
          hash: '#prefixSuffixRoot',
          state: {
            p: 'prefix-suffix-roots/',
            randomWord: false,
            wordObj
          }
        }}
        onClick={ e => onLoadPalabra(p, wordObj) }
        >
        { word } : { wordObj.meaning }
      </Link>
    </div>
  )
}

export default PrefixSuffixRoot;
