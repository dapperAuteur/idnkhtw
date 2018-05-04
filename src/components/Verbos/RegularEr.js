import React from 'react';

const TermEr = (props) => {
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

export default TermEr;
