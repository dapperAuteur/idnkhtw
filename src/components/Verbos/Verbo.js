import React from 'react';

const Verbo = (props) => {
  let id = props.id;
  let spanish = props.spanish;
  let translation = props.translation;

  return (
    <h1>
      { spanish } : { translation }
    </h1>
  )
}

export default Verbo;
