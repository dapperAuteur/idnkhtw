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
      myPalabras = fourLetterWords.map(obj => (
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
      myPalabras = prefixSuffixRoots.map(obj => (
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
      myPalabras = verbos.map(obj => (
        <Verbo
          verbo={ obj }
          id={ obj._id }
          spanish={ obj.spanish }
          translation={ obj.english }
          key={ obj._id }
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
