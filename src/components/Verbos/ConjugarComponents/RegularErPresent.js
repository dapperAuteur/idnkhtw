import React from 'react';

const RegularErPresent = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let present = [
    { "yo": "o" },
    { "tú": "es" },
    { "3rd": "e" },
    { "nosotros": "emos" },
    { "vosotros": "éis" },
    { "3rd plural": "en" },
  ];


}

export default RegularErPresent;
