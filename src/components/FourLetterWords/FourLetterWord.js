import React from 'react';
import * as actions from './../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';


const FourLetterWord = (props) => {
  let {
    definition,
    fourLetterWord,
    setFourLetterWord,
    word
  } = props;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/four-letter-words'
        }}
        onClick={ e => setFourLetterWord(fourLetterWord) }
        >
        { word } : { definition }
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setFourLetterWord: (fourLetterWord) => dispatch(actions.setFourLetterWord(fourLetterWord))
  }
}
export default connect(null, mapDispatchToProps)(FourLetterWord);
