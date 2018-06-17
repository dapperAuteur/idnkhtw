import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions/index';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class PrefixSuffixRootForm extends Component {
  constructor(props) {
    super(props);
    let pathname = props.location.pathname;
    let {
      currentUser,
      prefixSuffixRoot
    } = props;
    this.state = {
      currentUser,
      word: '',
      meaning: '',
      examples: '',
      type: '',
      tongue: '',
      onAddPrefixSuffixRoot: props.onClickCreatePrefixSuffixRoot,
      onUpdatePrefixSuffixRoot: props.onClickUpdatePrefixSuffixRoot,
      pathname,
      prefixSuffixRoot
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let {
      currentUser,
      onAddPrefixSuffixRoot,
      onUpdatePrefixSuffixRoot,
      pathname,
      ...form
    } = this.state;
    form.token = currentUser.token;
    form.currentUserRole = currentUser.userRole;
    form.currentUserId = currentUser.userId;
    if (pathname === '/words/prefix-suffix-roots/edit') {
      for (var p in form) {
        if (form.hasOwnProperty(p)) {
          console.log(form[p]);
          if (form[p] === "") {
            delete form[p];
          }
        }
      }
      console.log(form);
      form._id = this.props.prefixSuffixRoot._id;
      form.prefixSuffixRootId = this.props.prefixSuffixRoot._id;
      onUpdatePrefixSuffixRoot({ ...form });
    } else {
      onAddPrefixSuffixRoot({ ...form });
    }
    this.setState({
      word: '',
      meaning: '',
      examples: '',
      type: '',
      tongue: ''
    });
    this.props.history.push('/words/prefix-suffix-roots');
  }

  render(){
    const {
      word,
      meaning,
      examples,
      type,
      tongue,
      prefixSuffixRoot
    } = this.state;
    console.log(this.state);
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
              onChange={ this.handleChange } /> | { prefixSuffixRoot.word }
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
              onChange={ this.handleChange } /> | { prefixSuffixRoot.meaning }
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
              onChange={ this.handleChange } /> | { prefixSuffixRoot.examples }
          </div>
          <div className='word-form-line'>
            <label htmlFor='prefix-suffix-root-type-input'>Type</label>
            <select
              id='prefix-suffix-root-type-input'
              key='type'
              name='type'
              value= { type }
              onChange={ this.handleChange }>
              <option value="Choose One">Choose One</option>
              <option value="prefix">prefix</option>
              <option value="root">root</option>
              <option value="suffix">suffix</option>
            </select> | { prefixSuffixRoot.examples }
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
              onChange={ this.handleChange } /> | { prefixSuffixRoot.examples }
          </div>
          <Link
            to={{
              pathname: '/words/prefix-suffix-roots'
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

PrefixSuffixRootForm.proTypes = {
  word: PropTypes.string,
  meaning: PropTypes.string,
  examples: PropTypes.string,
  type: PropTypes.string,
  tongue: PropTypes.string
}

PrefixSuffixRootForm.defaultProps = {
  onSave() {},
  tongue: "English"
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    prefixSuffixRoot: state.prefixSuffixRootReducer.prefixSuffixRoot
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCreatePrefixSuffixRoot: (obj) => dispatch(actions.createPrefixSuffixRoot(obj)),
    onClickUpdatePrefixSuffixRoot: (obj) => dispatch(actions.updatePrefixSuffixRoot(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrefixSuffixRootForm);
