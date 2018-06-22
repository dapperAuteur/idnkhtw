import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';

const DetailsFourLetterWord = (props) => {
  let {
    currentUser,
    onDeleteFourLetterWord,
    onRandomFourLetterWord,
    fourLetterWord
  } = props;

  return (
    <div>
      <h1>{ fourLetterWord.word }</h1>
      <h3>Tier: { fourLetterWord.tier }</h3>
      <h3>Definition: { fourLetterWord.definition }</h3>
        {
          currentUser.userRole === 0 &&
          <div>
            <button
              onClick={ onDeleteFourLetterWord }
              className="btn btn-danger"
              >
              Delete Word
            </button>
            <Link
              to={{
                pathname: '/words/four-letter-words/edit'
              }}
              className="btn btn-warning"
              >
              EDIT
            </Link>
          </div>
        }
        <Link
          to={{
            pathname: '/words/four-letter-words'
          }}
          onClick={ onRandomFourLetterWord }
          className="btn btn-default">
          Next Word
        </Link>
    </div>
  );
}

export const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    fourLetterWord: state.fourLetterWordReducer.fourLetterWord
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFourLetterWord: () => dispatch(actions.deleteFourLetterWord()),
    onRandomFourLetterWord: () => dispatch(actions.randomFourLetterWord())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsFourLetterWord);
