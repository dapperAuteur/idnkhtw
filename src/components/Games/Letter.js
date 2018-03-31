import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   letter: '',
    //   letters: [
    //     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    //   ]
    // }
    this.handleLetterUp1 = this.handleLetterUp1.bind(this);
  }
  handleLetterUp1(){

  }

  render() {
    // const { letter, letters } = this.state ;
    const { letter, letters } = this.props;

    return (
      <div className="letter">
        <span className="letterSpan">{ letter }</span>
      </div>
    )
  }
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired
}

Letter.defaultProps = {
  letter: "A",
  letters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

export default Letter;
