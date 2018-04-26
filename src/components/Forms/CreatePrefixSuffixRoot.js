import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class CreatePrefixSuffixRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 'prefix-suffix-roots/',
      word: '',
      meaning: '',
      examples: '',
      type: '',
      tongue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let p = this.state.p;
    let { ...pObj } = { ...this.state };
    this.props.onSave(p, pObj);
    this.setState({
      word: '',
      meaning: '',
      examples: '',
      type: '',
      tongue: ''
    });
    this.props.history.push('/words/prefix-suffix-root');
  }

  render(){
    const { word, meaning, examples, type, tongue } = this.state;
    return (
      <div className='word-form-container'>
        <form className='word-form' onSubmit={ this.handleSubmit }>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-word-input'>Word</label>
            <input
              id='prefix-suffix-root-word-input'
              key='word'
              name='word'
              type='text'
              value={ word }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-meaning-input'>Meaning</label>
            <input
              id='prefix-suffix-root-meaning-input'
              key='meaning'
              name='meaning'
              type='text'
              value={ meaning }
              size={ 30 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-examples-input'>Examples</label>
            <input
              id='prefix-suffix-root-examples-input'
              key='examples'
              name='examples'
              type='text'
              value={ examples }
              size={ 60 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-type-input'>Type</label>
            <select
              id='prefix-suffix-root-type-input'
              key='type'
              name='type'
              value= { type }
              onChange={ this.handleChange }>
              <option value="prefix">prefix</option>
              <option value="root">root</option>
              <option value="suffix">suffix</option>
            </select>
          </div>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-tongue-input'>Tongue</label>
            <input
              id='prefix-suffix-root-tongue-input'
              key='tongue'
              name='tongue'
              type='text'
              value={ tongue }
              size={ 20 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

CreatePrefixSuffixRoot.proTypes = {
  p: PropTypes.string.isRequired,
  word: PropTypes.string,
  meaning: PropTypes.string,
  examples: PropTypes.string,
  type: PropTypes.string,
  tongue: PropTypes.string
}

CreatePrefixSuffixRoot.defaultProps = {
  onSave() {},
  p: 'prefix-suffix-roots/',
  tongue: "English"
}

export default CreatePrefixSuffixRoot;
