import React from 'react';

const Conjugar = (props) => {
  let verbo = props.verbo;
  let termination, verboRoot, verboString, verboTermination;
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
        // present
        // preterite
        // imperfect
        // conditional
        // future
        // present participle
        // past participle

        break;
      case "-er":

        break;
      case "-ir":

        break;
      default:

    }
  } else if (verbo.reflexive == false && verbo.irregular == false) {
    verboRoot = verbo.spanish.slice(0, -2);
    console.log(verboRoot);
  }

  let xr = verbo.spanish.slice(-2);
  console.log(xr);
  return (
    <div>
      <h3>{ xr }</h3>
    </div>
  )
}

export default Conjugar;
