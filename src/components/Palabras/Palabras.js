import React from 'react';
import PropTypes from 'prop-types';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import User from './../Users/User';
import Verbo from './../Verbos/Verbo';
import './../CSS/Palabras.css';

const Palabras = (props) => {
  let myPalabras;
  let myProps = props.props.data.props;
  let p = props.p;
  let fourLetterWords = [...myProps.fourLetterWords];
  let prefixSuffixRoots = [...myProps.prefixSuffixRoots];
  let users = [...myProps.users];
  let verbos = [...myProps.verbos];
  switch (p) {
    case "fourLetterWords/":
      myPalabras = fourLetterWords.map(wordObj => (
        <FourLetterWord
          definition={ wordObj.definition }
          id={ wordObj._id }
          word={ wordObj.word }
          key={ wordObj._id }
          props={ myProps } />
      ))
      break;
    case "prefixSuffixRoots/":
      myPalabras = prefixSuffixRoots.map(wordObj => (
        <PrefixSuffixRoot
          id={ wordObj._id }
          word={ wordObj.word }
          key={ wordObj._id }
          props={ myProps } />
      ))
      break;
    case "users/":
      myPalabras = users.map(wordObj => (
        <User
          id={ wordObj._id }
          username={ wordObj.username }
          key={ wordObj._id }
          props={ myProps } />
      ))
      break;
    case "verbos/":
      myPalabras = verbos.map(wordObj => (
        <Verbo
          id={ wordObj._id }
          spanish={ wordObj.spanish }
          translation={ wordObj.english }
          key={ wordObj._id }
          props={ myProps } />
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
