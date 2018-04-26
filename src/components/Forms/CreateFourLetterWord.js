import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class CreateFourLetterWords extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p: 'four-letter-words/',
      word: '',
      tongue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let p = this.state.p;
    let { ...pObj } = { ...this.state };
    this.props.data.onSave(p, pObj);
    this.setState({
      word: '',
      tongue: ''
    });
    this.props.history.push('/words/four-letter-word');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { word, tongue } = this.state;
    return (
      <div className='word-form-container'>
        <form className='word-form' onSubmit={ this.handleSubmit }>
          <div className='word-form-line'>
            <label htmlFor='four-letter-word-input'>Word</label>
            <input
              id='four-letter-word-input'
              key='word'
              name='word'
              type='text'
              value={ word }
              size={ 4 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-word-tongue-input'>Tongue</label>
            <input
              id='four-letter-word-tongue-input'
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

CreateFourLetterWords.propTypes = {
  p: PropTypes.string.isRequired,
  word: PropTypes.string,
  tongue: PropTypes.string
}

CreateFourLetterWords.defaultProps = {
  onSave() {},
  p: 'four-letter-words/',
  tongue: "English"
}

export default CreateFourLetterWords;
