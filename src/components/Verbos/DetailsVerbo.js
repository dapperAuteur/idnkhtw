import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
import IrregularCategoria from './IrregularCategoria';

import './DetailsVerbo.css';

const DetailsVerbo = (props) => {
  // console.log(props);
  let grupo;
  let {
    currentUser,
    onDeleteVerbo,
    onRandomVerbo,
    onShowEnglish,
    showEnglish,
    verbo
  } = props;

  if (typeof verbo.grupo === "number") {
    grupo = <h3>Group: { verbo.grupo.toString() }</h3>;
  }
  return (
    <div>
      <h1>{ verbo.spanish }</h1>
      <h3>{ verbo.terminación }</h3>
      { grupo }
      {
        showEnglish &&
        <h3>English: { verbo.english }</h3>
      }
      {
        verbo.reflexive &&
      <h3 className="reflexive">Reflexive</h3>
      }
      {
        verbo.irregular &&
        <IrregularCategoria
          verbo={ verbo } />
      }
      {
        currentUser.userRole === 0 &&
        <div>
          <button
            onClick={ onDeleteVerbo }
            className="btn btn-danger"
            >
            Delete Word
          </button>
          <Link
            to={{
              pathname: '/words/verbos/edit'
            }}
            className="btn btn-warning"
            >
            EDIT
          </Link>
        </div>
      }
      <Link
        to={{
          pathname: '/words/verbos'
        }}
        onClick={ onRandomVerbo }
        className="btn btn-default">
        Next Word
      </Link>
      <button
        onClick={ onShowEnglish }
        className="btn btn-default">
        Show Translation
      </button>
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    showEnglish: state.verboReducer.showEnglish,
    verbo: state.verboReducer.verbo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteVerbo: () => dispatch(actions.deleteVerbo()),
    onRandomVerbo: () => dispatch(actions.randomVerbo()),
    onShowEnglish: () => dispatch(actions.showEnglish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsVerbo);
