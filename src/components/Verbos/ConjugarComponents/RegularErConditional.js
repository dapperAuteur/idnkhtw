import React from 'react';

const RegularErConditional = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let conditional = [
    { "yo": "ería" },
    { "tú": "erías" },
    { "3rd": "ería" },
    { "nosotros": "eríamos" },
    { "vosotros": "eríais" },
    { "3rd plural": "erían" },
  ];


}

export default RegularErConditional;
