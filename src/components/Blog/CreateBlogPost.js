import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './../CSS/Form.css';

class CreateBlogPost extends Component {
  constructor(props) {
    super(props);
    console.log(props.props.onSavePost);
    this.state = {
      post: '',
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
      post: '',
      title: ''
    });
  }

  render() {
    const { post, title } = this.state;
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
            Post
          </label>
          <input
            id='post'
            key='post'
            type='text'
            name='post'
            className='form-control'
            autoComplete='off'
            value={ post }
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
