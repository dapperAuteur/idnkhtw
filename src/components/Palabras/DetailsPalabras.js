import React from 'react';
import DetailsFourLetterWord from '../FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../Verbos/DetailsVerbo';
import FindPalabra from './FindPalabra';
import PalabrasButtons from './PalabrasButtons';
import PropTypes from 'prop-types';

const DetailsPalabras = (props) => {
  // console.log(props);
  let location = props.location;
  let fourLetterWord, prefixSuffixRoot, verbo;
  fourLetterWord = JSON.parse(localStorage.getItem('fourLetterWord'));
  prefixSuffixRoot = JSON.parse(localStorage.getItem('prefixSuffixRoot'));
  verbo = JSON.parse(localStorage.getItem('verbo'));
  let { fourLetterWords, prefixSuffixRoots, users, verbos } = props.data.props;
  // let randomWord = location.state.randomWord;
  // if (randomWord) {
  //   // console.log(randomWord, 0);
  //   fourLetterWord = JSON.parse(localStorage.getItem('fourLetterWord'));
  //   prefixSuffixRoot = JSON.parse(localStorage.getItem('prefixSuffixRoot'));
  //   verbo = JSON.parse(localStorage.getItem('verbo'));
  // } else {
  //   // console.log(randomWord, 1);
  //   fourLetterWord = location.state.wordObj;
  //   prefixSuffixRoot = location.state.wordObj;
  //   verbo = location.state.wordObj;
  // }
  let { onLoadPalabra, onLoadRandomPalabra } = props;
  let { pathname } = location;
  // console.log(pathname);

  switch (pathname) {
    case "/words/find-palabra":
      return (
        <div>
          <FindPalabra
            props={ props }
            fourLetterWords={ fourLetterWords }
            onLoadPalabra={ onLoadPalabra }
            prefixSuffixRoots={ prefixSuffixRoots }
            verbos={ verbos } />
        </div>
      )
      break;
    case "/words/four-letter-word":
    // console.log(fourLetterWord);

      return (
        <div>
          <DetailsFourLetterWord
            props={ props }
            fourLetterWord={ fourLetterWord } />
          <PalabrasButtons props={ props }/>
        </div>
      )
      break;
    case "/words/prefix-suffix-root":
    // console.log(prefixSuffixRoot);
      return (
        <div>
          <DetailsPrefixSuffixRoot
            props={ props }
            prefixSuffixRoot={ prefixSuffixRoot } />
          <PalabrasButtons props={ props }/>
        </div>
      )
      break;
    case "/words/verbo":
    // console.log(verbo);
      return (
        <div>
          <DetailsVerbo
            props={ props }
            verbo={ verbo } />
          <PalabrasButtons props={ props }/>
        </div>
      )
      break;
    default:
  }
}

DetailsPalabras.propTypes = {
}

export default DetailsPalabras;
