import React from 'react';

const TermAr = (props) => {
  let verbo = props.verbo;
  console.log(props, verbo);
  let present = [
    { "yo": "o" },
    { "tú": "as" },
    { "3rd": "a" },
    { "nosotros": "amos" },
    { "vosotros": "áis" },
    { "3rd plural": "an" },
  ];
  let preterite = [
    { "yo": "é" },
    { "tú": "aste" },
    { "3rd": "ó" },
    { "nosotros": "amos" },
    { "vosotros": "asteis" },
    { "3rd plural": "aron" },
  ];
  let conditional = [
    { "yo": "aría" },
    { "tú": "arías" },
    { "3rd": "aría" },
    { "nosotros": "aríamos" },
    { "vosotros": "aríais" },
    { "3rd plural": "arían" },
  ];
  let imperfect = [
    { "yo": "aba" },
    { "tú": "abas" },
    { "3rd": "aba" },
    { "nosotros": "ábamos" },
    { "vosotros": "abais" },
    { "3rd plural": "aban" },
  ];
  let future = [
    { "yo": "aré" },
    { "tú": "arás" },
    { "3rd": "ará" },
    { "nosotros": "aremos" },
    { "vosotros": "aréis" },
    { "3rd plural": "arán" },
  ];
  let presentParticiple = "ando";
  let pastParticiple = "ado";


}

export default TermAr;
