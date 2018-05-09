import React from 'react';
import PropTypes from 'prop-types';
import './GameVerbo.css';

const GameVerbo = props => {
  // const { verbo } = props;
  const verbo = props.data.props.verbo;
  let showHint = false;
  const hint = () => {
    showHint = !showHint;
    if (showHint) {
      return (
        <div>
          <h3>Reflexive: { verbo.reflexive }</h3>
          <h3>Irregular: { verbo.irregular }</h3>
          <h3>Categoría de Irregular: { verbo.categoría_de_irregular }</h3>
          <h3>Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
        </div>
      )
    }
  }
  return (
    <div className="GameVerbo">
      <h1>Spanish: <span className="spanish">{ verbo.spanish }</span></h1>
      <h2>English: <span className="english">{ verbo.english }</span></h2>
      { hint }
      <button className="btn">
        SHOW WORD
      </button>
      <button className="btn" onClick={ hint }>
        SHOW HINT
      </button>
    </div>
  )
}

GameVerbo.propTypes = {
  verbo: PropTypes.object
}

GameVerbo.defaultProps = {
  verbo: {
    "english": "to help",
    "reflexive": false,
    "irregular": false,
    "terminación": "-ar",
    "grupo": 0,
    "_id": "5a6d1177adce4c0fce1e4f18",
    "spanish": "ayudar"
  }
}
export default GameVerbo;
