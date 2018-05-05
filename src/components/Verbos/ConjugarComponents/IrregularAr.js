import React from 'react';
import RegularArConditional from './RegularArConditional';
import RegularArFuture from './RegularArFuture';
import RegularArImperfect from './RegularArImperfect';
import RegularArParticiple from './RegularArParticiple';
import RegularArPresent from './RegularArPresent';
import RegularArPreterite from './RegularArPreterite';

const RegularAr = (props) => {
  let { verbo, verboRoot } = props;

  console.log(props, verbo, verboRoot);
  let present = [
    { "yo": "o" },
    { "tú": "as" },
    { "3rd": "a" },
    { "nosotros": "amos" },
    { "vosotros": "áis" },
    { "3rd plural": "an" },
  ];
  let presentParticiple = "ando";
  let pastParticiple = "ado";



}

export default RegularAr;
