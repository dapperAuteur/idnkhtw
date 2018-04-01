import React from 'react';

const DetailsVerbo = (props) => {

  let verbo = props.verbo;
  
  if (verbo === null || verbo === undefined) {
    verbo = JSON.parse(localStorage.getItem("verbo"));
    return null;
  } else {
    return (
      <div>
        <h1>Details of Random Spanish Verb: { verbo.spanish }</h1>
        <h3>Group: { verbo.group }</h3>
        <h3>Translation: { verbo.english }</h3>
        <h3>Reflexive: { verbo.reflexive }</h3>
        <h3>Irregular: { verbo.irregular }</h3>
        <h3>Categoría de Irregular: { verbo.categoría_de_irregular }</h3>
        <h3>Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
      </div>
    )
  }
}

export default DetailsVerbo;
