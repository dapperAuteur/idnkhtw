import React from 'react';
// import Conjugar from './ConjugarComponents/Conjugar';
import IrregularCategoria from './IrregularCategoria';
import EnglishTranslation from './EnglishTranslation';
import './DetailsVerbo.css';

const DetailsVerbo = (props) => {
  console.log(props);
  let grupo;
  let showEnglish = props.showEnglish;
  let verbo = props.verbo;

  if (typeof verbo.grupo === "number") {
    grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
    console.log(grupo);
  }
  console.log(english);
  if (verbo === null || verbo === undefined) {
    verbo = JSON.parse(localStorage.getItem("verbo"));
    return null;
  } else {
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
      </div>
    )
  }
}

export default DetailsVerbo;
