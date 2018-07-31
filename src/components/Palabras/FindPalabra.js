import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Palabras from './Palabras';
import './../CSS/FindPalabras.css';

class FindPalabra extends Component {
  static propTypes = {
    liveSearch: PropTypes.string,
    list: PropTypes.string,
    lists: PropTypes.arrayOf(PropTypes.string)
  };
  static defaultProps = {
    liveSearch: '',
    list: '',
    lists: ['Choose A List', 'four-letter-words', 'prefix-suffix-roots', 'users', 'verbos']
  };
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      liveSearch: '',
      list: '',
      lists: ['Choose A List', 'four-letter-words', 'prefix-suffix-roots', 'users', 'verbos'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    let {
      list
    } = { ...this.state };
    switch (list) {
      case 'four-letter-words':
      case 'prefix-suffix-roots':
      case 'verbos':
      default:
        return null;
    };
  };
  render() {
    let {
      liveSearch,
      list,
      lists
    } = this.state;
    return (
      <div className='word-form-container find-palabras'>
        <div>
          <form className='word-form' onSubmit={ this.handleSubmit }>
            <span className='form-letter'>
              <label htmlFor='word-list'>Word List</label>
              <select
                id='word-list'
                className='letterSpan'
                key='list'
                name='list'
                value={ list }
                onChange={ this.handleChange }>
                { lists.map((( list, i ) => (
                  <option
                    key={ i }
                    value={ list }>
                      { list }
                  </option>
                )))
              };
              </select>
            </span>
            <div className='live-search-form-line'>
              <label htmlFor='live-search-input'>Live Search</label>
              <input
                id='live-search-input'
                key='liveSearch'
                name='liveSearch'
                type='text'
                value={ liveSearch }
                autoComplete="off"
                onChange={ this.handleChange } />
            </div>
            <button
              type='submit'
              className='buttons'
              style={{ alignSelf: 'flex-end', marginRight: 0 }}>
              SUBMIT
            </button>
          </form>
        </div>
        <Palabras
          list={ list }
          liveSearch={ liveSearch } />
      </div>
    );
  };
};

export default FindPalabra;
