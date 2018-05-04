import React from 'react';

const RegularErFuture = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let future = [
    { "yo": "eré" },
    { "tú": "erás" },
    { "3rd": "erá" },
    { "nosotros": "eremos" },
    { "vosotros": "eréis" },
    { "3rd plural": "erán" },
  ];


}

export default RegularErFuture;
