import React from 'react';

const RegularErImperfect = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let imperfect = [
    { "yo": "ía" },
    { "tú": "bías" },
    { "3rd": "bía" },
    { "nosotros": "bíamos" },
    { "vosotros": "bíais" },
    { "3rd plural": "bían" },
  ];


}

export default RegularErImperfect;
