import React from 'react';
import IrregularCategoria from './IrregularCategoria';
import './DetailsVerbo.css';

const DetailsVerbo = (props) => {

  let verbo = props.verbo;
  let grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
  // if (typeof verbo.grupo === "number") {
  //   grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
  //   console.log(grupo);
  // } else {
  //   grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
  // }

  if (verbo === null || verbo === undefined) {
    verbo = JSON.parse(localStorage.getItem("verbo"));
    return null;
  } else {
    return (
      <div>
        <h1>{ verbo.spanish }</h1>
        { grupo }
        <h3>English: { verbo.english }</h3>
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
