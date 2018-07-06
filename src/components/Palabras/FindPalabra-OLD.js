import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Palabras from './Palabras';
import '../CSS/FindPalabras.css';

class FindPalabra extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      _id: '',
      fourLetterWords: props.fourLetterWords,
      prefixSuffixRoots: props.prefixSuffixRoots,
      verbos: props.verbos,
      lists: ['Choose A List', 'four-letter-words/', 'prefix-suffix-roots/', 'users/', 'verbos/'],
      p: '',
      word: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let p = props.location.pathname;
    if (p === '') {
      return;
    }
    let pObj = {};
    if (this.state._id !== '') {
      pObj._id = this.state._id;
      if (this.state.word !== '') {
        pObj.word = this.state.word;
      }
    } else if (this.state.word !== '') {
      pObj.word = this.state.word;
    }
    this.props.data.onLoadPalabra(p, pObj);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { _id, lists, p, word } = this.state;
    let {
      fourLetterWords,
      prefixSuffixRoots,
      // onLoadPalabra,
      setFourLetterWord,
      setPrefixSuffixRoot,
      setVerbo,
      users,
      verbos
    } = this.props;
    return (
      <div className='word-form-container find-palabras'>
        <div>
          <form className='word-form' onSubmit={ this.handleSubmit }>
            <span className='form-letter'>
              <label htmlFor='p'>P</label>
              <select
                id='p'
                className='letterSpan'
                key='p'
                name='p'
                value={ p }
                onChange={ this.handleChange }>
                { lists.map((( list, i ) => (
                  <option
                    key={ i }
                    value={ list }>
                      { list }
                  </option>
                  )))
                }
              </select>
            </span>
            <div className='word-form-line'>
              <label htmlFor='word-input'>Word</label>
              <input
                id='word-input'
                key='word'
                name='word'
                type='text'
                value={ word }
                autoComplete="off"
                onChange={ this.handleChange } />
            </div>
            <div className='word-form-line'>
              <label htmlFor='_id-input'>id</label>
              <input
                id='_id-input'
                key='_id'
                name='_id'
                type='text'
                value={ _id }
                onChange={ this.handleChange } />
            </div>
            <button
              type="submit"
              className="buttons"
              style={{ alignSelf: 'flex-end', marginRight: 0 }}
            >
              SUBMIT
            </button>
          </form>
        </div>
        <Palabras
          p={ p }
          findPalabra={ this.state }
          props={ props }
          fourLetterWords={ fourLetterWords }
          onLoadPalabra={ onLoadPalabra }
          prefixSuffixRoots={ prefixSuffixRoots }
          users={ users }
          verbos={ verbos } />
      </div>
    )
  }
}

FindPalabra.propTypes = {
  _id: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.string).isRequired,
  p: PropTypes.string,
  word: PropTypes.string
}

FindPalabra.defaultProps = {
  _id: '',
  lists: ['Choose A List', 'fourLetterWords/', 'prefixSuffixRoots/', 'users/', 'verbos/'],
  p: '',
  word: ''
}

const mapStateToProps = state => {
  return {
    fourLetterWords: state.fourLetterWordReducer.fourLetterWords,
    prefixSuffixRoots: state.prefixSuffixRootReducer.prefixSuffixRoots,
    verbos: state.verboReducer.verbos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFourLetterWord: (fourLetterWord) => dispatch(actions.setFourLetterWord(fourLetterWord)),
    setPrefixSuffixRoot: (fourLetterWord) => dispatch(actions.setPrefixSuffixRoot(prefixSuffixRoot)),
    setVerbo: (fourLetterWord) => dispatch(actions.setVerbo(verbo))
  }
}

export default connect(mapStateToProps)(FindPalabra);
