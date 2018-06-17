import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';

const DetailsPrefixSuffixRoot = (props) => {
  let {
    currentUser,
    onDeletePrefixSuffixRoot,
    onRandomPrefixSuffixRoot,
    prefixSuffixRoot
  } = props;


  return (
    <div>
      <h1>{ prefixSuffixRoot.word }</h1>
      <h3>Type: { prefixSuffixRoot.type }</h3>
      <h3>Meaning: { prefixSuffixRoot.meaning }</h3>
      <h3>Examples: { prefixSuffixRoot.examples }</h3>
        {
          currentUser.userRole === 0 &&
          <div>
            <button
              onClick={ onDeletePrefixSuffixRoot }
              className="btn btn-danger"
              >
              Delete Word
            </button>
            <Link
              to={{
                pathname: '/words/prefix-suffix-roots/edit'
              }}
              className="btn btn-warning"
              >
              EDIT
            </Link>
          </div>
        }
        <Link
          to={{
            pathname: '/words/prefix-suffix-root'
          }}
          onClick={ onRandomPrefixSuffixRoot }
          className="btn btn-default">
          Next Word
        </Link>
    </div>
  )
}

export const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    prefixSuffixRoot: state.prefixSuffixRootReducer.prefixSuffixRoot
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    onDeletePrefixSuffixRoot: () => dispatch(actions.deletePrefixSuffixRoot()),
    onRandomPrefixSuffixRoot: () => dispatch(actions.randomPrefixSuffixRoot()),
    onShowEnglish: () => dispatch(actions.showEnglish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPrefixSuffixRoot);
