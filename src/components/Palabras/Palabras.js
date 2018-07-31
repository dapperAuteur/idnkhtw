import React from 'react';
import { connect } from 'react-redux';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import Verbo from './../Verbos/Verbo';
import './../CSS/Palabras.css';

const Palabras = (props) => {
  // console.log(props);

  let {
    list,
    liveSearch,
    fourLetterWords,
    prefixSuffixRoots,
    verbos
  } = props;
  let newObj, palabras;
  switch (list) {
    case 'four-letter-words':
      palabras = fourLetterWords.filter(obj => {
        if (obj.word.search(liveSearch) > 0) {
          newObj = obj.word.search(liveSearch);
        } else if (obj.definition.search(liveSearch) > 0) {
          newObj = obj.definition.search(liveSearch);
        } else {
          newObj = obj.word.search(liveSearch);
        }
        return fourLetterWords[newObj];
      }).map(obj => (
        <FourLetterWord
          fourLetterWord={ obj }
          definition={ obj.definition }
          id={ obj._id }
          word={ obj.word }
          key={ obj._id }
          props={ props } />
      ));
      break;
    case 'prefix-suffix-roots':
      palabras = prefixSuffixRoots.filter(obj => {
        if (obj.word.search(liveSearch) > 0) {
          newObj = obj.word.search(liveSearch);
        } else if (obj.meaning.search(liveSearch) > 0) {
          newObj = obj.meaning.search(liveSearch);
        } else {
          newObj = obj.word.search(liveSearch);
        }
        return prefixSuffixRoots[newObj];
      }).map(obj => (
        <PrefixSuffixRoot
          prefixSuffixRoot={ obj }
          id={ obj._id }
          word={ obj.word }
          key={ obj._id }
          props={ props } />
      ));
      break;
    case 'verbos':
      palabras = verbos.filter(obj => {
        if (obj.spanish.search(liveSearch) > 0) {
          newObj = obj.spanish.search(liveSearch);
        } else if (obj.english.search(liveSearch) > 0) {
          newObj = obj.english.search(liveSearch);
        } else {
          newObj = obj.english.search(liveSearch);
        }
        return verbos[newObj];
      }).map(obj => (
        <Verbo
          verbo={ obj }
          id={ obj._id }
          spanish={ obj.spanish }
          english={ obj.english }
          key={ obj._id }
          props={ props } />
      ));
      break;
    default:
      return null;
  };
  return (
    <div>
      Palabras
      { palabras }
    </div>
  )
};
const mapStateToProps = state => {
  return {
    fourLetterWords: state.fourLetterWordReducer.fourLetterWords,
    prefixSuffixRoots: state.prefixSuffixRootReducer.prefixSuffixRoots,
    verbos: state.verboReducer.verbos
  }
}
export default connect(mapStateToProps)(Palabras);
