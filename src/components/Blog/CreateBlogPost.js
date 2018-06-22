import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './../CSS/Form.css';

class CreateBlogPost extends Component {
  static defaultProps = {
    onSavePost() {}
  }
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { ...pObj } = { ...this.state };
    console.log(pObj);
    let p = "posts";
    this.props.props.onSavePost({ p, pObj });
    this.setState({
      text: '',
      title: ''
    });
  }

  render() {
    const { text, title } = this.state;
    return (
      <div>
        <h1>Create Blog Post</h1>
        <form onSubmit={ this.handleSubmit }>
          <h3>Add Error message</h3>
          <label
            htmlFor='blog-title'>
            Title
          </label>
          <input
            id='title'
            key='title'
            type='text'
            name='title'
            className='form-control'
            autoComplete='off'
            value={ title }
            onChange={ this.handleChange }>
          </input>
          <label
            htmlFor='blog-post'>
            Text
          </label>
          <input
            id='text'
            key='text'
            type='text'
            name='text'
            className='form-control'
            autoComplete='off'
            value={ text }
            onChange={ this.handleChange }>
          </input>
          <button
            type='submit'
            className='btn'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateBlogPost;
