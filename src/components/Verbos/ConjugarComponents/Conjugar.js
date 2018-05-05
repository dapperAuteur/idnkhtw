import React from 'react';
import RegularAr from './RegularAr';
import RegularEr from './RegularEr';
import RegularIr from './RegularIr';

const Conjugar = (props) => {
  console.log(props);
  let verbo = props.verbo;
  let termination, verboRoot, verboString, verboTermination;
  console.log(verbo);
  if (verbo.reflexive == true && verbo.irregular == false) {
    // remove last 2 letters
    verboString = verbo.spanish.slice(0, -2);
    console.log(verboString);
    // then take next last 2 letters to create switch statement
    verboRoot = verboString.slice(0, -2);
    console.log(verboRoot);
    // set verb termination to a variable to use as switch cases
    verboTermination = verboString.slice(-2);
    console.log(verboTermination);
    termination = verbo.terminación;
    switch (termination) {
      case "-ar":
      return (
        <RegularAr
          verbo={ verbo }
          verboRoot={ verboRoot }
          props={ props } />
      )

        break;
      case "-er":
        return (
          <RegularEr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      case "-ir":
        return (
          <RegularIr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      default:
        return null;
    }
  } else if (verbo.reflexive == false && verbo.irregular == false) {
    verboRoot = verbo.spanish.slice(0, -2);
    console.log(verboRoot);
    switch (termination) {
      case "-ar":
      return (
        <RegularAr
          verbo={ verbo }
          verboRoot={ verboRoot }
          props={ props } />
      )

        break;
      case "-er":
        return (
          <RegularEr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      case "-ir":
        return (
          <RegularIr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      default:
        return null;
    }
  } else if (verbo.reflexive == true && verbo.irregular == true) {
    verboRoot = verbo.spanish.slice(0, -4);
    console.log(verboRoot);
    switch (termination) {
      case "-ar":
      return (
        <RegularAr
          verbo={ verbo }
          verboRoot={ verboRoot }
          props={ props } />
      )

        break;
      case "-er":
        return (
          <RegularEr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      case "-ir":
        return (
          <RegularIr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      default:
        return null;
    }
  } else if (verbo.reflexive == false && verbo.irregular == true) {
    verboRoot = verbo.spanish.slice(0, -2);
    console.log(verboRoot);
    switch (termination) {
      case "-ar":
      return (
        <RegularAr
          verbo={ verbo }
          verboRoot={ verboRoot }
          props={ props } />
      )

        break;
      case "-er":
        return (
          <RegularEr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      case "-ir":
        return (
          <RegularIr
            verbo={ verbo }
            verboRoot={ verboRoot }
            props={ props } />
        )

        break;
      default:
        return null;
    }
  }
}

export default Conjugar;
