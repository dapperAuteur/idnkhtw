import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

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
          <div id='palabras-content1'>
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
                state: { p: 'fourLetterWords/' }
              }}
              onClick={ null }
              className='btn btn-default'
            >
              Cows & Bulls
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
          <div id='palabras-content2'>
          <Link
            to={{
              pathname: '/words/four-letter-word',
              hash: '#fourLetterWords',
              state: { p: 'fourLetterWords/' }
            }}
            className='btn btn-default'
          >
            Four Letter Word
          </Link>
          <Link
            to={{
              pathname: '/words/prefix-suffix-root',
              hash: '#prefixSuffixRoots',
              state: { p: 'prefixSuffixRoots/' }
            }}
            className='btn btn-default'
          >
            Prefix Suffix Root
          </Link>
          <Link
            to={{
              pathname: '/words/verbo',
              hash: '#verbos',
              state: { p: 'verbos/' }
            }}
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
