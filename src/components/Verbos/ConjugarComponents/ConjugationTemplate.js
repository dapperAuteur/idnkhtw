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
  // if
  let present = [
    { "yo": "o" },
    { "tú": "as" },
    { "3rd": "a" },
    { "nosotros": "amos" },
    { "vosotros": "áis" },
    { "3rd plural": "an" },
  ];
  // if
  let preterite = [
    { "yo": "é" },
    { "tú": "aste" },
    { "3rd": "ó" },
    { "nosotros": "amos" },
    { "vosotros": "asteis" },
    { "3rd plural": "aron" },
  ];
  // if
  let conditional = [
    { "yo": "aría" },
    { "tú": "arías" },
    { "3rd": "aría" },
    { "nosotros": "aríamos" },
    { "vosotros": "aríais" },
    { "3rd plural": "arían" },
  ];
  // if
  let imperfect = [
    { "yo": "aba" },
    { "tú": "abas" },
    { "3rd": "aba" },
    { "nosotros": "ábamos" },
    { "vosotros": "abais" },
    { "3rd plural": "aban" },
  ];
  // if
  let future = [
    { "yo": "aré" },
    { "tú": "arás" },
    { "3rd": "ará" },
    { "nosotros": "aremos" },
    { "vosotros": "aréis" },
    { "3rd plural": "arán" },
  ];
  // if
  let presentParticiple = "ando";
  // if
  let pastParticiple = "ado";



}

export default RegularAr;
