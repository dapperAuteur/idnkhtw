import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to='/'>
            Home
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/signup'>Sign up
            </Link>
          </li>
          <li>
            <Link to='/signin'>Sign In
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(NavBar);
