import React from 'react';
import BlogTitle from './BlogTitle';
import CreateBlogPost from './CreateBlogPost';
import Post from './Post';
import Comment from './Comment';
import Tag from './Tag';

const Blog = props => {
  // console.log(props);
  return (
    <div>
      <h1>Blog</h1>
      <CreateBlogPost props={ props } />
      <BlogTitle />
      <Post />
      <Comment />
      <Tag />
    </div>
  );
}

export default Blog;
