import React from 'react';
import BlogTitle from './BlogTitle';
import Post from './Post';
import Comment from './Comment';
import Tag from './Tag';

const Blog = props => {
  return (
    <div>
      <h1>Blog</h1>
      <BlogTitle />
      <Post />
      <Comment />
      <Tag />
    </div>
  );
}

export default Blog;
