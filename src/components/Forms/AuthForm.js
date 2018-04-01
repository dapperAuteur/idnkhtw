import React, { Component } from 'react';
import './AuthForm.css';

class AuthForm extends Component {
  static defaultProps= {
    onAuth() {},
    heading: 'Welcome back.',
    buttonText: 'Login',
    errorMessage: undefined
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
      signUp: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let { signUp, ...user } = { ...this.state };
    let { showSignUpForm } = this.props;

    this.props.onAuth({ ...user });

    this.setState({
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    });
  }

  toggleSignUp = () => {
    let signUp = this.state.signUp;
    this.setState({
      signUp: !signUp
    });
  }

  render() {
    const { email, password, profileImageUrl, username } = this.state;
    const { buttonText, errorMessage, heading, onClose, onShowLoginForm, onShowSignUpForm } = this.props;

    if (!this.props.showSignUpForm) {
      return (
        <div
          className='btn'>
          <button
            type='button'
            className='close-button'
            onClick={ onClose }>
            Close
          </button>
          <button
            type='button'
            className='btn'
            onClick={ onShowSignUpForm }>
            Sign Up
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
              htmlFor='signin-email'>
              Email
            </label>
            <input
              id='signin-email'
              key='email'
              type='text'
              name='email'
              className='form-control'
              autoComplete='off'
              value={ email }
              onChange={ this.handleChange } />
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
              { buttonText }
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div
          className='btn'>
          <button
            type='button'
            className='close-button'
            onClick={ onClose }>
            Close
          </button>
          <button
            type='button'
            className='btn'
            onClick={ onShowLoginForm }>
            Sign In
          </button>
          <form
            onSubmit={ this.handleSubmit }>
            <h2>{ heading }</h2>
            { errorMessage ? <div className=''>
              { errorMessage }</div> :
              undefined }
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
            <label
              htmlFor='signup-username'>
              <input
                id='signup-username'
                key='username'
                type='text'
                name='username'
                className='form-control'
                autoComplete='off'
                value={ username }
                onChange={ this.handleChange } />
                Username
            </label>
            <label
              htmlFor='signup-password'>
              Password
            </label>
            <input
              id='signup-password'
              key='password'
              type='password'
              name='password'
              className='form-control'
              autoComplete='off'
              value={ password }
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
            <button
              type='submit'
              className='btn'
              >
              Sign Me Up!
            </button>
          </form>
        </div>
      );
    }
  }
}

export default AuthForm;
