import React from 'react';
import PropTypes from 'prop-types';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import User from './../Users/User';
import Verbo from './../Verbos/Verbo';
import './../CSS/Palabras.css';

const Palabras = (props) => {
  console.log(props);
  console.log(props.findPalabra.word);
  let liveSearch = props.findPalabra.word;
  let myPalabras;
  let myProps = props.props.data.props;
  let onSetObjInState = props.props.data.onSetObjInState;
  console.log(onSetObjInState);
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
          key={ obj._id }
          id={ obj._id }
          fourLetterWord={ obj }
          definition={ obj.definition }
          word={ obj.word }
          onSetObjInState={ onSetObjInState }
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
          key={ obj._id }
          id={ obj._id }
          prefixSuffixRoot={ obj }
          word={ obj.word }
          onSetObjInState={ onSetObjInState }
          props={ myProps } />
      ))
      break;
    case "users/":
      myPalabras = users.map(obj => (
        <User
          key={ obj._id }
          id={ obj._id }
          user={ obj }
          username={ obj.username }
          onSetObjInState={ onSetObjInState }
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
          key={ filteredVerbo._id }
          id={ filteredVerbo._id }
          verbo={ filteredVerbo }
          spanish={ filteredVerbo.spanish }
          english={ filteredVerbo.english }
          onSetObjInState={ onSetObjInState }
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
