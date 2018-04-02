import React from 'react';

const ShowPalabra =(props) => {
  console.log(props);
  let myHash = props.location.hash;
  console.log(myHash);
  let locationState = props.location.state;
  console.log(locationState);
  let wordObj = locationState.wordObj;
  console.log(wordObj);

  switch (myHash) {
    case "#fourLetterWords":
    return(
        <div>
          { wordObj.word }: { wordObj.definition }
        </div>
      )
      break;
    case "#prefixSuffixRoots":
    return(
        <div>
          { wordObj.word }: { wordObj.definition }
        </div>
      )
      break;
    case "#users":
    return(
        <div>
          { wordObj.username }: { wordObj.email }
        </div>
      )
      break;
    case "#verbos":
    return(
        <div>
          { wordObj.spanish }: { wordObj.english }
        </div>
      )
      break;
    default:

  }
}

export default ShowPalabra;
