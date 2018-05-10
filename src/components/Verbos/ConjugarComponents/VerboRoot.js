import React from 'react';
import PropTypes from 'prop-types';
import * as espVerbos from './../../../actions/conjugateEspVerbos';
import * as espVerbosIr from './../../../actions/conjugateEspVerbosIrregular';

const VerboRoot = (props) => {
  console.log(props);
  let verboRoot = props.verboRoot;
  let verboConjugate = verboRoot + espVerbos.AR_PRESENT_PARTICIPLE;

  // console.log(verboRoot + espVerbos.AR_PRESENT_PARTICIPLE);
  // console.log(espVerbos.AR_IMPERFECT);
  return (
    <h4>
      { verboConjugate }
    </h4>
  );

}

export default VerboRoot;
