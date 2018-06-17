import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../store/actions/index';
import './NavBar.css';

const NavBar = (props) => {
  console.log(props);

  const {
    currentUser,
    fourLetterWords,
    onClickShowLoginForm,
    onClickShowSignUpForm,
    onClickSignOut,
    onLoadFourLetterWords,
    onLoadForms,
    onLoadLanguages,
    prefixSuffixRoots,
    verbos,
    onCreateGame,
    onLoadBlogPosts,
    onLoadPrefixSuffixRoots,
    onRandomFourLetterWord,
    onRandomPrefixSuffixRoot,
    onLoadVerbos
  } = props;
  if (fourLetterWords.length === 0) {
    onLoadFourLetterWords();
  }
  if (verbos.length === 0) {
    onLoadVerbos();
  }
  if (prefixSuffixRoots.length === 0) {
    onLoadPrefixSuffixRoots();
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
              pathname: '/words/four-letter-word'
            }}
            onClick={ onRandomFourLetterWord }
            className='btn btn-default'
          >
            Four Letter Word
          </Link>
          <Link
            to={{
              pathname: '/words/prefix-suffix-root'
            }}
            onClick={ onRandomPrefixSuffixRoot }
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
    fourLetterWords: state.fourLetterWordReducer.fourLetterWords,
    prefixSuffixRoots: state.prefixSuffixRootReducer.prefixSuffixRoots,
    verbos: state.verboReducer.verbos
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    onClickSignOut: () => dispatch(actions.userLogout()),
    onClickShowLoginForm: () => dispatch(actions.showLoginForm()),
    onClickShowSignUpForm: () => dispatch(actions.showSignUpForm()),
    onLoadFourLetterWords: () => dispatch(actions.loadFourLetterWords()),
    onRandomFourLetterWord: () => dispatch(actions.randomFourLetterWord()),
    onLoadPrefixSuffixRoots: () => dispatch(actions.loadPrefixSuffixRoots()),
    onRandomPrefixSuffixRoot: () => dispatch(actions.randomPrefixSuffixRoot()),
    onLoadVerbos: () => dispatch(actions.loadVerbos()),
    onRandomVerbo: () => dispatch(actions.randomVerbo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
