import React from 'react';
import PropTypes from 'prop-types';
import * as espVerbos from './../../../actions/conjugateEspVerbos';
import * as espVerbosIr from './../../../actions/conjugateEspVerbosIrregular';

const VerboRoot = (props) => {
  console.log(props);
  let verboRoot = props.verboRoot;
  let verboConjugate = verboRoot + espVerbos.ArPresentParticiple;

  // console.log(verboRoot + espVerbos.ArPresentParticiple);
  // console.log(espVerbos.ArImperfect);
  return (
    <h4>
      { verboConjugate }
    </h4>
  );

}

export default VerboRoot;
