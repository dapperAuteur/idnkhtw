import React from 'react';

const RegularErPreterite = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let preterite = [
    { "yo": "í" },
    { "tú": "iste" },
    { "3rd": "ió" },
    { "nosotros": "imos" },
    { "vosotros": "isteis" },
    { "3rd plural": "ieron" },
  ];


}

export default RegularErPreterite;
