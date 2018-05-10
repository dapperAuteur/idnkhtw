import React from 'react';
import * as conjVerb from './../../../actions/conjugateEspVerbos';
import * as conjVerbIr from './../../../actions/conjugateEspVerbosIrregular';
import IrregularAr from './IrregularAr';
import IrregularEr from './IrregularEr';
import IrregularIr from './IrregularIr';
import RegularAr from './RegularAr';
import RegularEr from './RegularEr';
import RegularIr from './RegularIr';
import VerboRoot from './VerboRoot';

const Conjugar = (props) => {
  console.log(props);
  console.log(conjVerb);

  let verbo = props.props.verbo;
  console.log(verbo);
  let conjugatedVerbo, conjugatedVerbos, termination, verboRoot, verboString, verboTermination;
  let {
    showArVerbo,
    showErVerbo,
    showIrVerbo
  } = props;
  if (verbo !== undefined || verbo !== "undefined") {
    console.log(verbo);
    conjugatedVerbos = conjVerb.arPresentVerbos(verbo.spanish, conjVerb.AR_PRESENT);
    conjugatedVerbos = conjVerb.AR_PRESENT.map(verbo => (
      <VerboRoot
        verboRoot={ verboRoot }
        props={ props } />
    ));
    return (
      { conjugatedVerbos }
    );
    // return (
    //   <VerboRoot
    //     verboRoot={ verboRoot }
    //     props={ props } />
    // )
  }
}
// const Conjugar = (props) => {
//   console.log(props);
//   let verbo = props.verbo;
//   let termination, verboRoot, verboString, verboTermination;
//   let { showArVerbo, showErVerbo, showIrVerbo } = props;
//   console.log(showArVerbo);
//   if (verbo === undefined) {
//     return null;
//   } else if (verbo.reflexive == true && verbo.irregular == false) {
//     // remove last 2 letters
//     verboString = verbo.spanish.slice(0, -2);
//     console.log(verboString);
//     // then take next last 2 letters to create switch statement
//     verboRoot = verboString.slice(0, -2);
//     console.log(verboRoot);
//     // set verb termination to a variable to use as switch cases
//     verboTermination = verboString.slice(-2);
//     console.log(verboTermination);
//     termination = verbo.terminación;
//     switch (termination) {
//       case "-ar":
//       return (
//         <RegularAr
//           verbo={ verbo }
//           verboRoot={ verboRoot }
//           props={ props } />
//       )
//
//         break;
//       case "-er":
//         return (
//           <RegularEr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       case "-ir":
//         return (
//           <RegularIr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       default:
//         return null;
//     }
//   } else if (verbo.reflexive == false && verbo.irregular == false) {
//     verboRoot = verbo.spanish.slice(0, -2);
//     console.log(verboRoot);
//     switch (termination) {
//       case "-ar":
//       return (
//         <RegularAr
//           verbo={ verbo }
//           verboRoot={ verboRoot }
//           props={ props } />
//       )
//
//         break;
//       case "-er":
//         return (
//           <RegularEr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       case "-ir":
//         return (
//           <RegularIr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       default:
//         return null;
//     }
//   } else if (verbo.reflexive == true && verbo.irregular == true) {
//     verboRoot = verbo.spanish.slice(0, -4);
//     console.log(verboRoot);
//     switch (termination) {
//       case "-ar":
//       return (
//         <IrregularAr
//           verbo={ verbo }
//           verboRoot={ verboRoot }
//           props={ props } />
//       )
//
//         break;
//       case "-er":
//         return (
//           <IrregularEr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       case "-ir":
//         return (
//           <IrregularIr
//             verbo={ verbo }
//             verboRoot={ verboRoot }
//             props={ props } />
//         )
//
//         break;
//       default:
//         return null;
//     }
//   } else if (verbo.reflexive == false && verbo.irregular == true) {
//     verboRoot = verbo.spanish.slice(0, -2);
//     console.log(verboRoot);
//     // switch (termination) {
//     //   case "-ar":
//     //   return (
//     //     <IrregularAr
//     //       verbo={ verbo }
//     //       verboRoot={ verboRoot }
//     //       props={ props } />
//     //   )
//     //
//     //     break;
//     //   case "-er":
//     //     return (
//     //       <IrregularEr
//     //         verbo={ verbo }
//     //         verboRoot={ verboRoot }
//     //         props={ props } />
//     //     )
//     //
//     //     break;
//     //   case "-ir":
//     //     return (
//     //       <IrregularIr
//     //         verbo={ verbo }
//     //         verboRoot={ verboRoot }
//     //         props={ props } />
//     //     )
//     //
//     //     break;
//     //   default:
//     //     return null;
//     // }
//   }
// }

export default Conjugar;
