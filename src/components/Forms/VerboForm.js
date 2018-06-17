import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import '../CSS/Form.css';

class VerboForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    let pathname = props.location.pathname;
    let {
      currentUser,
      verbo
    } = props;
    this.state = {
      currentUser,
      cambiar_de_irregular: '',
      categoría_de_irregular: '',
      english: '',
      grupo: '',
      irregular: '',
      reflexive: '',
      spanish: '',
      terminación: '',
      onAddVerbo: props.onClickCreateVerbo,
      onUpdateVerbo: props.onClickUpdateVerbo,
      pathname,
      verbo
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
      onAddVerbo,
      onUpdateVerbo,
      pathname,
      ...form
    } = this.state;
    console.log(this.state);
    console.log(form);
    console.log(pathname);
    form.token = currentUser.token;
    form.currentUserRole = currentUser.userRole;
    form.currentUserId = currentUser.userId;
    console.log(form);
    if (pathname === '/words/verbos/edit') {
      for (var p in form) {
        if (form.hasOwnProperty(p)) {
          console.log(form[p]);
          if (form[p] === "") {
            delete form[p];
          }
        }
      }
      console.log(form);
      form._id = this.props.verbo._id;
      form.verboId = this.props.verbo._id;
      onUpdateVerbo({ ...form });
    } else {
      onAddVerbo({ ...form });
    }
    this.setState({
      cambiar_de_irregular: '',
      categoría_de_irregular: '',
      english: '',
      grupo: '',
      irregular: '',
      reflexive: '',
      spanish: '',
      terminación: ''
    });
    this.props.history.push('/words/verbos');
  }

  render(){
    const {
      spanish,
      english,
      reflexive,
      irregular,
      categoría_de_irregular,
      cambiar_de_irregular,
      terminación,
      grupo,
      verbo
    } = this.state;
    return (
      <div className='word-form-conatiner'>
        <form className='word-form' onSubmit={ this.handleSubmit }>
          <div className='word-form-line'>
            <label htmlFor='verbo-spanish-input'>Spanish Word</label>
            <input
              id='verbo-spanish-input'
              key='spanish'
              name='spanish'
              type='text'
              value={ spanish }
              size={ 15 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.spanish }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-english-input'>English Translation</label>
            <input
              id='verbo-english-input'
              key='english'
              name='english'
              type='text'
              value={ english }
              size={ 15 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.english }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-reflexive-input'>Reflexive</label>
            <input
              id='verbo-reflexive-input'
              key='reflexive'
              name='reflexive'
              type='boolean'
              value={ reflexive }
              size={ 10 }
              onChange={ this.handleChange } /> | { verbo.reflexive }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-irregular-input'>Irregular</label>
            <input
              id='verbo-irregular-input'
              key='irregular'
              name='irregular'
              type='boolean'
              value={ irregular }
              size={ 10 }
              onChange={ this.handleChange } /> | { verbo.irregular }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-categoría-de-irregular-input'>Categoría de Irregular</label>
            <input
              id='verbo-categoría-de-irregular-input'
              key='categoría_de_irregular'
              name='categoría_de_irregular'
              type='text'
              value={ categoría_de_irregular }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.categoría_de_irregular }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-cambiar-de-irregular-input'>Cambiar de Irregular</label>
            <input
              id='verbo-cambiar-de-irregular'
              key='cambiar_de_irregular'
              name='cambiar_de_irregular'
              type='text'
              value={ cambiar_de_irregular }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.cambiar_de_irregular }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-terminación-input'>Terminación</label>
            <input
              id='verbo-terminación-input'
              key='terminación'
              name='terminación'
              type='text'
              value={ terminación }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.terminación }
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-grupo'>Grupo</label>
            <input
              id='verbo-grupo'
              key='grupo'
              name='grupo'
              type='decimal'
              value={ grupo }
              autoComplete="off"
              onChange={ this.handleChange } /> | { verbo.grupo }
          </div>
          <Link
            to={{
              pathname: '/words/verbos'
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

VerboForm.propTypes = {
  spanish: PropTypes.string,
  english: PropTypes.string,
  reflexive: PropTypes.bool,
  irregular: PropTypes.bool,
  categoría_de_irregular: PropTypes.string,
  cambiar_de_irregular: PropTypes.string,
  terminación: PropTypes.string,
  grupo: PropTypes.number
}

VerboForm.defaultProps = {
  onSave() {},
  reflexive: false,
  irregular: false
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.authReducer.currentUser,
    verbo: state.verboReducer.verbo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCreateVerbo: (obj) => dispatch(actions.createVerbo(obj)),
    onClickUpdateVerbo: (obj) => dispatch(actions.updateVerbo(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerboForm);
