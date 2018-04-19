import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { withRouter } from 'react-router-dom';
import shuffle from 'shuffle-array';
import Main from './Main';
import NavBar from './../components/NavBar';
import './App.css';

const App = ({
  fourLetterWord,
  fourLetterWords,
  onRandomFourLetterWord,
  onRandomPrefixSuffixRoot,
  onRandomVerbo,
  prefixSuffixRoot,
  prefixSuffixRoots,
  verbo,
  verbos
}) => (
  <div>
    <NavBar
      onRandomFourLetterWord={ onRandomFourLetterWord }
      onRandomPrefixSuffixRoot={ onRandomPrefixSuffixRoot }
      onRandomVerbo={ onRandomVerbo } />
    <Main
      fourLetterWord={ fourLetterWord }
      fourLetterWords={ fourLetterWords }
      onRandomFourLetterWord={ onRandomFourLetterWord }
      onRandomPrefixSuffixRoot={ onRandomPrefixSuffixRoot }
      onRandomVerbo={ onRandomVerbo }
      prefixSuffixRoot={ prefixSuffixRoot }
      prefixSuffixRoots={ prefixSuffixRoots }
      verbo={ verbo }
      verbos={ verbos } />
  </div>
);

const mapStateToProps = state => ({
  fourLetterWord: state.fourLetterWord,
  fourLetterWords: state.fourLetterWords,
  prefixSuffixRoot: state.prefixSuffixRoot,
  prefixSuffixRoots: state.prefixSuffixRoots,
  verbo: state.verbo,
  verbos: state.verbos
});

const mapDispatchToProps = dispatch => ({
  onRandomFourLetterWord() { dispatch(actions.getRandomFourLetterWord()) },
  onRandomPrefixSuffixRoot() { dispatch(actions.getRandomPrefixSuffixRoot()) },
  onRandomVerbo() { dispatch(actions.getRandomVerbo()) },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
