import React from 'react';

const Verbo = (props) => {
  let { verbo } = { ...props };

  return (
    <h1>Random Spanish Verb: { verbo.spanish }</h1>
  )
}

export default Verbo;
