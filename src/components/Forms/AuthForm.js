import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import './AuthForm.css';

class AuthForm extends Component {
  static propTypes = {
    onAuth: PropTypes.func,
    heading: PropTypes.string,
    authButtonText: PropTypes.string,
    errorMessage: PropTypes.shape({
      message: PropTypes.string
    }),
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    profileImageUrl: PropTypes.string,
    onClickClose: PropTypes.func,
    onClickSignIn: PropTypes.func,
    onClickSignUp: PropTypes.func,
    showLoginForm: PropTypes.bool,
    showSignUpForm: PropTypes.bool,
  }
  static defaultProps = {
    onAuth() {},
    heading: 'Welcome back.',
    authButtonText: 'Login',
    errorMessage: undefined
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
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
      username
    } = this.state;
    let {
      authButtonText,
      errorMessage,
      heading,
      onClickClose,
      showSignUpForm,
    } = this.props;

    if (showSignUpForm) {
      authButtonText = "Sign Me Up!";
      heading = "Welcome"
    } else {
      authButtonText = "Login";
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
    onClickSignIn: (obj) => dispatch(actions.signIn(obj)),
    onClickSignUp: (obj) => dispatch(actions.signUp(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
