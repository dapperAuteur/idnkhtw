import React from 'react';

const EnglishTranslation = (props) => {
  let verbo = props.verbo;
  console.log(props);

  return (
    <div>
      <h3>English: { verbo.english }</h3>
    </div>
  )
}

export default EnglishTranslation;
