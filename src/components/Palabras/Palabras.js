import React from 'react';
import PropTypes from 'prop-types';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import User from './../Users/User';
import Verbo from './../Verbos/Verbo';

const Palabras = (props) => {
  console.log(props);
  let myPalabras;
  let myProps = props.props.data.props;
  let p = props.p;
  let fourLetterWords = [...myProps.fourLetterWords];
  let prefixSuffixRoots = [...myProps.prefixSuffixRoots];
  let users = [...myProps.users];
  let verbos = [...myProps.verbos];
  console.log(p, fourLetterWords, prefixSuffixRoots, verbos);
  switch (p) {
    case "fourLetterWords/":
      console.log(p);
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
      console.log(p);
      myPalabras = prefixSuffixRoots.map(wordObj => (
        <PrefixSuffixRoot
          id={ wordObj._id }
          word={ wordObj.word }
          key={ wordObj._id }
          props={ myProps } />
      ))
      break;
    case "users/":
      console.log(p);
      myPalabras = users.map(wordObj => (
        <User
          id={ wordObj._id }
          username={ wordObj.username }
          key={ wordObj._id }
          props={ myProps } />
      ))
      break;
    case "verbos/":
      console.log(p);
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
    <div>
      { p }
      { myPalabras }
    </div>
  )
}

export default Palabras;
