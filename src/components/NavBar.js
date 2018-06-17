import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../store/actions/index';
import './NavBar.css';

const NavBar = (props) => {
  console.log(props);

  const {
    currentUser,
    fourLetterWord,
    prefixSuffixRoot,
    onClickShowLoginForm,
    onClickShowSignUpForm,
    onClickSignOut,
    onLoadForms,
    onLoadLanguages,
    verbos,
    onCreateGame,
    onLoadBlogPosts,
    onLoadRandomPalabra,
    onLoadVerbos
  } = props;
  if (verbos.length === 0) {
    onLoadVerbos();
  }

  return (
    <nav className='navbar'>
      <div className='dropdown'>
        <div
          id='palabras-dropdown1'
          className='dropdown1'
        >
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            Words
          </Link>
          <div
            id='palabras-content1'
            className='content'>
            <Link
              to={{
                pathname: '/words/find-palabra',
                state: {
                  random: false
                }
              }}
              className='btn btn-default'
            >
              Find Word
            </Link>
            <Link
              to={{
                pathname: '/games/four-letter-word',
                state: { p: 'four-letter-words/' }
              }}
              onClick={ onCreateGame }
              className='btn btn-default'
            >
              Cows & Bulls
            </Link>
            <Link
              to={{
                pathname: '/comics',
                state: { p: 'comics/' }
              }}
              onClick={ onLoadBlogPosts }
              className='btn btn-default'
            >
              Comics
            </Link>
          </div>
        </div>
        <div
          id='palabras-dropdown2'
          className='dropdown1'>
          <Link
            to={ '/' }
            className='btn btn-default'
          >
            Word Lists
          </Link>
          <div
            id='palabras-content2'
            className='content'>
          <Link
            to={{
              pathname: '/words/four-letter-word',
              state: {
                p: 'four-letter-words/',
                fourLetterWord
              }
            }}
            onClick={ onLoadRandomPalabra }
            className='btn btn-default'
          >
            Four Letter Word
          </Link>
          <Link
            to={{
              pathname: '/words/prefix-suffix-root',
              state: {
                p: 'prefix-suffix-roots/',
                prefixSuffixRoot
              }
            }}
            onClick={ onLoadRandomPalabra }
            className='btn btn-default'
          >
            Prefix Suffix Root
          </Link>
          <Link
            to={{
              pathname: '/words/verbo'
            }}
            onClick={ props.onRandomVerbo }
            className='btn btn-default'
          >
            Verbo
          </Link>
          </div>
        </div>
        <div className='auth'>
          { currentUser.token ?
            <ul
              className=''>
              <li>
                <button className=''>
                  { currentUser.username }
                </button>
              </li>
              <li>
                <button
                  className=''>
                  <img
                    src={ currentUser.profileImageUrl }
                    alt='currentUser' />
                </button>
              </li>
              <li
                onClick={ onClickSignOut }>
                <button
                  className='btn btn-default'>
                  Log out
                </button>
              </li>
            </ul> :
            <ul
              className=''>
              <li>
                <button
                  onClick={ onClickShowSignUpForm }
                  className='btn btn-default'>
                  Sign up
                </button>
              </li>
              <li>
                <button
                  onClick={ onClickShowLoginForm }
                  className='btn btn-default'>
                  Sign in
                </button>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    verbo: state.verboReducer.verbo,
    verbos: state.verboReducer.verbos
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    onClickSignOut: () => dispatch(actions.userLogout()),
    onClickShowLoginForm: () => dispatch(actions.showLoginForm()),
    onClickShowSignUpForm: () => dispatch(actions.showSignUpForm()),
    onLoadVerbos: () => dispatch(actions.loadVerbos()),
    onRandomVerbo: () => dispatch(actions.randomVerbo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
