import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions/index';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class CreateFourLetterWords extends Component {
  constructor(props) {
    super(props);
    let pathname = props.location.pathname;
    let {
      currentUser,
      fourLetterWord
    } = props;
    this.state = {
      currentUser,
      word: '',
      definition: '',
      tongue: '',
      onAddFourLetterWord: props.onClickCreateFourLetterWord,
      onUpdateFourLetterWord: props.onClickUpdateFourLetterWord,
      pathname,
      fourLetterWord
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let {
      currentUser,
      onAddFourLetterWord,
      onUpdateFourLetterWord,
      pathname,
      ...form
    } = this.state;
    form.token = currentUser.token;
    form.currentUserRole = currentUser.userRole;
    form.currentUserId = currentUser.userId;
    if (pathname === '/words/four-letter-words/edit') {
      for (var p in form) {
        if (form.hasOwnProperty(p)) {
          if (form[p] === "") {
            delete form[p];
          }
        }
      }
      form._id = this.props.fourLetterWord._id;
      form.fourLetterWordId = this.props.fourLetterWord._id;
      onUpdateFourLetterWord({ ...form });
    } else {
      onAddFourLetterWord({ ...form });
    }
    this.setState({
      word: '',
      definition: '',
      tongue: ''
    });
    this.props.history.push('/words/four-letter-words');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {
      currentUser,
      fourLetterWord,
      word,
      definition,
      tongue
    } = this.state;
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
              onChange={ this.handleChange } /> | { fourLetterWord.word }
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-word-input'>Definition</label>
            <input
              id='four-letter-word-definition-input'
              key='definition'
              name='definition'
              type='text'
              value={ definition }
              size={ 30 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { fourLetterWord.definition }
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
              onChange={ this.handleChange } /> | { fourLetterWord.tongue }
          </div>
          <Link
            to={{
              pathname: '/words/four-letter-words'
            }}
            className='btn btn-warning'
          >
            Cancel
          </Link>
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
  word: PropTypes.string,
  definition: PropTypes.string,
  tongue: PropTypes.string
}

CreateFourLetterWords.defaultProps = {
  onSave() {},
  tongue: "English"
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    fourLetterWord: state.fourLetterWordReducer.fourLetterWord
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCreateFourLetterWord: (obj) => dispatch(actions.createFourLetterWord(obj)),
    onClickUpdateFourLetterWord: (obj) => dispatch(actions.updateFourLetterWord(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFourLetterWords);
