import React from 'react';

const RegularErParticiple = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let verboString;
  if (verbo.reflexive) {
    verboString = verbo.spanish.slice(0, -4);
  } else {
    verboString = verbo.spanish.slice(0, -2);
  }
  console.log(verboString);
  let presentParticiple = "iendo";
  let pastParticiple = "ido";


}

export default RegularErParticiple;
