import React from "react";
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { Post } from "./post/post";

const Posts = () => {
    const posts = useSelector((state)=> state.posts);
    return (
      !posts.length ? <Loader/> :<>
        {posts.map((post)=> {
            return <Post key={post._id} post={post}/>
        })}
        </>
    )
}

export default Posts;