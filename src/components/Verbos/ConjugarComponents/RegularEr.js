import React from 'react';
import RegularErConditional from './RegularErConditional';
import RegularErFuture from './RegularErFuture';
import RegularErImperfect from './RegularErImperfect';
import RegularErParticiple from './RegularErParticiple';
import RegularErPresent from './RegularErPresent';
import RegularErPreterite from './RegularErPreterite';

const RegularEr = (props) => {
  let { verbo, verboRoot } = props;
  console.log(props, verbo, verboRoot);
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
  let preterite = [
    { "yo": "í" },
    { "tú": "iste" },
    { "3rd": "ió" },
    { "nosotros": "imos" },
    { "vosotros": "isteis" },
    { "3rd plural": "ieron" },
  ];
  let conditional = [
    { "yo": "ería" },
    { "tú": "erías" },
    { "3rd": "ería" },
    { "nosotros": "eríamos" },
    { "vosotros": "eríais" },
    { "3rd plural": "erían" },
  ];
  let imperfect = [
    { "yo": "ía" },
    { "tú": "bías" },
    { "3rd": "bía" },
    { "nosotros": "bíamos" },
    { "vosotros": "bíais" },
    { "3rd plural": "bían" },
  ];
  let future = [
    { "yo": "eré" },
    { "tú": "erás" },
    { "3rd": "erá" },
    { "nosotros": "eremos" },
    { "vosotros": "eréis" },
    { "3rd plural": "erán" },
  ];
  let presentParticiple = "iendo";
  let pastParticiple = "ido";


}

export default RegularEr;
