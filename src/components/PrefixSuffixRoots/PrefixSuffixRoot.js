import React from 'react';
import * as actions from './../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './../CSS/Palabra.css';

const PrefixSuffixRoot = (props) => {
  let {
    id,
    prefixSuffixRoot,
    setPrefixSuffixRoot,
    word
  } = props;

  return (
    <div className='palabra'>
      <Link
        to={{
          pathname: '/words/prefix-suffix-roots'
        }}
        onClick={ e => setPrefixSuffixRoot(prefixSuffixRoot) }
        >
        { word } : { prefixSuffixRoot.meaning }
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setPrefixSuffixRoot: (prefixSuffixRoot) => dispatch(actions.setPrefixSuffixRoot(prefixSuffixRoot))
  }
}
export default connect(null, mapDispatchToProps)(PrefixSuffixRoot);
