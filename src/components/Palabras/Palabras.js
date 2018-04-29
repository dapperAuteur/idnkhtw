import React from 'react';
import FourLetterWord from './../FourLetterWords/FourLetterWord';
import PrefixSuffixRoot from './../PrefixSuffixRoots/PrefixSuffixRoot';
import User from './../Users/User';
import Verbo from './../Verbos/Verbo';
import './../CSS/Palabras.css';

const Palabras = (props) => {
  console.log(props);
  let liveSearch = props.findPalabra.word;
  let fourLetterWord, myPalabras, newObj, prefixSuffixRoot, user, verbo;
  let p = props.p;
  let fourLetterWords = [...props.fourLetterWords];
  let prefixSuffixRoots = [...props.prefixSuffixRoots];
  // let users = [...props.users];
  let verbos = [...props.verbos];
  // console.log(verbos);
  switch (p) {
    case "four-letter-words/":
      myPalabras = fourLetterWords.filter(obj => {
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
      ))
      break;
    case "prefix-suffix-roots/":
      myPalabras = prefixSuffixRoots.filter(obj => {
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
      ))
      break;
    // case "users/":
    //   myPalabras = users.map(obj => (
    //     <User
    //       user={ obj }
    //       id={ obj._id }
    //       username={ obj.username }
    //       key={ obj._id }
    //       props={ props } />
    //   ))
    //   break;
    case "verbos/":
      myPalabras = verbos.filter((obj) => {
        // console.log(obj);
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
          props={ props }/>
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
