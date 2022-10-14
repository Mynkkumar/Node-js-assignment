import React from 'react'
import { useDispatch } from 'react-redux';



export const Post = ({ post}) => {
  return (
    <>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
        <h1>{post.category}</h1>
    </>
  )
}
export default Post;