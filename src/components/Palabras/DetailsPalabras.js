import React from 'react';
import DetailsFourLetterWord from '../FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../Verbos/DetailsVerbo';
import PalabrasButtons from './PalabrasButtons';
import PropTypes from 'prop-types';

const DetailsPalabras = (props) => {
  console.log(props);
  let pathname = props.location.pathname;
  console.log(pathname);

  let { fourLetterWord, prefixSuffixRoot, verbo } = props.data.props;
  // load next random word
  let p = props.location.hash.slice(1);
  console.log(props);
  console.log(p);
  console.log(fourLetterWord, prefixSuffixRoot, verbo);
  switch (p) {
    case "fourLetterWords":
      fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
      break;
    case "prefixSuffixRoots":
      prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
      break;
    case "verbos":
      verbo = JSON.parse(localStorage.getItem("verbo"));
      break;
    default:

  }


  return(
    <div>
      <h1>Random Palabra</h1>
      {
        p === "fourLetterWords" &&
        <DetailsFourLetterWord
          props={ props }
          fourLetterWord={ fourLetterWord } />
      }
      {
        p === "prefixSuffixRoots" &&
        <DetailsPrefixSuffixRoot
          props={ props }
          prefixSuffixRoot={ prefixSuffixRoot } />
      }
      {
        p === "verbos" &&
        <DetailsVerbo
          props={ props }
          verbo={ verbo } />
      }
      <PalabrasButtons props={ props }/>
    </div>
  )
}

DetailsPalabras.propTypes = {
  p: PropTypes.string
}

export default DetailsPalabras;
