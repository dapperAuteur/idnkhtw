import React from 'react';

const TermIr = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
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

export default TermIr;
