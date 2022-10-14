import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../redux/actions/posts'

const Form = () => {
    const post = useSelector((state) => state);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        title:'',
        body:'',
        category:'',
    })

    const changeTitle = (e) =>{
        setPostData({...postData, title: e.target.value})
    }

    const changeBody = (e) =>{
        setPostData({...postData, body: e.target.value})
    }

    const changeCategory = (e) =>{
        setPostData({...postData, category: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost(postData));
    }
    const clear = () => { 
        setPostData({
          title: '',
          body: '',
          category: '',
        })
      }
  

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='title' value={postData.title} onChange={changeTitle} />
                <input type="text" placeholder='body' value={postData.body} onChange={changeBody} />
                <input type="text" placeholder='category' value={postData.category} onChange={changeCategory} />
                <button type='submit'>Submit</button>
            </form>
            
        </>
    )
}

export default Form;