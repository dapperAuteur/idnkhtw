import React from 'react';

const IrregularCategoria = (props) => {
  let cambiar = [
    0,
    "O x UE",
    "E x IE",
    "E x I",
    "Z antes de C",
    "-GO",
    "-OY",
    "IR x VOY",
    "-UIR X Y",
    "E x I",
    "E x I",
  ];
  let categoría = [
    0,
    "Cambian O x UE (excepto la primera persona del plural)",
    "Cambian E x IE (excepto la primera persona del plural)",
    "Verbos que cambian E x I (excepto la primera persona plural)",
    "Verbos terminados en CER/CIR les agregamos Z antes de C (solamente en la primera persona del singular)",
    "Verbos que cambian su terminación a GO solamente en la primera",
    "Verbos que llevan 'Y' (Solamente en la primera singular).",
    "Verbos más/muy irregulares",
    "Verbos con terminación 'UIR' cambian la '1' del infinitivo por 'Y' (excepto la primera y segunda persona plural).",
    "Verbos con terminación GER/GIR cambian 'G' por 'J' solamente en la primera persona singular",
    "Verbos con terminación GUIR a) Cambian la E por I en toda su estructura excepto en la lera. p plural b) Pierden la U del infinitivo solamente en la primera persona del singular.",
  ];

  let verbo = props.verbo;
  switch (verbo.grupo) {
    case 1:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[1] }</h3>
          <h3>Cambiar de Irregular: { cambiar[1] }</h3>
        </div>
      )
    case 2:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[2] }</h3>
          <h3>Cambiar de Irregular: { cambiar[2] }</h3>
        </div>
      )
    case 3:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[3] }</h3>
          <h3>Cambiar de Irregular: { cambiar[3] }</h3>
        </div>
      )
    case 4:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[4] }</h3>
          <h3>Cambiar de Irregular: { cambiar[4] }</h3>
        </div>
      )
    case 5:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[5] }</h3>
          <h3>Cambiar de Irregular: { cambiar[5] }</h3>
        </div>
      )
    case 5.1:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[5] }</h3>
          <h3>Cambiar de Irregular: { cambiar[5] }</h3>
        </div>
      )
    case 5.2:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[5] }</h3>
          <h3>Cambiar de Irregular: { cambiar[5] }</h3>
        </div>
      )
    case 5.3:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[5] }</h3>
          <h3>Cambiar de Irregular: { cambiar[5] }</h3>
        </div>
      )
    case 6:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[6] }</h3>
          <h3>Cambiar de Irregular: { cambiar[6] }</h3>
        </div>
      )
    case 7:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[7] }</h3>
          <h3>Cambiar de Irregular: { cambiar[7] }</h3>
        </div>
      )
    case 8:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[8] }</h3>
          <h3>Cambiar de Irregular: { cambiar[8] }</h3>
        </div>
      )
    case 9:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[9] }</h3>
          <h3>Cambiar de Irregular: { cambiar[9] }</h3>
        </div>
      )
    case 10:
      return (
        <div className="irregular">
          <h3>Categoría de Irregular: { categoría[10] }</h3>
          <h3>Cambiar de Irregular: { cambiar[10] }</h3>
        </div>
      )
    default:
      return null;
  }
}

export default IrregularCategoria;
