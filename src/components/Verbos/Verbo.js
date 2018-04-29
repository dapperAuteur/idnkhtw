import React from 'react';
import { Link } from 'react-router-dom';

import './../CSS/Palabra.css';

const Verbo = (props) => {
  let { english, id, spanish } = props;
  let wordObj = props.verbo;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/verbo',
          hash: '#verbo',
          state: {
            p: 'verbos/',
            randomWord: false,
            wordObj
          }
        }}
        >
        { spanish } : { english }
      </Link>
    </div>
  )
}

export default Verbo;
