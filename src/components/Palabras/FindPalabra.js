import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Palabras from './Palabras';
import '../CSS/Form.css';

class FindPalabra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      lists: ['Choose A List', 'fourLetterWords/', 'prefixSuffixRoots/', 'users/', 'verbos/'],
      p: '',
      word: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let p = this.state.p;
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
    let myProps = this.props;
    return (
      <div className='word-form-container'>
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
        <Palabras
          p={ p }
          findPalabra={ this.state }
          props={ myProps } />
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

export default FindPalabra;
