import React from 'react';
import DetailsFourLetterWord from '../FourLetterWords/DetailsFourLetterWord';
import DetailsPrefixSuffixRoot from '../PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../Verbos/DetailsVerbo';
import PropTypes from 'prop-types';

const DetailsPalabras = (props) => {
  console.log(props);
  let pathname = props.location.pathname;
  console.log(pathname);

  const { fourLetterWord, prefixSuffixRoot, verbo } = props.data.props;
  // load next random word
  let p = props.location.hash.slice(1);
  const { onLoadRandomPalabra } = props.data;
  console.log(props);
  console.log(p);
  console.log(onLoadRandomPalabra);
  console.log(fourLetterWord, prefixSuffixRoot, verbo);


  return(
    <div>
      <h1>Random Palabra</h1>
      { p === "fourLetterWords" && <DetailsFourLetterWord props={ props }/> }
      { p === "prefixSuffixRoots" && <DetailsPrefixSuffixRoot props={ props }/> }
      { p === "verbos" && <DetailsVerbo props={ props }/> }
    </div>
  )
}

DetailsPalabras.propTypes = {
  p: PropTypes.string
}

export default DetailsPalabras;
