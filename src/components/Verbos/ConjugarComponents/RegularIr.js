import React from 'react';
import RegularIrConditional from './RegularIrConditional';
import RegularIrFuture from './RegularIrFuture';
import RegularIrImperfect from './RegularIrImperfect';
import RegularIrParticiple from './RegularIrParticiple';
import RegularIrPresent from './RegularIrPresent';
import RegularIrPreterite from './RegularIrPreterite';

const RegularIr = (props) => {
  let { verbo, verboRoot } = props;
  console.log(props, verbo, verboRoot);
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
    { "yo": "iría" },
    { "tú": "irías" },
    { "3rd": "iría" },
    { "nosotros": "iríamos" },
    { "vosotros": "iríais" },
    { "3rd plural": "irían" },
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
    { "yo": "iré" },
    { "tú": "irás" },
    { "3rd": "irá" },
    { "nosotros": "iremos" },
    { "vosotros": "iréis" },
    { "3rd plural": "irán" },
  ];
  let presentParticiple = "iendo";
  let pastParticiple = "ido";


}

export default RegularIr;
