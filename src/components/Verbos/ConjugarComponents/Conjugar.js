import React from 'react';
import IrregularAr from './IrregularAr';
import IrregularEr from './IrregularEr';
import IrregularIr from './IrregularIr';
import RegularAr from './RegularAr';
import RegularEr from './RegularEr';
import RegularIr from './RegularIr';
import VerboRoot from './VerboRoot';

const Conjugar = (props) => {
  console.log(props);

  let verbo = props.props.verbo;
    let termination, verboRoot, verboString, verboTermination;
    let { showArVerbo, showErVerbo, showIrVerbo } = props;
    if (verbo === null || verbo === undefined) {
      verbo = JSON.parse(localStorage.getItem("verbo"));
      return null;
    } else {
      console.log(showArVerbo, verboRoot);
      verboRoot = verbo.spanish;
      return (
        <VerboRoot
          verboRoot={ verboRoot }
          props={ props } />
      )
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
