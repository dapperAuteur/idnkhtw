import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import './AuthForm.css';

class AuthForm extends Component {
  static defaultProps = {
    onAuth() {},
    toggleButton() {},
    heading: 'Welcome back.',
    authButtonText: 'Login',
    formButtonText: 'Sign In',
    errorMessage: undefined
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
      signUp: true,
      onClickClose: props.onClickClose,
      onClickSignIn: props.onClickSignIn,
      onClickSignUp: props.onClickSignUp,
      showLoginForm: props.showLoginForm,
      showSignUpForm: props.showSignUpForm
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let {
      onClickSignIn,
      onClickSignUp,
      signUp,
      ...user
    } = { ...this.state };
    let { showSignUpForm } = this.props;
    if (showSignUpForm) {
      onClickSignUp({ ...user });
    } else {
      onClickSignIn({ ...user });
    };

    this.setState({
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    });
  }

  render() {
    const {
      email,
      password,
      profileImageUrl,
      signUp,
      username
    } = this.state;
    let {
      authButtonText,
      errorMessage,
      formButtonText,
      heading,
      onClickClose,
      onClickShowLoginForm,
      onClickShowSignUpForm,
      onClickSignIn,
      onShowLoginForm,
      onShowSignUpForm,
      showSignUpForm,
    } = this.props;

    if (showSignUpForm) {
      authButtonText = "Sign Me Up!";
      formButtonText = "Sign In";
      heading = "Welcome"
    } else {
      authButtonText = "Login";
      formButtonText = "Sign Up";
      heading = "Welcome Back"
    }

    return (
      <div
        className='btn'>
        <button
          type='button'
          className='close-button'
          onClick={ onClickClose }>
          Close
        </button>
        <form onSubmit={ this.handleSubmit }>
          <h2>{ heading }</h2>
          { errorMessage ?
            <div className='btn'>
              { errorMessage}
            </div> :
            undefined
          }
          <label
            htmlFor='signup-email'>
              Email
          </label>
          <input
            id='signup-email'
            key='email'
            type='text'
            name='email'
            className='form-control'
            autoComplete='off'
            value={ email }
            onChange={ this.handleChange } />
          {
            showSignUpForm &&
            <div>
              <label
                htmlFor='signin-username'>
                Username
              </label>
              <input
                id='signin-username'
                key='username'
                type='text'
                name='username'
                className='form-control'
                autoComplete='off'
                value={ username }
                onChange={ this.handleChange } />
              <label
                htmlFor='signup-image-url'>
                Image URL
              </label>
              <input
                id='signup-image-url'
                key='profileImageUrl'
                type='text'
                name='profileImageUrl'
                className='form-control'
                autoComplete='off'
                value={ profileImageUrl }
                onChange={ this.handleChange } />
            </div>
          }
          <label
            htmlFor='signin-password'>
            Password
          </label>
          <input
            id='signin-password'
            key='password'
            type='password'
            name='password'
            className='form-control'
            autoComplete='off'
            value={ password }
            onChange={ this.handleChange } />
          <button
            type='submit'
            className='btn'>
            { authButtonText }
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    showLoginForm: state.authReducer.showLoginForm,
    showSignUpForm: state.authReducer.showSignUpForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickClose: () => dispatch(actions.closeAuthForm()),
    onClickShowLoginForm: () => dispatch(actions.showLoginForm()),
    onClickShowSignUpForm: () => dispatch(actions.showSignUpForm()),
    onClickSignIn: (obj) => dispatch(actions.signIn(obj)),
    onClickSignUp: (obj) => dispatch(actions.signUp(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
