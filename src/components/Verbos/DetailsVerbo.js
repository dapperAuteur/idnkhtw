import React from 'react';
import { Link } from 'react-router-dom';

const DetailsVerbo = (props) => {
  console.log(props);
  const verbo = props.props.data.props.verbo;
  console.log(verbo);
  const onDelete = props.props.data.onDelete;
  const onLoadRandomPalabra = props.props.data.onLoadRandomPalabra;
  // const p = 'verbos/';

  return (
    <div>
      <h1>Details of Random Spanish Verb: { verbo.spanish }</h1>
      <h3>Group: { verbo.group }</h3>
      <h3>Translation: { verbo.english }</h3>
      <h3>Reflexive: { verbo.reflexive }</h3>
      <h3>Irregular: { verbo.irregular }</h3>
      <h3>Categoría de Irregular: { verbo.categoría_de_irregular }</h3>
      <h3>Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
      <button
        onClick={ onLoadRandomPalabra }
        className="btn btn-default">
        Next Verbo
      </button>
      <button
        onClick={ onDelete }
        className="btn btn-danger">
        Delete Verbo
      </button>
      { verbo.spanish === '' ?
        null
        :
        <Link
          to={ '/words/update/verbo' }
          id="UpdateVerbo"
          className="btn btn-default">
          EDIT
        </Link>
      }
    </div>
  )
}

export default DetailsVerbo;
