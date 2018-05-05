import React from 'react';
import Conjugar from './ConjugarComponents/Conjugar';
import IrregularCategoria from './IrregularCategoria';
import EnglishTranslation from './EnglishTranslation';
import './DetailsVerbo.css';
// import VerboRoot from './ConjugarComponents/VerboRoot';

const DetailsVerbo = (props) => {
  console.log(props);
  let grupo;
  let showArVerbo = props.showArVerbo;
  let showErVerbo = props.showErVerbo;
  let showIrVerbo = props.showIrVerbo;
  let showEnglish = props.showEnglish;
  let verbo = props.verbo;

  if (typeof verbo.grupo === "number") {
    grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
    console.log(grupo);
  }
  if (verbo === null || verbo === undefined) {
    verbo = JSON.parse(localStorage.getItem("verbo"));
    return null;
  } else {
    let verboRoot = verbo.spanish;
    return (
      <div>
        <h1>{ verbo.spanish }</h1>
        <h3>{ verbo.terminación }</h3>
        { grupo }
        {
          showEnglish &&
          <h3>English: { verbo.english }</h3>
        }
        {
          verbo.reflexive &&
        <h3 className="reflexive">Reflexive</h3>
        }
        {
          verbo.irregular &&
          <IrregularCategoria
            verbo={ verbo } />
        }
        <Conjugar
          showArVerbo={ showArVerbo }
          showErVerbo={ showErVerbo }
          showIrVerbo={ showIrVerbo }
          props={ props } />
      </div>
    )
  }
}

export default DetailsVerbo;
