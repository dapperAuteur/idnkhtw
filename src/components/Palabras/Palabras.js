import React from 'react';
import PropTypes from 'prop-types';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import User from './../Users/User';
import Verbo from './../Verbos/Verbo';
import './../CSS/Palabras.css';

const Palabras = (props) => {
  console.log(props.findPalabra.word);
  let liveSearch = props.findPalabra.word;
  let myPalabras;
  let myProps = props.props.data.props;
  let p = props.p;
  let fourLetterWord;
  let fourLetterWords = [...myProps.fourLetterWords];
  let prefixSuffixRoot;
  let prefixSuffixRoots = [...myProps.prefixSuffixRoots];
  let user;
  let users = [...myProps.users];
  let verbo;
  let verbos = [...myProps.verbos];
  switch (p) {
    case "fourLetterWords/":
      myPalabras = fourLetterWords.filter(obj => {
        let newObj;
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
          props={ myProps } />
      ))
      break;
    case "prefixSuffixRoots/":
      myPalabras = prefixSuffixRoots.filter(obj => {
        let newObj;
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
          props={ myProps } />
      ))
      break;
    case "users/":
      myPalabras = users.map(obj => (
        <User
          user={ obj }
          id={ obj._id }
          username={ obj.username }
          key={ obj._id }
          props={ myProps } />
      ))
      break;
    case "verbos/":
      myPalabras = verbos.filter((obj) => {
        let newObj;
        if (obj.spanish.search(liveSearch) > 0) {
          newObj = obj.spanish.search(liveSearch);
        } else if (obj.english.search(liveSearch) > 0) {
          newObj = obj.english.search(liveSearch);
        }else {
          newObj = obj.english.search(liveSearch);
        }
        return verbos[newObj];
      }).map(filteredVerbo => (
        <Verbo
          verbo={ filteredVerbo }
          id={ filteredVerbo._id }
          spanish={ filteredVerbo.spanish }
          english={ filteredVerbo.english }
          key={ filteredVerbo._id }
          props={ myProps }/>
      ))
      break;
    default:
  }
  return (
    <div className='palabras'>
      { myPalabras }
    </div>
  )
}

export default Palabras;
