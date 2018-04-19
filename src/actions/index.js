export const getFourLetterWords = () => ({
  type: 'GET_FOUR_LETTER_WORDS'
});

export const getRandomFourLetterWord = (state) => ({
  type: 'GET_RANDOM_FOUR_LETTER_WORD',
  state
});

export const getPrefixSuffixRoots = () => ({
  type: 'GET_PREFIX_SUFFIX_ROOTS'
});

export const getRandomPrefixSuffixRoot = () => ({
  type: 'GET_RANDOM_PREFIX_SUFFIX_ROOT'
});

export const getVerbos = () => ({
  type: 'GET_VERBOS'
});

export const getRandomVerbo = () => ({
  type: 'GET_RANDOM_VERBO'
});
