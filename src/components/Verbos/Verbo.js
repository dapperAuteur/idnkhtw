import React from 'react';
import { Link } from 'react-router-dom';

import './../CSS/Palabra.css';

const Verbo = (props) => {
  let verbo = props.verbo;
  let id = props.id;
  let spanish = props.spanish;
  let translation = props.translation;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/verbo',
          hash: '#verbos',
          state: {
            p: 'verbos/',
            verbo
          }
        }}
        >
        { spanish } : { translation }
      </Link>
    </div>
  )
}

export default Verbo;
