import React from 'react';
import * as actions from './../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './../CSS/Palabra.css';

const Verbo = (props) => {
  // console.log(props);
  let {
    english,
    id,
    setVerbo,
    spanish,
    verbo
  } = props;
  // console.log(setVerbo);

  return (
    <div className='palabra'>
      <Link
        onClick={ e => setVerbo(verbo) }
        to={{
          pathname: '/words/verbos'
        }}
        >
        { spanish } : { english }
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setVerbo: (verbo) => dispatch(actions.setVerbo(verbo))
  }
}
export default connect(null, mapDispatchToProps)(Verbo);
