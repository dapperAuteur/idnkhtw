import React from 'react';
import './../CSS/Palabra.css';

const Verbo = (props) => {
  let id = props.id;
  let spanish = props.spanish;
  let translation = props.translation;

  return (
    <div className='palabra'>
      { spanish } : { translation }
    </div>
  )
}

export default Verbo;
