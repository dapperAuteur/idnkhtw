import React from 'react';
import DetailsFourLetterWord from '../FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../Verbos/DetailsVerbo';
import PalabrasButtons from './PalabrasButtons';
import PropTypes from 'prop-types';

const DetailsPalabras = (props) => {
  console.log(props);
  let location = props.location;
  let locationState = location.state;
  let { hash, pathname } = location;

  let { fourLetterWord, fourLetterWords, onRandomFourLetterWord, onRandomPrefixSuffixRoot, onRandomVerbo, prefixSuffixRoot, prefixSuffixRoots, verbo, verbos } = props;

  console.log(fourLetterWord, prefixSuffixRoot, verbo);
  let p = props.location.hash.slice(1);
  console.log(p);

  switch (p) {
    case "fourLetterWord":
      // fourLetterWord = locationState.wordObj;
      return (
        <div>
          <DetailsFourLetterWord
            props={ props }
            fourLetterWord={ fourLetterWord } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomFourLetterWord } />
        </div>
      )
      break;
    case "fourLetterWords":
      // fourLetterWord = JSON.parse(localStorage.getItem("fourLetterWord"));
      return (
        <div>
          <DetailsFourLetterWord
            props={ props }
            fourLetterWord={ fourLetterWord } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomFourLetterWord } />
        </div>
      )
      break;
    case "prefixSuffixRoot":
      prefixSuffixRoot = locationState.wordObj;
      return (
        <div>
          <DetailsPrefixSuffixRoot
            props={ props }
            prefixSuffixRoot={ prefixSuffixRoot } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomPrefixSuffixRoot } />
        </div>
      )
      break;
    case "prefixSuffixRoots":
      // prefixSuffixRoot = JSON.parse(localStorage.getItem("prefixSuffixRoot"));
      return (
        <div>
          <DetailsPrefixSuffixRoot
            props={ props }
            prefixSuffixRoot={ prefixSuffixRoot } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomPrefixSuffixRoot } />
        </div>
      )
      break;
    case "verbo":
      verbo = locationState.wordObj;
      return (
        <div>
          <DetailsVerbo
            props={ props }
            verbo={ verbo } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomVerbo } />
        </div>
      )
      break;
    case "verbos":
      // verbo = JSON.parse(localStorage.getItem("verbo"));
      return (
        <div>
          <DetailsVerbo
            props={ props }
            verbo={ verbo } />
          <PalabrasButtons
            props={ props }
            location={ location }
            onClick={ onRandomVerbo } />
        </div>
      )
      break;
    default:
  }
}

DetailsPalabras.propTypes = {
  p: PropTypes.string
}

export default DetailsPalabras;
