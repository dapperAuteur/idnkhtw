import React from 'react';
import './DetailsVerbo.css';

const DetailsVerbo = (props) => {

  let verbo = props.verbo;
  let reflexive = verbo.reflexive;
  let irregular = verbo.irregular;
  let group = verbo.group.toString();
  console.log(group);

  if (verbo === null || verbo === undefined) {
    verbo = JSON.parse(localStorage.getItem("verbo"));
    return null;
  } else {
    return (
      <div>
        <h1>{ verbo.spanish }</h1>
        <h3>Group: { group }</h3>
        <h3>English: { verbo.english }</h3>
        {
          reflexive &&
        <h3 className="hightLight">Reflexive</h3>
        }
        {
          irregular &&
          <div className="hightLight">
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
