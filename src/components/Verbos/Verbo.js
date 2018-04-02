import React from 'react';
import { Link } from 'react-router-dom';

import './../CSS/Palabra.css';

const Verbo = (props) => {
  let id = props.id;
  let spanish = props.spanish;
  let english = props.english;
  let wordObj = props.verbo;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/palabra/',
          hash: '#verbos',
          state: {
            p: 'verbos/',
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
