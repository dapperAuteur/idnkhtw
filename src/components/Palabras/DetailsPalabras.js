import React from 'react';
import { connect } from 'react-redux';
import DetailsFourLetterWord from '../FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../Verbos/DetailsVerbo';
import FindPalabra from './FindPalabra';
import PalabrasButtons from './PalabrasButtons';
import PropTypes from 'prop-types';

const DetailsPalabras = (props) => {
  console.log(props);
  let location = props.location;
  let fourLetterWord, prefixSuffixRoot, showEnglish, verbo;
  // if (typeof(Storage) !== "undefined") {
  //   fourLetterWord = JSON.parse(localStorage.getItem('fourLetterWord'));
  //   prefixSuffixRoot = JSON.parse(localStorage.getItem('prefixSuffixRoot'));
  //   verbo = JSON.parse(localStorage.getItem('verbo'));
  // } else {
  //   fourLetterWord = props.data.fourLetterWord;
  //   prefixSuffixRoot = props.data.prefixSuffixRoot;
  //   verbo = props.data.verbo;
  // }
  fourLetterWord = props.data.fourLetterWord;
  prefixSuffixRoot = props.data.prefixSuffixRoot;
  showEnglish = props.data.showEnglish;
  verbo = props.data.verbo;
  let {
    fourLetterWords,
    prefixSuffixRoots,
    users,
    verbos
  } = props;
  // let randomWord = location.state.randomWord;
  // if (randomWord) {
  //   fourLetterWord = JSON.parse(localStorage.getItem('fourLetterWord'));
  //   prefixSuffixRoot = JSON.parse(localStorage.getItem('prefixSuffixRoot'));
  //   verbo = JSON.parse(localStorage.getItem('verbo'));
  // } else {
  //   fourLetterWord = location.state.wordObj;
  //   prefixSuffixRoot = location.state.wordObj;
  //   verbo = location.state.wordObj;
  // }
  let {
    onLoadPalabra,
    onLoadRandomPalabra,
    onShowEnglish
  } = props;
  let { pathname } = location;

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
      return (
        <div>
          <DetailsFourLetterWord
            props={ props }
            fourLetterWord={ fourLetterWord } />
          <PalabrasButtons
            props={ props }/>
        </div>
      )
      break;
    case "/words/prefix-suffix-root":
      return (
        <div>
          <DetailsPrefixSuffixRoot
            props={ props }
            prefixSuffixRoot={ prefixSuffixRoot } />
          <PalabrasButtons
            props={ props }/>
        </div>
      )
      break;
    case "/words/verbo":
      return (
        <div>
          <DetailsVerbo
            props={ props }
            showEnglish={ showEnglish }
            verbo={ verbo } />
          <PalabrasButtons
            onShowEnglish={ onShowEnglish }
            props={ props }/>
        </div>
      )
      break;
    default:
  }
}

DetailsPalabras.propTypes = {
}

const mapStateToProps = state => {
  return {
    fourLetterWords: state.fourLetterWordReducer.fourLetterWords,
    prefixSuffixRoots: state.prefixSuffixRootReducer.prefixSuffixRoots,
    verbos: state.verboReducer.verbos
  }
}

export default connect(mapStateToProps)(DetailsPalabras);
