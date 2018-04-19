import React from 'react';
// import * as actions from './../actions';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  console.log(props);
  // console.log(actions);
  // console.log(actions.getRandomVerbo);
  const {
    fourLetterWord,
    prefixSuffixRoot,
    user,
    verbo,
    onCreateGame,
    onLoadRandomPalabra,
    onLogout,
    onRandomFourLetterWord,
    onRandomPrefixSuffixRoot,
    onRandomVerbo,
    onShowLoginForm,
    onShowSignUpForm
  } = props;

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
              to={ '/words/find-palabra' }
              className='btn btn-default'
            >
              Find Word
            </Link>
            <Link
              to={{
                pathname: '/games/four-letter-word',
                hash: '#fourLetterWords',
                state: { p: 'fourLetterWords/',
                fourLetterWord
                }
              }}
              onClick={ onCreateGame }
              className='btn btn-default'
            >
              Cows & Bulls
            </Link>
            <Link
              to={{
                pathname: '/blog',
                hash: '#blog',
                state: { p: 'blog/' }
              }}
              className='btn btn-default'
            >
              Blog
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
              hash: '#fourLetterWords',
              state: {
                p: 'fourLetterWords/',
                fourLetterWord
              }
            }}
            onClick={ onRandomFourLetterWord }
            className='btn btn-default'
          >
            Four Letter Word
          </Link>
          <Link
            to={{
              pathname: '/words/prefix-suffix-root',
              hash: '#prefixSuffixRoots',
              state: {
                p: 'prefixSuffixRoots/',
                prefixSuffixRoot
              }
            }}
            onClick={ onRandomPrefixSuffixRoot }
            className='btn btn-default'
          >
            Prefix Suffix Root
          </Link>
          <Link
            to={{
              pathname: '/words/verbo',
              hash: '#verbos',
              state: {
                p: 'verbos/',
                verbo
              }
            }}
            onClick={ onRandomVerbo }
            className='btn btn-default'
          >
            Verbo
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
