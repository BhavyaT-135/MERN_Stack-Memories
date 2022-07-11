import React from 'react'
import useStyles from './styles.js'
import { useSelector } from 'react-redux';

import Post from './Post/Post.js'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();
  
  console.log(posts)
  
  return (
    <h1>POSTS!</h1>
  )
}

export default Posts;