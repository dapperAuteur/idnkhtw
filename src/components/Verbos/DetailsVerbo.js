import React from 'react';
import './DetailsVerbo.css';

const DetailsVerbo = (props) => {

  let verbo = props.verbo;
  let grupo
  if (typeof verbo.grupo === "number") {
    grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
    console.log(grupo);
  }

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
          <div className="irregular">
            <h3>Irregular</h3>
            <h3>Categoría de Irregular: { verbo.categoría_de_irregular }<br />
              Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
          </div>
        }
      </div>
    )
  }
}

export default DetailsVerbo;
