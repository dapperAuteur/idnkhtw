import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class UpdateFourLetterWord extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    let fourLetterWord = props.location.state.fourLetterWord;
    console.log(fourLetterWord);
    const { _id, word, definition, f_points, in_game, s_points, tier, tongue } = fourLetterWord;
    this.state = {
      _id,
      p: 'fourLetterWords/',
      word,
      definition,
      f_points,
      in_game,
      s_points,
      tier,
      tongue
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let p = this.state.p;
    let { ...pObj } = { ...this.state };
    this.props.data.onSave(p, pObj);
    this.props.history.push('/words/four-letter-word');
  }

  render(){
    const { word, definition, f_points, in_game, s_points, tier, tongue } = this.state;
    return(
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
            <label htmlFor='four-letter-definition-input'>Definition</label>
            <input
            id='four-letter-word-definition-input'
            key='definition'
            name='definition'
            type='text'
            value={ definition }
            size={ 20 }
            autoComplete="off"
            onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-f_points-input'>F_Points</label>
            <input
            id='four-letter-word-f_points-input'
            key='f_points'
            name='f_points'
            type='decimal'
            value={ f_points }
            autoComplete="off"
            onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-in_game-input'>In Game</label>
            <input
            id='four-letter-word-in_game-input'
            key='in_game'
            name='in_game'
            type='boolean'
            value={ in_game }
            size={ 10 }
            onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-s_points-input'>S_Points</label>
            <input
            id='four-letter-word-s_points-input'
            key='s_points'
            name='s_points'
            type='decimal'
            value={ s_points }
            autoComplete="off"
            onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-tier-input'>Tier</label>
            <input
            id='four-letter-word-tier-input'
            key='tier'
            name='tier'
            type='decimal'
            value={ tier }
            autoComplete="off"
            onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='four-letter-tongue-input'>Tongue</label>
            <input
              id='four-letter-tongue-input'
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
            className="butons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
            >
            UPDATE
          </button>
          <Link
            to={{
              pathname: '/words/four-letter-word',
              hash: '#fourLetterWords',
              state: { p: 'fourLetterWords/' }
            }}
            className='btn btn-default'>
            CANCEL
          </Link>
        </form>
      </div>
    )
  }
}

UpdateFourLetterWord.propTypes = {
  _id: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  definition: PropTypes.string,
  f_points: PropTypes.number,
  in_game: PropTypes.bool,
  s_points: PropTypes.number,
  tier: PropTypes.number,
  tongue: PropTypes.string
}

UpdateFourLetterWord.defaultProps = {
  onSave() {},
  _id: '',
  p: 'fourLetterWords/',
  definition: '',
  f_points: 3,
  in_game: false,
  s_points: 3,
  tier: 3,
  tongue: 'English'
}

export default UpdateFourLetterWord;
