import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../store/actions/index';
import * as apiCalls from './../actions/api';
import AuthForm from './../components/Forms/AuthForm';
import ErrorMessages from './../components/Errors/ErrorMessages';
import Main from './Main';
import NavBar from './../components/NavBar';
import Vision from './../components/Vision/Vision';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: {},
      loggedIn: false,
      p: '',
      showEnglish: false,
      showLoginForm: false,
      showSignUpForm: false
    }
  }

  render() {
    const {
      errorMessage,
      showEnglish
    } = this.state;

    let {
      currentUser,
      onClickShowLoginForm,
      onClickShowSignUpForm,
      showLoginForm,
      showSignUpForm
    } = this.props;
    // console.log(this.props);
    let p = this.props.location.pathname;
    return (
      <div className="App">
        <NavBar
          onCreateGame={ this.handleCreateGame }
          onLoadRandomPalabra={ this.handleLoadRandomPalabra }
          onLogout={ this.handleLogOut }
          />
        <ErrorMessages
          errorMessage={ errorMessage }
          props={ this.state } />
        { showLoginForm || showSignUpForm ?
          <AuthForm
            onClose={ this.handleOnClose }
            onShowLoginForm={ this.onClickShowLoginForm }
            onShowSignUpForm={ this.onClickShowSignUpForm }
            showLoginForm={ showLoginForm }
            showSignUpForm={ showSignUpForm }
            /> : null
        }
        <Main />
        {
          p === "/" &&
          <Link
            className="btn btn-default"
            to={{ pathname: "/vision" }}>
            My Vision
          </Link>
        }
        <h4 className="App-title">I Do Not Know How this Works</h4>
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

export default withRouter(connect(mapStateToProps)(App));
