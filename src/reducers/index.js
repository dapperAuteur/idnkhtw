// action creators
import { combineReducers } from 'redux';
import { fourLetterWord, fourLetterWords } from './fourLetterWords';
import { prefixSuffixRoot, prefixSuffixRoots } from './prefixSuffixRoots';
import { verbo, verbos } from './spanishVerbos';

export default combineReducers({
  fourLetterWord,
  fourLetterWords,
  prefixSuffixRoot,
  prefixSuffixRoots,
  verbo,
  verbos
});
