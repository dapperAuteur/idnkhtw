import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthForm from './../components/Forms/AuthForm';
import ErrorMessages from './../components/Errors/ErrorMessages';
import Main from './Main';
import NavBar from './../components/NavBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: {},
      loggedIn: false,
      p: '',
      showLoginForm: false,
      showSignUpForm: false
    }
  }

  render() {
    const {
      errorMessage
    } = this.state;

    let {
      onClickShowLoginForm,
      onClickShowSignUpForm,
      showLoginForm,
      showSignUpForm
    } = this.props;
    // console.log(this.props);
    let p = this.props.location.pathname;
    return (
      <div className="App">
        <NavBar />
        <ErrorMessages
          errorMessage={ errorMessage }
          props={ this.state } />
        { showLoginForm || showSignUpForm ?
          <AuthForm
            onClose={ this.handleOnClose }
            onShowLoginForm={ onClickShowLoginForm }
            onShowSignUpForm={ onClickShowSignUpForm }
            showLoginForm={ showLoginForm }
            showSignUpForm={ showSignUpForm }
            /> : null
        }
        <Main />
        <h4 className="App-title">I Do Not Know How this Works</h4>
        {
          p === "/" &&
          <Link
            className="vision-space btn btn-default"
            to={{ pathname: "/vision" }}>
            My Vision
          </Link>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLoginForm: state.authReducer.showLoginForm,
    showSignUpForm: state.authReducer.showSignUpForm
  }
}

export default withRouter(connect(mapStateToProps)(App));
